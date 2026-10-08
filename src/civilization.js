import * as THREE from "three";

export const LIVELIHOODS = {
  sea: {
    id: "sea",
    title: "海洋文明",
    short: "海",
    origin: "住在海边，靠观潮和捕鱼活下来",
    ideology: "trade",
    rites: ["退潮之后才开饭", "新网先碰一次海水", "死者葬在听得见浪的地方"],
    taboos: ["涨潮时不下海", "不把鱼骨扔回海里", "不在船上争吵"],
    greets: ["潮平了吗", "今天网里有吗", "风从海里来"],
    syllables: ["潮", "澜", "渔", "盐", "湾", "汐"],
  },
  hunt: {
    id: "hunt",
    title: "狩猎文明",
    short: "猎",
    origin: "住在林子里，靠追踪和捕猎活下来",
    ideology: "war",
    rites: ["猎获先分给追得最久的人", "出发前摸一下弓", "死者葬向最后一次兽踪"],
    taboos: ["不空手下山", "不猎幼兽", "夜里不单独去追"],
    greets: ["有踪迹吗", "今天风往哪边", "弓还在"],
    syllables: ["狩", "野", "弓", "林", "踪", "石"],
  },
  field: {
    id: "field",
    title: "农耕文明",
    short: "田",
    origin: "住在草地，靠采集和耕种活下来",
    ideology: "share",
    rites: ["饭前先把一份埋进土里", "种子不一次吃完", "死者葬在田边"],
    taboos: ["不浪费浆果", "不踩发芽的地方", "收成前不远行"],
    greets: ["地还湿吗", "你吃了吗", "种子留了吗"],
    syllables: ["禾", "田", "谷", "麦", "土", "安"],
  },
};
const SYLLABLES = ["青", "禾", "澜", "石", "宁", "昭", "川", "野", "拾", "安", "栗", "澄"];
const SUFFIXES = ["氏", "生", "子", ""];
const IDEOLOGIES = [
  { id: "share", name: "均分", text: "收获先归众人，再谈私欲", warlike: 0.15, mercantile: 0.45, pious: 0.35, lawful: 0.55 },
  { id: "war", name: "征伐", text: "边界是打出来的", warlike: 0.62, mercantile: 0.25, pious: 0.15, lawful: 0.35 },
  { id: "trade", name: "市易", text: "一条路胜过一支矛", warlike: 0.18, mercantile: 0.92, pious: 0.12, lawful: 0.5 },
  { id: "rite", name: "祭祀", text: "先敬火，再谈明天", warlike: 0.28, mercantile: 0.25, pious: 0.93, lawful: 0.4 },
  { id: "law", name: "律法", text: "没有规矩，聚落就会散", warlike: 0.34, mercantile: 0.4, pious: 0.2, lawful: 0.93 },
];
const COLORS = [0xc45c26, 0x2f6f4e, 0x3d5a99, 0x8d3d55, 0xb8860b, 0x4d6b7a];
const STAGE_RANK = { 游群: 0, 营地: 1, 村落: 2, 城邦: 3 };

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function cloneIdeology(src) {
  return { ...src };
}

export class Civilization {
  constructor(bus, scene) {
    this.bus = bus;
    this.scene = scene;
    this.factions = [];
    this.acc = 0;
    this.cultureSeq = 1;
    this.factionSeq = 1;
    this.cultures = [
      this.cultureFor("sea", null, "zh"),
      this.cultureFor("hunt", null, "en"),
      this.cultureFor("field", null, "zh"),
    ];
  }

  cultureFor(livelihood, from = null, language = null) {
    const spec = LIVELIHOODS[livelihood] || LIVELIHOODS.field;
    const syllable = from?.syllable || pick(spec.syllables);
    const rite = from?.rite || pick(spec.rites);
    const tongue = language || from?.language || (Math.random() < 0.45 ? "en" : "zh");
    return {
      id: this.cultureSeq++,
      livelihood: spec.id,
      title: spec.title,
      origin: spec.origin,
      syllable,
      suffix: from?.suffix || pick(SUFFIXES),
      rite,
      taboo: from?.taboo || pick(spec.taboos),
      greeting: from?.greeting || pick(spec.greets),
      language: tongue,
      name: `${syllable}人 · ${spec.title}`,
    };
  }

  randomCulture(from = null) {
    return this.cultureFor(from?.livelihood || pick(["sea", "hunt", "field"]), from);
  }

  mutateCulture(base, inventor) {
    const spec = LIVELIHOODS[base?.livelihood] || LIVELIHOODS.field;
    const next = this.cultureFor(spec.id, base);
    const roll = Math.random();
    if (roll < 0.34) next.rite = pick(spec.rites.filter((r) => r !== base.rite));
    else if (roll < 0.67) next.taboo = pick(spec.taboos.filter((r) => r !== base.taboo));
    else next.greeting = pick(spec.greets.filter((r) => r !== base.greeting));
    if (Math.random() < 0.35) next.syllable = pick(spec.syllables);
    next.name = `${next.syllable}人 · ${next.title}`;
    this.bus.emit("log", `${inventor} 沿${next.title}演化出新习俗：${next.rite}`);
    return next;
  }

  shiftLivelihood(culture, livelihood, speaker) {
    const next = this.cultureFor(livelihood, culture);
    this.bus.emit("log", `${speaker} 的活法从「${culture.title || "旧习俗"}」转向「${next.title}」`);
    return next;
  }

  nameChild(culture, id) {
    if (culture.language === "en") {
      const names = ["Ada", "Ben", "Cora", "Drew", "Eden", "Finn", "Gray", "Hope", "Ivy", "Jules", "Kai", "Lane", "Moss", "Nell", "Owen", "Pia", "Quinn", "Reed", "Sage", "Tess", "Uma", "Vale", "Wynn"];
      const first = names[id % names.length];
      const second = names[(id * 5 + 2) % names.length];
      return first === second ? first : `${first} ${second}`;
    }
    const second = SYLLABLES[(id * 3) % SYLLABLES.length];
    const given = culture.syllable === second ? SYLLABLES[(id + 4) % SYLLABLES.length] : second;
    return `${culture.syllable}${given}${culture.suffix}`;
  }

  inheritCulture(a, b) {
    const base = Math.random() < 0.5 ? a.culture || this.cultures[0] : b.culture || this.cultures[0];
    if (Math.random() < 0.2) return this.mutateCulture(base, `${a.name}与${b.name}的后代`);
    return base;
  }

  faction(id) {
    return this.factions.find((f) => f.id === id) || null;
  }

  found(leader, neighbors, culture = leader.culture) {
    const spec = LIVELIHOODS[culture.livelihood] || LIVELIHOODS.field;
    const ideology = cloneIdeology(IDEOLOGIES.find((item) => item.id === spec.ideology) || pick(IDEOLOGIES));
    const color = COLORS[this.factions.length % COLORS.length];
    const faction = {
      id: this.factionSeq++,
      name: culture.language === "en" ? { sea: "Tide Band", hunt: "Hunt Band", field: "Field Band" }[spec.id] || "Band" : `${culture.syllable}${spec.short}部`,
      culture,
      ideology,
      color,
      wealth: 6,
      food: 4,
      wood: 2,
      stage: "游群",
      enemies: [],
      leaderId: leader.id,
      fallen: false,
      marker: null,
      x: leader.pos.x,
      z: leader.pos.z,
      goal: "grow",
      claimRadius: 6,
      losses: 0,
      peakMembers: 1,
      language: culture.language === "en" ? "en" : "zh",
      leaderName: leader.name,
      electionAcc: 0,
    };
    this.placeMarker(faction);
    this.factions.push(faction);
    const members = [leader, ...neighbors.filter((n) => n.alive && !n.factionId)].slice(0, 4);
    for (const member of members) this.join(member, faction, member === leader);
    const tongue = faction.language === "en" ? "英文" : "中文";
    this.bus.emit("log", `${leader.name} 建立「${faction.name}」。说${tongue}。${culture.origin}。思想是${ideology.name}`);
    return faction;
  }

  join(agent, faction, asLeader = false) {
    if (!agent.alive || faction.fallen) return;
    agent.factionId = faction.id;
    agent.culture = faction.culture;
    agent.tongue = faction.language === "en" ? "en" : "zh";
    if (asLeader) {
      faction.leaderId = agent.id;
      faction.leaderName = agent.name;
      agent.obeying = true;
    }
    agent.refreshLook();
    agent.note(`加入「${faction.name}」，说${agent.tongue === "en" ? "英文" : "中文"}，信奉${faction.ideology.name}`);
    agent.say(agent.tongue === "en" ? `I belong to ${faction.name}.` : `我是${faction.name}的人。`);
  }

  placeMarker(faction) {
    const pole = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 2.2, 0.18),
      new THREE.MeshLambertMaterial({ color: faction.color })
    );
    const flag = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.4, 0.08),
      new THREE.MeshLambertMaterial({ color: faction.color })
    );
    flag.position.set(0.4, 0.7, 0);
    pole.add(flag);
    pole.position.set(faction.x, 0, faction.z);
    this.scene.add(pole);
    faction.marker = pole;
  }

  syncMarker(faction, world) {
    if (!faction.marker) return;
    const x = Math.max(1, Math.min(62, Math.round(faction.x)));
    const z = Math.max(1, Math.min(62, Math.round(faction.z)));
    const y = world.surfaceY(x, z) + 1;
    faction.marker.position.set(x + 0.5, y, z + 0.5);
    const h = 1.6 + STAGE_RANK[faction.stage] * 0.45;
    faction.marker.scale.set(1, h / 2.2, 1);
  }

  consider(agent, agents) {
    if (!agent.alive) return;
    if (!agent.factionId) {
      const nearby = agents.filter((o) => o !== agent && o.alive && agent.pos.distanceTo(o.pos) < 8);
      const hosted = nearby.find((o) => o.factionId && !this.faction(o.factionId)?.fallen);
      if (hosted && Math.random() < 0.65) {
        this.join(agent, this.faction(hosted.factionId));
      } else if (nearby.length && agent.genes.social > 0.42 && Math.random() < 0.55) {
        this.found(agent, nearby);
      }
      return;
    }

    const faction = this.faction(agent.factionId);
    if (!faction || faction.fallen) return;

    if (agent.wood > 0 && agent.obeying !== false && Math.random() < 0.5) {
      agent.wood -= 1;
      faction.wood += 1;
      faction.wealth += 2;
      agent.note(`向「${faction.name}」缴纳了木头，资本增加`);
    }
    if (Math.random() < 0.35) {
      faction.food += 1;
      faction.wealth += 1;
    }

    if (agent.genes.social > 0.58 && Math.random() < 0.18) {
      const evolved = this.mutateCulture(agent.culture, agent.name);
      agent.culture = evolved;
      if (faction.leaderId === agent.id || Math.random() < 0.5) {
        faction.culture = evolved;
        agent.note(`把新习俗「${evolved.rite}」定为族中惯例`);
        for (const other of agents) {
          if (other.alive && other.factionId === faction.id) other.culture = evolved;
        }
      } else {
        agent.note(`私下形成习俗「${evolved.rite}」，禁忌是${evolved.taboo}`);
      }
    }

    this.maybeDuel(agent, agents);
    this.maybePunish(agent, agents);
  }

  maybeDuel(agent, agents) {
    const faction = this.faction(agent.factionId);
    if (faction && faction.goal !== "war") return;
    if (agent.genes.brave < 0.82) return;
    const rival = agents.find(
      (o) =>
        o !== agent &&
        o.alive &&
        o.factionId &&
        o.factionId !== agent.factionId &&
        o.genes.brave > 0.78 &&
        agent.pos.distanceTo(o.pos) < 2.2
    );
    if (!rival || Math.random() > 0.12) return;
    agent.health -= 0.18;
    rival.health -= 0.18;
    agent.note(`与${rival.name}决斗`);
    rival.note(`与${agent.name}决斗`);
    agent.say("一对一。");
    if (agent.health <= 0) agent.die("决斗而死", this.bus);
    if (rival.health <= 0) rival.die("决斗而死", this.bus);
  }

  maybePunish(agent, agents) {
    const faction = this.faction(agent.factionId);
    if (!faction) return;
    const atWar = faction.enemies.length > 0;
    if (atWar && faction.goal === "war" && faction.ideology.warlike > 0.8 && agent.genes.brave < 0.2 && Math.random() < 0.08) {
      agent.note(`被「${faction.name}」认定临阵退缩`);
      agent.die("临阵被处刑", this.bus);
      return;
    }
    if (faction.ideology.lawful > 0.75 && agent.sick && Math.random() < 0.3) {
      agent.factionId = null;
      agent.exiled = true;
      agent.note(`因疫病被「${faction.name}」流放`);
      agent.say("我被赶走了。");
      agent.refreshLook();
    }
    if (agents && faction.ideology.mercantile > 0.7 && Math.random() < 0.2) {
      const other = this.factions.find((f) => f.id !== faction.id && !f.fallen);
      if (!other) return;
      faction.wealth += 3;
      other.wealth += 3;
      agent.note(`代表「${faction.name}」与「${other.name}」完成交易`);
      agent.state = "trade";
    }
  }

  refresh(agents, world) {
    for (const faction of this.factions) {
      const members = agents.filter((a) => a.alive && a.factionId === faction.id);
      faction.memberCount = members.length;
      if (!members.length && !faction.fallen) {
        faction.fallen = true;
        faction.stage = "覆灭";
        this.bus.emit("log", `势力「${faction.name}」覆灭了`);
      }
      const stageBonus = (STAGE_RANK[faction.stage] || 0) * 12;
      faction.power = members.length * 10 + faction.wealth + stageBonus;
      if (members.length) {
        faction.x = members.reduce((s, a) => s + a.pos.x, 0) / members.length;
        faction.z = members.reduce((s, a) => s + a.pos.z, 0) / members.length;
        const leader = members.find((a) => a.id === faction.leaderId);
        faction.leaderName = leader ? leader.name : "无";
      }
      let stage = "游群";
      if (members.length >= 3 && faction.wealth >= 10) stage = "营地";
      if (members.length >= 5 && faction.wealth >= 24) stage = "村落";
      if (members.length >= 7 && faction.wealth >= 45) stage = "城邦";
      if (!faction.fallen && stage !== faction.stage && STAGE_RANK[stage] > STAGE_RANK[faction.stage]) {
        faction.stage = stage;
        this.bus.emit("log", `「${faction.name}」发展成${stage}。资本 ${faction.wealth}，势力 ${faction.power}`);
        for (const member of members) member.note(`亲眼看见「${faction.name}」成为${stage}`);
        if (stage === "村落" || stage === "城邦") this.evolveDoctrine(faction);
      } else if (!faction.fallen) {
        faction.stage = stage;
      }
      this.syncMarker(faction, world);
    }
  }

  evolveDoctrine(faction) {
    const extra = pick(["储粮过冬", "立一块界石", "把习俗刻在木板上", "推举战时首领", "开辟交换的空地"]);
    faction.ideology = {
      ...faction.ideology,
      text: `${faction.ideology.text}，并且${extra}`,
    };
    this.bus.emit("log", `「${faction.name}」的思想写成：${faction.ideology.text}`);
  }

  noteBattleLoss(factionId, n = 1) {
    const faction = this.faction(factionId);
    if (!faction) return;
    faction.losses = (faction.losses || 0) + n;
  }

  chooseGoals() {
    for (const faction of this.factions) {
      if (faction.fallen) continue;
      const members = faction.memberCount || 0;
      faction.peakMembers = Math.max(faction.peakMembers || 0, members);
      const shrinking = members > 0 && members < (faction.peakMembers || members) * 0.7;
      const lowPeople = members < 5;
      const rich = faction.wealth >= 28 && faction.food >= 10;
      const bloody = (faction.losses || 0) >= 2;
      let goal = "grow";
      if (lowPeople || shrinking || bloody) goal = "grow";
      else if (faction.ideology.mercantile > 0.55 && rich) goal = "trade";
      else if (members >= 5 && faction.wealth >= 16 && (faction.claimRadius || 6) < 18) goal = "expand";
      else if (
        members >= 7 &&
        faction.wealth >= 30 &&
        faction.ideology.warlike > 0.55 &&
        !bloody &&
        faction.enemies.length
      ) {
        goal = "war";
      } else if (members >= 6 && rich) goal = "expand";
      if (faction.goal !== goal) {
        faction.goal = goal;
        const labels = { grow: "繁衍人口", expand: "开拓国土", trade: "互通市易", war: "有限征伐" };
        this.bus.emit("log", `「${faction.name}」改行利益最优：${labels[goal]}`);
      }
      if ((goal === "grow" || goal === "trade") && faction.enemies.length) {
        for (const enemyId of [...faction.enemies]) {
          const other = this.faction(enemyId);
          if (other) this.makePeace(faction, other, "为了保人与保地，主动停战");
        }
        faction.losses = 0;
      }
      if (goal === "expand" && Math.random() < 0.55) {
        faction.claimRadius = Math.min(22, (faction.claimRadius || 6) + 1);
        faction.wealth += 1;
      }
      if (goal === "grow" && faction.food > 0) {
        faction.food = Math.max(0, faction.food - 1);
        faction.wealth += 1;
      }
    }
  }

  considerWars() {
    const living = this.factions.filter((f) => !f.fallen && f.memberCount > 0);
    for (let i = 0; i < living.length; i++) {
      for (let j = i + 1; j < living.length; j++) {
        const a = living[i];
        const b = living[j];
        const dist = Math.hypot(a.x - b.x, a.z - b.z);
        const hostile = a.ideology.warlike + b.ideology.warlike;
        const atWar = a.enemies.includes(b.id);
        const bothReady =
          a.goal === "war" &&
          b.memberCount >= 4 &&
          a.memberCount >= 7 &&
          a.wealth >= 28 &&
          (a.losses || 0) < 2 &&
          (b.losses || 0) < 3;
        const borderFriction = dist < 14 && hostile > 1.15 && a.memberCount >= 6 && b.memberCount >= 6 && a.wealth >= 22;
        if (!atWar && (bothReady || borderFriction) && Math.random() < 0.28) {
          a.enemies.push(b.id);
          b.enemies.push(a.id);
          a.goal = "war";
          this.bus.emit("log", `战争：「${a.name}」与「${b.name}」开战，但各族仍先保人口`);
        } else if (
          atWar &&
          (a.goal !== "war" ||
            b.goal === "grow" ||
            hostile < 0.85 ||
            a.memberCount < 4 ||
            b.memberCount < 4 ||
            (a.losses || 0) >= 2 ||
            (b.losses || 0) >= 2 ||
            a.power < b.power * 0.45 ||
            b.power < a.power * 0.45) &&
          Math.random() < 0.55
        ) {
          this.makePeace(a, b, "算清得失后停战，改去扩人扩土");
          a.losses = 0;
          b.losses = 0;
        }
      }
    }
  }

  makePeace(a, b, why) {
    a.enemies = a.enemies.filter((id) => id !== b.id);
    b.enemies = b.enemies.filter((id) => id !== a.id);
    this.bus.emit("log", `「${a.name}」与「${b.name}」${why}`);
  }

  peaceAll() {
    for (const faction of this.factions) faction.enemies = [];
    this.bus.emit("log", "你叫停了所有战争");
  }

  endow(agent, amount = 18) {
    const faction = this.faction(agent.factionId);
    if (!faction) return false;
    faction.wealth += amount;
    faction.food += 6;
    agent.note(`接受赏赐，${faction.name}的资本变为 ${faction.wealth}`);
    this.bus.emit("log", `你给「${faction.name}」增加了资本`);
    return true;
  }

  cycleIdeology(agent) {
    const faction = this.faction(agent.factionId);
    if (!faction) return null;
    const idx = IDEOLOGIES.findIndex((i) => i.id === faction.ideology.id);
    faction.ideology = cloneIdeology(IDEOLOGIES[(idx + 1) % IDEOLOGIES.length]);
    agent.note(`思想被改写成${faction.ideology.name}：${faction.ideology.text}`);
    this.bus.emit("log", `「${faction.name}」改信${faction.ideology.name}`);
    return faction.ideology;
  }

  ballot(voter, members, leader) {
    if (voter.will > 0.72 && Math.random() < voter.will) return voter;
    if (voter.will < 0.4 && leader) return leader;
    const ranked = [...members].sort((a, b) => b.genes.social + b.loyalty - (a.genes.social + a.loyalty));
    if (voter.will > 0.55 && Math.random() < 0.45) return voter;
    return ranked[0] || voter;
  }

  settleLeader(faction, members, winner, why) {
    const previous = members.find((a) => a.id === faction.leaderId);
    if (winner.id === faction.leaderId) return 0;
    faction.leaderId = winner.id;
    faction.leaderName = winner.name;
    faction.electionAcc = 0;
    let dissent = 0;
    winner.obeying = true;
    winner.loyalty = Math.min(1, (winner.loyalty || 0.5) + 0.08);
    winner.note(why);
    winner.say(winner.tongue === "en" ? "I'll lead this tribe." : "我来领这一部。");
    for (const member of members) {
      if (member.id === winner.id) continue;
      const obey = Math.random() > member.will * 0.72;
      member.obeying = obey;
      member.loyalty = Math.max(0.05, Math.min(1, (member.loyalty || 0.5) + (obey ? 0.06 : -0.2)));
      if (!obey) {
        dissent += 1;
        member.note(`不服从首领 ${winner.name}`);
        if (Math.random() < 0.65) member.say(member.tongue === "en" ? "I won't obey." : "我不服从。");
      }
    }
    const oldName = previous?.name || "空位";
    this.bus.emit("log", `「${faction.name}」的首领换成 ${winner.name}（原先是 ${oldName}）。${dissent} 人不服从`);
    return dissent;
  }

  holdElections(agents) {
    for (const faction of this.factions) {
      if (faction.fallen) continue;
      const members = agents.filter((a) => a.alive && a.factionId === faction.id);
      if (members.length < 2) continue;
      const leader = members.find((a) => a.id === faction.leaderId);
      faction.electionAcc = (faction.electionAcc || 0) + 1;
      if (leader && faction.electionAcc < 16) continue;
      faction.electionAcc = 0;
      const tally = new Map();
      for (const voter of members) {
        const choice = this.ballot(voter, members, leader);
        tally.set(choice.id, (tally.get(choice.id) || 0) + 1);
      }
      let winner = leader || members[0];
      let best = -1;
      for (const member of members) {
        const votes = tally.get(member.id) || 0;
        if (votes > best) {
          best = votes;
          winner = member;
        }
      }
      if (leader && best <= (tally.get(leader.id) || 0)) winner = leader;
      this.settleLeader(faction, members, winner, "被族人投票选为首领");
    }
  }

  appointLeader(agent, agents) {
    const faction = this.faction(agent.factionId);
    if (!faction || faction.fallen || !agent.alive) return null;
    const members = agents.filter((a) => a.alive && a.factionId === faction.id);
    if (!members.includes(agent)) return null;
    if (faction.leaderId === agent.id) return { same: true, dissent: 0, others: Math.max(0, members.length - 1) };
    const dissent = this.settleLeader(faction, members, agent, "被你指定为首领");
    return { dissent, others: Math.max(0, members.length - 1) };
  }

  tick(agents, dt, world, dead = []) {
    this.acc += dt;
    if (this.acc < 3) return;
    this.acc = 0;
    this.refresh(agents, world);
    this.holdElections(agents);
    this.chooseGoals();
    this.considerWars();
    this.migrateGraves(dead, world);
  }

  migrateGraves(dead, world) {
    for (const faction of this.factions) {
      if (faction.fallen || Math.random() > 0.4) continue;
      const grave = dead.find(
        (agent) => !agent.alive && agent.factionId === faction.id && Math.hypot(agent.pos.x - faction.x, agent.pos.z - faction.z) > 7
      );
      if (!grave) continue;
      const spot = world.burialNear(faction.x, faction.z, faction.culture.livelihood);
      grave.moveGrave(spot, `族人按${faction.culture.title}的葬俗，把坟墓迁走了`);
    }
  }

  summary() {
    if (!this.factions.length) return ["还没有势力。人会按海边、林猎或耕种各自成部。"];
    return this.factions.map((f) => {
      const war = f.enemies.length ? " · 交战中" : "";
      const title = f.culture.title || "文明";
      const goals = { grow: "扩人", expand: "扩土", trade: "市易", war: "征伐" };
      const aim = goals[f.goal] || "求存";
      const tongue = f.language === "en" ? "英文" : "中文";
      return `${f.fallen ? "覆灭" : f.stage} · ${f.name}${war}｜首领:${f.leaderName || "无"}｜${tongue}｜目标:${aim}｜疆域 ${Math.round(f.claimRadius || 6)}｜${title}｜${f.ideology.name}｜人 ${f.memberCount || 0}｜资本 ${f.wealth}`;
    });
  }
}
