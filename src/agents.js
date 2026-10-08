import * as THREE from "three";
import { BLOCK, isFood } from "./blocks.js";
import { clamp01, crossover, geneColor, randomGenes } from "./genes.js";
import { canTalk, converse, interpret, replyToPlayer, voice } from "./dialogue.js";
import { Civilization } from "./civilization.js";
import { findCraftSite, pickCraft, placeCraft } from "./crafts.js";

let NEXT_ID = 1;

export class Agent {
  constructor(world, civ, pos, genes = null, generation = 1, parents = null, options = {}) {
    this.id = NEXT_ID++;
    this.world = world;
    this.civ = civ;
    this.genes = genes || randomGenes();
    this.generation = generation;
    this.parents = parents;
    this.pos = pos.clone();
    this.vel = new THREE.Vector3();
    this.yaw = Math.random() * Math.PI * 2;
    this.hunger = 0.25 + Math.random() * 0.15;
    this.energy = 0.9;
    this.health = 1;
    this.age = 0;
    this.maxAge = 420 + this.genes.thrift * 260;
    this.state = "idle";
    this.target = null;
    this.home = null;
    this.wood = 0;
    this.cooldown = 0;
    this.hitCooldown = 0;
    this.alive = true;
    this.protected = false;
    this.sick = false;
    this.exiled = false;
    this.mateTimer = 0;
    this.talkCooldown = 2 + Math.random() * 4;
    this.societyAcc = Math.random() * 6;
    this.speech = null;
    this.deathReason = null;
    this.grave = null;
    this.influence = { peace: 0, hunt: 0, sea: 0, field: 0, brave: 0, build: 0, trade: 0 };
    this.playerWords = 0;
    this.culture = options.culture || civ.cultureFor?.("field") || civ.randomCulture();
    this.factionId = options.factionId || null;
    this.tongue = options.tongue || this.culture.language || "zh";
    this.bridge = options.bridge ?? Math.random() < 0.12 + this.genes.social * 0.16;
    this.will = options.will ?? clamp01(0.28 + Math.random() * 0.52);
    this.loyalty = options.loyalty ?? clamp01(0.38 + this.genes.social * 0.34);
    this.obeying = true;
    this.willAcc = 1 + Math.random() * 4;
    this.job = null;
    this.craftCooldown = 6 + Math.random() * 10;
    this.name = options.name || civ.nameChild(this.culture, this.id);
    this.life = [];
    this.path = [{ x: this.pos.x, y: this.pos.y, z: this.pos.z }];
    this.pathAcc = 0;
    this.lastSurface = this.pos.y;
    this.color = geneColor(this.genes);

    const body = new THREE.Group();
    body.userData.agent = this;
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.7, 0.28),
      new THREE.MeshLambertMaterial({ color: this.color })
    );
    torso.position.y = 0.55;
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 0.34, 0.34),
      new THREE.MeshLambertMaterial({ color: 0xf2d6b3 })
    );
    head.position.y = 1.05;
    const legL = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.4, 0.14),
      new THREE.MeshLambertMaterial({ color: 0x3a3f4b })
    );
    legL.position.set(-0.1, 0.2, 0);
    const legR = legL.clone();
    legR.position.x = 0.1;
    body.add(torso, head, legL, legR);
    this.torso = torso;
    this.head = head;
    this.mesh = body;
    this.mesh.position.copy(this.pos);
    world.scene.add(this.mesh);
    this.refreshLook();

    const parentText = parents ? `父母是${parents[0]}与${parents[1]}` : "没有父母，是被投放进世界的";
    const tongue = this.tongue === "en" ? "英文" : "中文";
    const bridge = this.bridge ? "，能跨部落交流" : "";
    this.note(`出生。${parentText}。说${tongue}${bridge}。${this.culture.origin || ""}习俗是「${this.culture.rite}」`);
  }

  faction() {
    return this.civ?.faction(this.factionId) || null;
  }

  note(text) {
    this.life.push({
      age: Math.max(0, Math.round(this.age)),
      text,
      x: Number(this.pos.x.toFixed(1)),
      z: Number(this.pos.z.toFixed(1)),
    });
    if (this.life.length > 80) this.life.splice(1, 1);
  }

  say(text, seconds = 4.2) {
    this.speech = { text, until: performance.now() + seconds * 1000 };
    this.talkCooldown = 6 + Math.random() * 5;
  }

  rename(name) {
    const next = name.trim().slice(0, 12);
    if (!next || next === this.name) return;
    const old = this.name;
    this.name = next;
    this.note(`名字从「${old}」改成「${next}」`);
    if (this.alive) this.say(`我现在叫${next}。`);
    else if (this.grave) {
      this.world.scene.remove(this.grave);
      this.becomeGrave();
    }
  }

  foodKind() {
    const sea = (this.culture.livelihood === "sea" ? 0.55 : 0) + (this.influence.sea || 0);
    const hunt = (this.culture.livelihood === "hunt" ? 0.55 : 0) + (this.influence.hunt || 0);
    const field = (this.culture.livelihood === "field" ? 0.55 : 0) + (this.influence.field || 0);
    if (sea >= hunt && sea >= field && sea > 0.3) return "fish";
    if (hunt >= field && hunt > 0.3) return "game";
    return "berry";
  }

  hear(text, bus, strength = 1) {
    const tags = interpret(text);
    this.playerWords += 1;
    const bump = (key, amount) => {
      this.influence[key] = Math.min(1, (this.influence[key] || 0) + amount * strength);
    };
    if (tags.includes("peace")) {
      bump("peace", 0.2);
      this.genes.brave = clamp01(this.genes.brave - 0.05 * strength);
      const faction = this.faction();
      if (faction) faction.ideology.warlike = Math.max(0.05, faction.ideology.warlike - 0.07 * strength);
    }
    if (tags.includes("brave")) {
      bump("brave", 0.18);
      this.genes.brave = clamp01(this.genes.brave + 0.06 * strength);
    }
    if (tags.includes("sea")) bump("sea", 0.22);
    if (tags.includes("hunt")) bump("hunt", 0.22);
    if (tags.includes("field")) bump("field", 0.22);
    if (tags.includes("build")) {
      bump("build", 0.2);
      this.genes.build = clamp01(this.genes.build + 0.06 * strength);
    }
    if (tags.includes("trade")) {
      bump("trade", 0.18);
      const faction = this.faction();
      if (faction) faction.ideology.mercantile = Math.min(0.98, faction.ideology.mercantile + 0.06 * strength);
    }
    const kind = this.foodKind();
    const wanted = tags.includes("sea") ? "sea" : tags.includes("hunt") ? "hunt" : tags.includes("field") ? "field" : null;
    if (wanted && this.influence[wanted] > 0.55 && this.culture.livelihood !== wanted) {
      this.culture = this.civ.shiftLivelihood(this.culture, wanted, this.name);
      const faction = this.faction();
      if (faction && (faction.leaderId === this.id || this.influence[wanted] > 0.75)) {
        faction.culture = this.culture;
        bus?.emit("log", `「${faction.name}」因你的话改成${this.culture.title}`);
      }
      this.note(`因为你反复说的话，活法变成了${this.culture.title}`);
    }
    const reply = replyToPlayer(this, text, tags);
    this.note(`听你说：「${text}」`);
    if (this.alive) this.say(reply, 5.5);
    this.refreshLook();
    return reply;
  }

  setCustom(rite) {
    const text = rite.trim().slice(0, 18);
    if (!text) return;
    const culture = {
      ...this.culture,
      id: this.civ.cultureSeq++,
      rite: text,
      name: `${this.culture.syllable}人 · ${text.slice(0, 6)}`,
    };
    this.culture = culture;
    const faction = this.faction();
    if (faction) {
      faction.culture = culture;
      this.note(`习俗被改成「${text}」，「${faction.name}」开始跟随`);
      this.civ.bus.emit("log", `「${faction.name}」改了习俗：${text}`);
    } else {
      this.note(`形成个人习俗「${text}」`);
    }
    this.say(text);
  }

  refreshLook() {
    const faction = this.faction();
    this.color = faction?.color || geneColor(this.genes);
    if (this.alive) {
      this.torso.material.color.setHex(this.color);
      this.head.material.color.setHex(0xf2d6b3);
      this.mesh.rotation.z = 0;
    }
  }

  die(reason, bus) {
    if (!this.alive) return;
    if (this.protected && reason !== "被你终结") {
      this.health = Math.max(this.health, 0.45);
      this.hunger = Math.min(this.hunger, 0.65);
      this.sick = false;
      return;
    }
    this.alive = false;
    this.job = null;
    this.deathReason = reason;
    this.state = "grave";
    this.speech = null;
    this.vel.set(0, 0, 0);
    this.note(`死亡：${reason}。人们立了一座写着「${this.name}」的坟墓`);
    this.becomeGrave();
    bus?.emit("death", { agent: this, reason });
  }

  becomeGrave() {
    this.mesh.visible = false;
    const gx = Math.floor(this.pos.x);
    const gz = Math.floor(this.pos.z);
    this.pos.y = this.world.surfaceY(gx, gz) + 1.02;
    if (this.grave) {
      this.world.scene.remove(this.grave);
    }
    const stone = new THREE.MeshLambertMaterial({ color: 0xc8c2b4 });
    const dark = new THREE.MeshLambertMaterial({ color: 0x8d887c });
    const markMat = new THREE.MeshLambertMaterial({ color: this.faction()?.color || 0x9a8f80 });
    const group = new THREE.Group();
    group.userData.agent = this;
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.1, 0.46), stone);
    base.position.y = 0.05;
    const slab = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.52, 0.1), dark);
    slab.position.y = 0.36;
    const mark = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.12), markMat);
    mark.position.y = 0.66;
    group.add(base, slab, mark, this.graveLabel());
    group.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.world.scene.add(group);
    this.grave = group;
  }

  graveLabel() {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(20, 16, 12, 0.72)";
    ctx.fillRect(16, 8, 224, 48);
    ctx.fillStyle = "#f6f1e6";
    ctx.font = "28px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.slice(0, 8), 128, 32);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true }));
    sprite.position.y = 1.05;
    sprite.scale.set(1.5, 0.38, 1);
    this.graveSprite = sprite;
    return sprite;
  }

  moveGrave(pos, why = "坟墓被迁走了") {
    if (this.alive) return;
    this.pos.set(pos.x, pos.y, pos.z);
    if (!this.grave) this.becomeGrave();
    this.grave.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.note(`${why}：${this.name} 的墓现在在 (${this.pos.x.toFixed(1)}, ${this.pos.z.toFixed(1)})`);
  }

  update(dt, dayPhase, agents, bus) {
    if (!this.alive) return;
    this.age += dt;
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.mateTimer = Math.max(0, this.mateTimer - dt);
    this.talkCooldown = Math.max(0, this.talkCooldown - dt);
    this.hitCooldown = Math.max(0, this.hitCooldown - dt);
    this.craftCooldown = Math.max(0, this.craftCooldown - dt);
    if (this.protectGrace > 0 && this.protectGrace < 1e6) {
      this.protectGrace -= dt;
      if (this.protectGrace <= 0 && this.protected) {
        this.protected = false;
        this.protectGrace = 0;
      }
    }
    this.willAcc -= dt;
    if (this.willAcc <= 0) {
      this.willAcc = 6 + Math.random() * 6;
      this.decideObey();
    }

    const burn = (0.0012 + (1 - this.genes.thrift) * 0.0018) * (this.state === "war" ? 1.15 : 1);
    this.hunger = Math.min(1, this.hunger + burn * dt);
    this.energy = Math.max(0, Math.min(1, this.energy - 0.002 * dt + (this.state === "sleep" ? 0.025 * dt : 0)));

    this.hazard(dt, dayPhase, agents, bus);
    if (!this.alive) return;

    this.think(dayPhase, agents, bus, dt);
    if (!this.alive) return;
    this.act(dt);
    this.physics(dt);
    this.recordPath(dt);
    this.societyAcc += dt;
    if (this.societyAcc > 8) {
      this.societyAcc = 0;
      this.civ.consider(this, agents);
    }
    if (!this.alive) return;
    this.chat(agents, bus);
    if (this.alive) {
      this.mesh.position.copy(this.pos);
      this.mesh.rotation.y = this.yaw;
    }
  }

  hazard(dt, dayPhase, agents, bus) {
    if (this.protected) return;
    const night = dayPhase < 0.22 || dayPhase > 0.78;
    const gx = Math.floor(this.pos.x);
    const gz = Math.floor(this.pos.z);
    const ground = this.world.surfaceY(gx, gz);
    const drop = this.lastSurface - (ground + 1);
    this.lastSurface = ground + 1;
    if (drop > 6) {
      this.health -= (drop - 5) * 0.1;
      this.note(`从高处坠落，掉了 ${drop.toFixed(0)} 格`);
      if (this.health <= 0) return this.die("坠崖", bus);
    }

    const under = this.world.get(gx, ground, gz);
    const at = this.world.get(gx, Math.floor(this.pos.y), gz);
    if (under === BLOCK.WATER || at === BLOCK.WATER) {
      this.health -= dt * 0.035;
      if (this.health <= 0) return this.die("溺水", bus);
    }

    const exposed = night && !(this.home && this.distXZ(this.home) < 2.8);
    if (exposed) {
      const chill = (this.exiled ? 0.006 : 0.0016) * dt * (1.1 - this.genes.brave * 0.35);
      this.health -= chill;
      if (this.health <= 0) return this.die(this.exiled ? "流放中冻死" : "冻死", bus);
    }

    if (this.sick) {
      this.health -= dt * 0.004;
      if (Math.random() < dt * 0.04) this.spreadSick(agents);
      if (this.genes.thrift > 0.45 && Math.random() < dt * 0.035) {
        this.sick = false;
        this.health = Math.min(1, this.health + 0.25);
        this.note("从疫病里恢复");
      }
      if (this.health <= 0) return this.die("病死", bus);
    } else if (Math.random() < dt * 0.0009) {
      this.sick = true;
      this.note("染上疫病");
      this.say("我好像病了。");
    }

    if (night && Math.random() < dt * 0.0002) {
      this.note("夜空里劈下一道雷");
      return this.die("遭雷击", bus);
    }

    if (this.energy < 0.04 && (this.state === "build" || this.state === "war")) {
      this.health -= dt * 0.008;
      if (this.health <= 0) return this.die("过劳而死", bus);
    }

    if (this.hunger > 0.97) {
      this.health -= dt * 0.01;
      if (this.health <= 0) return this.die("饿死", bus);
    }
    if (this.age > this.maxAge) return this.die("寿终", bus);
  }

  spreadSick(agents) {
    const other = agents.find((o) => o !== this && o.alive && !o.sick && this.pos.distanceTo(o.pos) < 2.2);
    if (!other) return;
    other.sick = true;
    other.note(`被${this.name}传染了疫病`);
  }

  recordPath(dt) {
    this.pathAcc += dt;
    if (this.pathAcc < 1.4) return;
    this.pathAcc = 0;
    const last = this.path[this.path.length - 1];
    if (last && Math.hypot(last.x - this.pos.x, last.z - this.pos.z) < 1.4) return;
    this.path.push({ x: this.pos.x, y: this.pos.y, z: this.pos.z });
    if (this.path.length > 160) this.path.splice(1, 1);
  }

  decideObey() {
    const faction = this.faction();
    if (!faction || faction.leaderId === this.id) {
      this.obeying = true;
      return;
    }
    const chance = this.loyalty * (1 - this.will * 0.72);
    const next = Math.random() < chance;
    if (next !== this.obeying) {
      this.obeying = next;
      this.note(next ? "决定暂时服从首领" : "按自己的意志行动，不服从首领");
      if (Math.random() < 0.45) this.say(voice(this, next ? "obey" : "refuse"));
    } else {
      this.obeying = next;
    }
  }

  chat(agents, bus) {
    if (this.talkCooldown > 0 || this.state === "sleep") return;
    let nearest = null;
    let best = 3.4;
    for (const other of agents) {
      if (other === this || !other.alive || other.talkCooldown > 0) continue;
      const d = this.pos.distanceTo(other.pos);
      if (d < best) {
        best = d;
        nearest = other;
      }
    }
    if (!nearest || Math.random() > 0.42) return;
    const link = canTalk(this, nearest);
    this.yaw = Math.atan2(nearest.pos.x - this.pos.x, nearest.pos.z - this.pos.z);
    nearest.yaw = Math.atan2(this.pos.x - nearest.pos.x, this.pos.z - nearest.pos.z);
    if (!link.ok) {
      this.say(voice(this, "confused"));
      nearest.say(voice(nearest, "confused"));
      if (Math.random() < 0.35) this.note(`想和${nearest.name}说话，但语言不通`);
      return;
    }
    const { line, reply } = converse(this, nearest);
    this.say(line);
    nearest.say(reply);
    if (this.life.length < 14 || Math.random() < 0.3) {
      this.note(`对${nearest.name}说：「${line}」`);
    }
    if (link.bridge && this.factionId && nearest.factionId && this.factionId !== nearest.factionId) {
      this.hunger = Math.max(0, this.hunger - 0.12);
      nearest.hunger = Math.max(0, nearest.hunger - 0.12);
      const mine = this.faction();
      const theirs = nearest.faction();
      if (mine) {
        mine.food += 1;
        mine.wealth += 2;
      }
      if (theirs) {
        theirs.food += 1;
        theirs.wealth += 2;
      }
      this.say(voice(this, "cross"), 5);
      this.note(`靠跨部落交流，和${nearest.name}谈成了好处`);
      nearest.note(`听懂了${this.name}，部族得到食物和资本`);
      bus.emit("log", `${this.name} 与 ${nearest.name} 跨部落谈成了：两边都得到食物和资本`);
    }
    bus.emit("talk", { a: this, b: nearest, line, reply });
  }

  think(dayPhase, agents, bus, dt = 0.016) {
    const night = dayPhase < 0.22 || dayPhase > 0.78;
    if (this.job) {
      this.workCraft(dt, bus, night);
      return;
    }
    if (this.hunger < 0.78 && this.craftCooldown <= 0 && this.energy > 0.2 && Math.random() < dt * (0.09 + this.genes.build * 0.12)) {
      const craft = pickCraft(this);
      if (craft) {
        const site = findCraftSite(this.world, this, craft);
        this.job = { ...craft, x: site.x, z: site.z };
        this.state = "craft";
        this.target = { x: site.x, z: site.z, world: true };
        this.note(`开始造${craft.name}。动手之后更容易出事`);
        this.say(this.tongue === "en" ? `I'm making ${craft.en}. This can kill me.` : `我在造${craft.name}，这很危险。`);
        return;
      }
    }
    const vision = 8 + this.genes.vision * 16;

    if (this.health < 0.32 && this.genes.brave < 0.6) {
      this.state = "flee";
      this.target = {
        x: this.pos.x + (Math.random() - 0.5) * 8,
        z: this.pos.z + (Math.random() - 0.5) * 8,
        world: true,
      };
      return;
    }

    if (this.hunger > 0.72 || this.state === "forage" || this.state === "fish" || this.state === "hunt") {
      const kind = this.foodKind();
      if (kind === "berry") {
        this.state = "forage";
        if (!this.target || this.target.person || this.target.critter || Math.random() < 0.05) {
          this.target = this.world.findNearest(this.pos, (id) => isFood(id), vision * (0.6 + this.genes.forage));
        }
        if (this.target && this.distTo(this.target) < 1.4) {
          const got = this.world.breakBlock(this.target.x, this.target.y, this.target.z);
          if (got) {
            this.hunger = Math.max(0, this.hunger - (0.4 + this.genes.forage * 0.2));
            this.energy = Math.min(1, this.energy + 0.15);
            if (Math.random() < 0.012) {
              this.health -= 0.18;
              this.note("吃到有毒的浆果");
              if (this.health <= 0) this.die("食物中毒", bus);
            }
            bus.emit("eat", { agent: this });
          }
          this.target = null;
          this.state = "idle";
        }
      } else {
        this.state = kind === "fish" ? "fish" : "hunt";
        const critter = this.world.nearestCritter(this.pos, kind, vision);
        if (critter) {
          this.target = {
            x: critter.mesh.position.x,
            z: critter.mesh.position.z,
            world: true,
            critter,
          };
          if (this.pos.distanceTo(critter.mesh.position) < 1.3 && this.world.collectCritter(critter)) {
            this.hunger = Math.max(0, this.hunger - 0.55);
            this.energy = Math.min(1, this.energy + 0.2);
            this.note(kind === "fish" ? "靠海捕到一条鱼" : "在林中猎到一只猎物");
            this.target = null;
            this.state = "idle";
            bus.emit("eat", { agent: this });
          }
        } else {
          this.state = "forage";
          this.target = this.world.findNearest(this.pos, (id) => isFood(id), vision);
        }
      }
      return;
    }

    const faction = this.faction();
    const wantsGrow = faction && (faction.goal === "grow" || faction.goal === "expand" || (faction.memberCount || 0) < 5);
    const refusesWar =
      wantsGrow ||
      faction?.goal === "trade" ||
      ((this.influence.peace || 0) > 0.35 && Math.random() < 0.55 + (this.influence.peace || 0));
    if (refusesWar && faction?.enemies.length) {
      if (this.talkCooldown <= 0 && Math.random() < 0.2) this.say(wantsGrow ? "人还不够，先别打。" : "我记住你的话，这回不打。");
    } else if (
      faction &&
      faction.enemies.length &&
      faction.goal === "war" &&
      this.obeying &&
      this.genes.brave > 0.42 - (this.influence.peace || 0) * 0.15
    ) {
      const enemy = this.nearestEnemy(agents, faction);
      if (!enemy) {
        const foe = this.civ.faction(faction.enemies[0]);
        if (foe && !foe.fallen) {
          this.state = "war";
          this.target = { x: foe.x, z: foe.z, world: true };
          return;
        }
      }
      if (enemy) {
        this.state = "war";
        this.target = { x: enemy.pos.x, z: enemy.pos.z, world: true, person: enemy };
        if (this.pos.distanceTo(enemy.pos) < 1.35 && this.hitCooldown <= 0) {
          this.hitCooldown = 2.2;
          const blow = 0.07 + this.genes.brave * 0.1;
          enemy.health -= blow;
          this.health -= blow * (0.25 + enemy.genes.brave * 0.15);
          this.say("为部族而战。");
          enemy.say("挡住！");
          if (this.life.filter((e) => e.text.includes("交战")).length < 4) {
            this.note(`与${enemy.name}交战`);
          }
          if (enemy.health <= 0) {
            enemy.die(`战死，死于${this.name}之手`, bus);
            faction.wealth += 3;
            faction.losses = (faction.losses || 0) + 0;
            this.civ.noteBattleLoss?.(enemy.factionId, 1);
            this.note(`打赢了${enemy.name}，部族资本增加`);
          }
          if (this.health <= 0) {
            this.civ.noteBattleLoss?.(faction.id, 1);
            this.die(`战死，死于${enemy.name}之手`, bus);
          }
        }
        return;
      }
    }

    if (faction && (faction.goal === "grow" || faction.goal === "expand") && this.hunger < 0.55 && this.mateTimer <= 0 && this.age > 28) {
      if (Math.random() < 0.04 * (0.5 + this.genes.fertility)) {
        const mate = this.findMate(agents);
        if (mate) {
          this.state = "social";
          this.target = { x: mate.pos.x, z: mate.pos.z, world: true, mate };
          if (this.pos.distanceTo(mate.pos) < 1.6) this.tryMate(mate, bus);
          return;
        }
      }
    }

    if (faction && faction.goal === "expand" && this.obeying && Math.random() < 0.03) {
      const ang = Math.random() * Math.PI * 2;
      const span = 8 + (faction.claimRadius || 6);
      this.state = "wander";
      this.target = {
        x: faction.x + Math.cos(ang) * span,
        z: faction.z + Math.sin(ang) * span,
        world: true,
      };
      return;
    }

    if (night || (this.genes.build + (this.influence.build || 0) > 0.55 && !this.home)) {
      this.state = "build";
      if (!this.home) this.home = { x: Math.floor(this.pos.x), z: Math.floor(this.pos.z) };
      if (this.wood < 4) {
        const tree = this.world.findNearest(this.pos, (id) => id === BLOCK.WOOD, vision);
        this.target = tree;
        if (tree && this.distTo(tree) < 1.5) {
          if (this.world.breakBlock(tree.x, tree.y, tree.z)) {
            this.wood += 1;
            if (Math.random() < 0.02) {
              this.health -= 0.25;
              this.note("砍树时被倒下的木头砸中");
              if (this.health <= 0) this.die("伐木事故", bus);
            }
            bus.emit("chop", { agent: this });
          }
          this.target = null;
        }
      } else {
        this.buildShelter(bus);
      }
      if (night && this.home && this.distXZ(this.home) < 2.2) {
        this.state = "sleep";
        this.energy = Math.min(1, this.energy + 0.04);
      }
      return;
    }

    if (
      this.genes.social > 0.4 &&
      this.hunger < 0.5 &&
      this.mateTimer <= 0 &&
      this.age > 30 &&
      Math.random() < 0.012 * this.genes.fertility
    ) {
      const mate = this.findMate(agents);
      if (mate) {
        this.state = "social";
        this.target = { x: mate.pos.x, z: mate.pos.z, world: true, mate };
        if (this.pos.distanceTo(mate.pos) < 1.6) this.tryMate(mate, bus);
        return;
      }
    }

    if (Math.random() < 0.01) {
      this.state = "wander";
      this.target = {
        x: this.pos.x + (Math.random() - 0.5) * (6 + this.genes.speed * 8),
        z: this.pos.z + (Math.random() - 0.5) * (6 + this.genes.speed * 8),
        world: true,
      };
    }
  }

  nearestEnemy(agents, faction) {
    let best = null;
    let bestD = 16;
    for (const other of agents) {
      if (!other.alive || !faction.enemies.includes(other.factionId)) continue;
      const d = this.pos.distanceTo(other.pos);
      if (d < bestD) {
        bestD = d;
        best = other;
      }
    }
    return best;
  }

  workCraft(dt, bus, night) {
    this.state = "craft";
    const site = { x: this.job.x, z: this.job.z, world: true };
    this.target = site;
    if (Math.hypot(this.job.x - this.pos.x, this.job.z - this.pos.z) > 1.7) return;
    if (this.wood < this.job.wood) {
      const tree = this.world.findNearest(this.pos, (id) => id === BLOCK.WOOD, 16);
      this.target = tree || site;
      if (tree && this.distTo(tree) < 1.5 && this.world.breakBlock(tree.x, tree.y, tree.z)) {
        this.wood += 1;
        this.craftAccident(bus, night, 0.65);
      }
      return;
    }
    this.job.progress += dt;
    this.job.acc += dt;
    if (this.job.acc >= 1) {
      this.job.acc = 0;
      this.craftAccident(bus, night, 1);
      if (!this.alive) return;
    }
    if (this.job.progress < this.job.seconds) return;
    placeCraft(this.world, this.job, this.job.x, this.job.z);
    this.wood = Math.max(0, this.wood - this.job.wood);
    const faction = this.faction();
    if (faction) {
      faction.wealth += this.job.reward;
      faction.food += this.job.id === "field" ? 3 : 0;
    }
    this.note(`${this.job.name}造好了`);
    this.say(this.tongue === "en" ? `The ${this.job.en.replace("a ", "")} is done.` : `${this.job.name}造好了。`);
    bus.emit("log", `${this.name} 造好了${this.job.name}`);
    this.job = null;
    this.craftCooldown = 18 + Math.random() * 16;
    this.state = "idle";
    this.target = null;
  }

  craftAccident(bus, night, scale) {
    if (!this.job || this.protected) return;
    const chance = this.job.danger * scale * (night ? 1.35 : 1) * (1.05 - this.genes.build * 0.28);
    this.health -= this.job.danger * 0.05 * scale;
    if (Math.random() > chance) return;
    const fatal = Math.random() < 0.42 + this.job.danger * 0.4;
    this.note(fatal ? `造${this.job.name}时出了致命事故` : `造${this.job.name}时受了重伤`);
    if (fatal) this.health = 0;
    else this.health -= 0.22 + this.job.danger * 0.28;
    if (this.health <= 0) this.die(this.job.death, bus);
  }

  buildShelter(bus) {
    const hx = this.home.x;
    const hz = this.home.z;
    const base = this.world.surfaceY(hx, hz) + 1;
    const spots = [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
      [-1, 0],
      [0, -1],
    ];
    for (const [dx, dz] of spots) {
      const x = hx + dx;
      const z = hz + dz;
      if (!this.world.inBounds(x, base, z)) continue;
      if (this.world.get(x, base, z) === BLOCK.AIR && this.wood > 0) {
        this.world.placeBlock(x, base, z, BLOCK.PLANKS);
        this.wood -= 1;
        if (!this.homeBuilt) {
          this.homeBuilt = true;
          this.note("盖起了自己的屋子");
        }
        if (Math.random() < 0.01) {
          this.health -= 0.2;
          this.note("屋顶塌了一角");
          if (this.health <= 0) this.die("房屋倒塌", bus);
        }
        bus.emit("build", { agent: this });
        return;
      }
    }
    this.state = "idle";
  }

  findMate(agents) {
    let best = null;
    let bestD = 10 + this.genes.social * 12;
    for (const other of agents) {
      if (other === this || !other.alive) continue;
      if (other.age < 30 || other.hunger > 0.6 || other.mateTimer > 0) continue;
      const d = this.pos.distanceTo(other.pos);
      if (d < bestD) {
        bestD = d;
        best = other;
      }
    }
    return best;
  }

  tryMate(mate, bus) {
    if (this.cooldown > 0 || mate.cooldown > 0) return;
    if (Math.random() > (this.genes.fertility + mate.genes.fertility) / 2) return;
    const childGenes = crossover(this.genes, mate.genes);
    const culture = this.civ.inheritCulture(this, mate);
    const offset = new THREE.Vector3((Math.random() - 0.5) * 1.2, 0, (Math.random() - 0.5) * 1.2);
    const childPos = this.pos.clone().add(offset);
    childPos.y = this.world.surfaceY(Math.floor(childPos.x), Math.floor(childPos.z)) + 1.1;
    const gen = Math.max(this.generation, mate.generation) + 1;
    const factionId = this.factionId || mate.factionId || null;
    const child = new Agent(this.world, this.civ, childPos, childGenes, gen, [this.name, mate.name], {
      culture,
      factionId,
      tongue: culture.language || this.tongue,
      bridge: this.bridge || mate.bridge ? Math.random() < 0.62 : Math.random() < 0.1,
      will: clamp01((this.will + mate.will) / 2 + (Math.random() - 0.5) * 0.24),
      loyalty: clamp01(0.32 + Math.random() * 0.4),
    });
    if (factionId) child.note(`一出生就属于「${child.faction()?.name || "某部"}」`);
    this.cooldown = 18;
    mate.cooldown = 18;
    this.mateTimer = 30;
    mate.mateTimer = 30;
    this.hunger += 0.08;
    mate.hunger += 0.08;
    this.say(voice(this, "birth"));
    mate.say(voice(mate, "birth"));
    this.note(`与${mate.name}生下${child.name}`);
    mate.note(`与${this.name}生下${child.name}`);
    bus.emit("birth", { child, parents: [this, mate] });
  }

  act(dt) {
    if (this.state === "sleep" || !this.target) {
      this.vel.x *= 0.8;
      this.vel.z *= 0.8;
      return;
    }
    const worldPoint = this.target.world || this.target.person || this.target.mate;
    const tx = (this.target.x ?? this.pos.x) + (worldPoint ? 0 : 0.5);
    const tz = (this.target.z ?? this.pos.z) + (worldPoint ? 0 : 0.5);
    const dx = tx - this.pos.x;
    const dz = tz - this.pos.z;
    const len = Math.hypot(dx, dz) || 1;
    if (len < 0.4 && !this.target.person && !this.target.mate) {
      this.vel.x = 0;
      this.vel.z = 0;
      return;
    }
    const speed = (1.4 + this.genes.speed * 2.4) * (this.hunger > 0.8 ? 0.75 : 1) * (this.sick ? 0.7 : 1);
    this.vel.x = (dx / len) * speed;
    this.vel.z = (dz / len) * speed;
    this.yaw = Math.atan2(dx, dz);
  }

  physics(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    this.pos.x = Math.max(1.2, Math.min(this.world.size - 1.2, this.pos.x));
    this.pos.z = Math.max(1.2, Math.min(this.world.size - 1.2, this.pos.z));
    const gx = Math.floor(this.pos.x);
    const gz = Math.floor(this.pos.z);
    const ground = this.world.surfaceY(gx, gz) + 1.0;
    if (this.pos.y > ground + 0.05) this.vel.y -= 18 * dt;
    else {
      this.pos.y = ground;
      this.vel.y = 0;
    }
    this.pos.y += this.vel.y * dt;
  }

  feed() {
    this.hunger = 0.05;
    this.energy = 1;
    this.health = Math.min(1, this.health + 0.25);
    this.note("被喂饱");
    this.say("有人给我吃的了。");
  }

  rest() {
    this.energy = 1;
    this.age = Math.max(0, this.age - 20);
    this.state = "sleep";
    this.note("被安排休息");
    this.say("我先歇一会儿。");
  }

  heal() {
    this.health = 1;
    this.sick = false;
    this.note("被治愈，疫病消失");
    this.say("我好了。");
  }

  giveWood() {
    this.wood += 4;
    this.note("得到一批木头");
    this.say("木头够用了。");
  }

  teleport(pos) {
    this.pos.copy(pos);
    this.vel.set(0, 0, 0);
    this.mesh.position.copy(this.pos);
    this.path.push({ x: this.pos.x, y: this.pos.y, z: this.pos.z });
    this.note("被挪到另一个地方");
    this.say("我被挪到了这里。");
  }

  setProtected(on) {
    this.protected = on;
    this.protectGrace = on ? 1e9 : 0;
    this.note(on ? "获得护佑，一时不会死去" : "护佑被解除");
    this.say(on ? "命运被护住了。" : "护佑解除了。");
  }

  setGene(key, value) {
    this.genes[key] = Math.max(0.05, Math.min(0.98, value));
    this.refreshLook();
  }

  distTo(t) {
    return Math.hypot(t.x + 0.5 - this.pos.x, t.z + 0.5 - this.pos.z);
  }

  distXZ(t) {
    return Math.hypot(t.x + 0.5 - this.pos.x, t.z + 0.5 - this.pos.z);
  }
}

export class AgentSystem {
  constructor(world, bus) {
    this.world = world;
    this.bus = bus;
    this.agents = [];
    this.dead = [];
    this.births = 0;
    this.deaths = 0;
    this.maxGen = 1;
    this.extinctNoted = false;
    this.civ = new Civilization(bus, world.scene);

    bus.on("birth", ({ child }) => {
      this.agents.push(child);
      this.births += 1;
      this.maxGen = Math.max(this.maxGen, child.generation);
      this.extinctNoted = false;
    });
    bus.on("death", () => {
      this.deaths += 1;
    });
  }

  seed() {
    const made = [];
    const groups = [
      { kind: "sea", bias: { forage: 0.72, thrift: 0.5, brave: 0.48 } },
      { kind: "hunt", bias: { brave: 0.78, speed: 0.7, social: 0.4 } },
      { kind: "field", bias: { build: 0.66, thrift: 0.7, social: 0.62 } },
    ];
    for (const group of groups) {
      const culture = this.civ.cultureFor(group.kind);
      const people = [];
      for (let i = 0; i < 4; i++) {
        const pos = this.world.spawnBiome(group.kind);
        const agent = new Agent(this.world, this.civ, pos, randomGenes(group.bias), 1, null, { culture });
        people.push(agent);
        made.push(agent);
      }
      this.civ.found(people[0], people.slice(1), culture);
    }
    this.agents = made;
    this.civ.tick(this.agents, 3, this.world, this.dead);
  }

  spawnOne(near) {
    const pos = near ? near.clone() : this.world.randomSpawn();
    if (near) {
      pos.x += 1.2;
      pos.y = this.world.surfaceY(Math.floor(pos.x), Math.floor(pos.z)) + 1.1;
    }
    const kind = this.world.biomeAt(Math.floor(pos.x), Math.floor(pos.z));
    const agent = new Agent(this.world, this.civ, pos, randomGenes(), 1, null, {
      culture: this.civ.cultureFor(kind),
    });
    this.agents.push(agent);
    this.extinctNoted = false;
    this.bus.emit("log", `${agent.name} 被投放进世界`);
    return agent;
  }

  find(id) {
    return this.agents.find((a) => a.id === id) || this.dead.find((a) => a.id === id) || null;
  }

  revive(agent) {
    if (!agent || agent.alive) return false;
    agent.alive = true;
    agent.deathReason = null;
    agent.hunger = 0.15;
    agent.energy = 1;
    agent.health = 1;
    agent.sick = false;
    agent.exiled = false;
    agent.age = Math.min(agent.age, agent.maxAge * 0.35);
    agent.state = "idle";
    agent.protected = true;
    agent.protectGrace = 20;
    const gx = Math.floor(agent.pos.x);
    const gz = Math.floor(agent.pos.z);
    agent.pos.y = this.world.surfaceY(gx, gz) + 1.1;
    agent.lastSurface = agent.pos.y;
    if (agent.grave) {
      agent.world.scene.remove(agent.grave);
      agent.grave.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      });
      agent.grave = null;
    }
    agent.mesh.visible = true;
    agent.mesh.rotation.z = 0;
    agent.refreshLook();
    agent.mesh.position.copy(agent.pos);
    this.dead = this.dead.filter((a) => a !== agent);
    if (!this.agents.includes(agent)) this.agents.push(agent);
    this.extinctNoted = false;
    agent.note("被复活，人生继续。短暂护佑中");
    agent.say("我又活过来了。");
    this.bus.emit("log", `${agent.name} 被你复活了`);
    return true;
  }

  update(dt, dayPhase) {
    for (const agent of this.agents) agent.update(dt, dayPhase, this.agents, this.bus);
    this.world.tickCritters();
    this.civ.tick(this.agents, dt, this.world, this.dead);
    const living = [];
    for (const agent of this.agents) {
      if (agent.alive) living.push(agent);
      else if (!this.dead.includes(agent)) this.dead.push(agent);
    }
    this.agents = living;
    if (this.agents.length === 0 && !this.extinctNoted) {
      this.extinctNoted = true;
      this.bus.emit("log", "所有人都死了。可以打开死亡名单看他们的一生，或复活，或按 R 投放新人。");
    }
  }
}
