import * as THREE from "three";
import { World } from "./world.js";
import { AgentSystem } from "./agents.js";
import { Player } from "./player.js";
import { Bus } from "./bus.js";
import { GENE_KEYS, averageGenes } from "./genes.js";
import { activityLabel, stateLabel } from "./dialogue.js";
import { bindTouch, isTouchDevice } from "./touch.js";

const canvas = document.getElementById("game");
const bus = new Bus();

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87b7ff);
scene.fog = new THREE.Fog(0x87b7ff, 28, 70);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 120);
const hemi = new THREE.HemisphereLight(0xb1d0ff, 0x3d5a3a, 0.55);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff2d1, 1.1);
sun.position.set(30, 50, 10);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -40;
sun.shadow.camera.right = 40;
sun.shadow.camera.top = 40;
sun.shadow.camera.bottom = -40;
scene.add(sun);

const ring = new THREE.Mesh(
  new THREE.RingGeometry(0.42, 0.62, 28),
  new THREE.MeshBasicMaterial({ color: 0xffe08a, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
);
ring.rotation.x = -Math.PI / 2;
ring.visible = false;
scene.add(ring);

const world = new World(scene);
const agents = new AgentSystem(world, bus);
const player = new Player(camera, world, canvas);
const pickPrompt = document.getElementById("pick-prompt");

function openFateSheet() {
  pickPrompt.hidden = true;
  document.body.classList.add("sheet-open");
  requestAnimationFrame(() => {
    document.getElementById("fate-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function offerPickPanel(agent) {
  if (!document.body.classList.contains("touch-device")) return;
  if (document.body.classList.contains("sheet-open")) return;
  document.getElementById("pick-prompt-name").textContent = agent.alive ? agent.name : `${agent.name} 的坟墓`;
  pickPrompt.hidden = false;
}

if (isTouchDevice()) {
  bindTouch(player, {
    onPick() {
      const agent = pickLookingAt();
      if (agent) selectAgent(agent, { askPanel: true });
      else toast("准星附近没有人");
    },
    onTap(x, y) {
      const agent = pickAtScreen(x, y);
      if (agent) selectAgent(agent, { askPanel: true });
    },
  });
}

document.getElementById("pick-open").addEventListener("click", () => {
  if (selected()) openFateSheet();
  else pickPrompt.hidden = true;
});
document.getElementById("pick-skip").addEventListener("click", () => {
  pickPrompt.hidden = true;
});

const lifeGeo = new THREE.BufferGeometry();
lifeGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(180 * 3), 3));
lifeGeo.setDrawRange(0, 0);
const lifeLine = new THREE.Line(
  lifeGeo,
  new THREE.LineBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.95 })
);
lifeLine.frustumCulled = false;
lifeLine.visible = false;
scene.add(lifeLine);

let paused = false;
let worldTime = 420 / 1440;
let dayCount = 1;
let scrubbing = false;
let rosterMode = "alive";
let rosterSig = "";
let selectedId = null;
let showPath = false;
let lifeSig = "";
let civSig = "";
const logs = [];
const talks = [];

const timeOfDay = document.getElementById("time-of-day");
const clockRate = document.getElementById("clock-rate");
const simRate = document.getElementById("sim-rate");

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 1800);
}

function pushList(list, store, text, limit = 14) {
  store.unshift(text);
  if (store.length > 40) store.pop();
  list.innerHTML = store
    .slice(0, limit)
    .map((t) => `<li>${t}</li>`)
    .join("");
}

function pushLog(text) {
  pushList(document.getElementById("log"), logs, text, 8);
}

bus.on("log", (msg) => pushLog(msg));
bus.on("birth", ({ child, parents }) => {
  pushLog(`<strong>${child.name}</strong> 出生 · 第 ${child.generation} 代 · ${parents[0].name}+${parents[1].name}`);
});
bus.on("death", ({ agent, reason }) => {
  pushLog(`<strong>${agent.name}</strong> ${reason}`);
  if (selectedId === agent.id) renderFate();
});
bus.on("talk", ({ a, b, line, reply }) => {
  pushList(
    document.getElementById("talks"),
    talks,
    `<strong>${a.name}</strong>：${line}<br><strong>${b.name}</strong>：${reply}`,
    8
  );
});

const geneBars = document.getElementById("gene-bars");
geneBars.innerHTML = GENE_KEYS.map(
  (g) => `
  <div class="gene-row" data-key="${g.key}">
    <span>${g.label}</span>
    <div class="bar"><div class="fill" style="background:${g.color}"></div></div>
    <b>0%</b>
  </div>`
).join("");

const fateGenes = document.getElementById("fate-genes");
fateGenes.innerHTML = GENE_KEYS.map(
  (g) => `
  <div class="gene-row">
    <span>${g.label}</span>
    <input data-gene="${g.key}" type="range" min="5" max="98" value="50" />
    <b data-gene-num="${g.key}">50</b>
  </div>`
).join("");

function clockSpeed() {
  const s = Number(clockRate.value) / 100;
  return s * s * 0.02;
}

function peopleSpeed() {
  return Number(simRate.value) / 50;
}

function formatClock(t) {
  const minutes = Math.floor(t * 1440) % 1440;
  const hh = String(Math.floor(minutes / 60)).padStart(2, "0");
  const mm = String(minutes % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

function describeClock(rate) {
  if (rate < 0.00002) return "停止";
  const mins = Math.max(1, Math.round(1 / rate / 60));
  const word = mins >= 30 ? "极慢" : mins >= 12 ? "慢" : mins >= 4 ? "正常" : "快";
  return `${word} · 一天约 ${mins} 分钟`;
}

function describeSim(scale) {
  if (scale < 0.05) return "停止";
  if (scale < 0.6) return "慢";
  if (scale < 1.15) return "正常";
  return "快";
}

function selected() {
  return selectedId == null ? null : agents.find(selectedId);
}

function selectAgent(agent, opts = {}) {
  selectedId = agent ? agent.id : null;
  showPath = false;
  lifeSig = "";
  lifeLine.visible = false;
  renderFate();
  renderRoster();
  if (!agent) {
    pickPrompt.hidden = true;
    return;
  }
  if (opts.askPanel) {
    toast(agent.alive ? `选中 ${agent.name}` : `选中 ${agent.name} 的坟墓`);
    offerPickPanel(agent);
  } else if (opts.openPanel) {
    openFateSheet();
  } else {
    toast(agent.alive ? `选中 ${agent.name}。可以直接对他说一句` : `这是 ${agent.name} 的坟墓`);
  }
}

function renderRoster() {
  const list = rosterMode === "alive" ? agents.agents : agents.dead;
  const sig = `${rosterMode}:${selectedId}:` + list.map((a) => `${a.id}:${a.name}:${a.alive}:${a.state}:${a.deathReason}:${a.factionId}:${a.sick}:${a.obeying}:${a.bridge}:${a.faction()?.leaderId === a.id ? 1 : 0}`).join("|");
  if (sig === rosterSig) return;
  rosterSig = sig;
  const ul = document.getElementById("roster");
  ul.innerHTML = list.length
    ? list
        .map((a) => {
          const status = a.alive ? activityLabel(a) : a.deathReason || "坟墓";
          const faction = a.faction();
          const extra = `${a.protected ? " · 护佑" : ""}${a.sick ? " · 患病" : ""}${faction?.leaderId === a.id ? " · 首领" : ""}${a.bridge ? " · 通译" : ""}${a.alive && faction && faction.leaderId !== a.id ? (a.obeying ? " · 服从" : " · 不服从") : ""}`;
          return `<li><button type="button" class="person ${a.alive ? "alive" : "dead"} ${a.id === selectedId ? "selected" : ""}" data-id="${a.id}">
            <b>${esc(a.name)}</b> · ${a.alive ? "活着" : "坟墓"}${extra}
            <small>第 ${a.generation} 代 · ${esc(status)} · ${esc(faction ? faction.name : a.culture?.title || "无部")} · ${a.tongue === "en" ? "EN" : "中文"}</small>
          </button></li>`;
        })
        .join("")
    : `<li class="meta">${rosterMode === "alive" ? "还没有活人" : "还没有人死去"}</li>`;
}

function renderFate() {
  const agent = selected();
  const empty = document.getElementById("fate-empty");
  const body = document.getElementById("fate-body");
  if (!agent) {
    empty.hidden = false;
    body.hidden = true;
    ring.visible = false;
    return;
  }
  empty.hidden = true;
  body.hidden = false;
  document.getElementById("fate-name").textContent = agent.name;
  const pill = document.getElementById("fate-status");
  pill.textContent = agent.alive ? (agent.protected ? "活着 · 护佑" : "活着") : "坟墓";
  pill.className = agent.alive ? "pill" : "pill dead";
  const faction = agent.faction();
  const parents = agent.parents ? agent.parents.join(" + ") : "无";
  const lifeName = agent.culture?.title || "未明文明";
  const tongue = agent.tongue === "en" ? "英文" : "中文";
  const bridge = agent.bridge ? "通译，能和其他部落交流" : "只会本部语言";
  const role = faction?.leaderId === agent.id ? "首领" : agent.obeying ? "族人 · 服从" : "族人 · 不服从";
  document.getElementById("fate-meta").textContent = agent.alive
    ? `第 ${agent.generation} 代 · ${stateLabel(agent.state)} · ${lifeName} · ${tongue} · ${bridge} · 意志 ${Math.round((agent.will || 0) * 100)}% · 忠诚 ${Math.round((agent.loyalty || 0) * 100)}% · ${faction ? `${faction.name} / ${role} / ${faction.ideology.name}` : "尚未入部"} · 习俗：${agent.culture.rite}`
    : `坟墓 · ${agent.name} · ${agent.deathReason || "死亡"} · ${lifeName} · ${tongue} · 葬俗：${agent.culture.rite} · 父母 ${parents}`;
  const words = [
    ["peace", "厌战"],
    ["sea", "向海"],
    ["hunt", "向猎"],
    ["field", "向田"],
    ["brave", "更勇"],
    ["build", "更想安家"],
    ["trade", "更想交换"],
  ]
    .filter(([key]) => (agent.influence?.[key] || 0) > 0.08)
    .map(([key, label]) => `${label} ${Math.round(agent.influence[key] * 100)}%`);
  document.getElementById("influence-note").textContent = agent.playerWords
    ? `你对他说过 ${agent.playerWords} 次。影响：${words.join("、") || "还很浅"}`
    : "还没有对他说过话。";
  const rename = document.getElementById("rename-input");
  const custom = document.getElementById("custom-input");
  if (document.activeElement !== rename) rename.value = agent.name;
  if (document.activeElement !== custom) custom.value = agent.culture?.rite || "";
  const hunger = Math.round(agent.hunger * 100);
  const health = Math.round(agent.health * 100);
  document.getElementById("hunger-fill").style.width = `${hunger}%`;
  document.getElementById("health-fill").style.width = `${health}%`;
  document.getElementById("hunger-num").textContent = `${hunger}%`;
  document.getElementById("health-num").textContent = `${health}%`;
  const nextSig = `${agent.id}:${agent.life.length}:${agent.life.at(-1)?.text}:${agent.deathReason}`;
  if (nextSig !== lifeSig) {
    lifeSig = nextSig;
    document.getElementById("life-log").innerHTML = agent.life
      .map((ev) => `<li data-x="${ev.x}" data-z="${ev.z}">第 ${ev.age} 刻 · ${esc(ev.text)}</li>`)
      .join("");
  }
  const pathBtn = document.querySelector('[data-fate="path"]');
  if (pathBtn) pathBtn.textContent = showPath ? "隐藏路线" : "显示路线";
  for (const g of GENE_KEYS) {
    const input = fateGenes.querySelector(`[data-gene="${g.key}"]`);
    const num = fateGenes.querySelector(`[data-gene-num="${g.key}"]`);
    const pct = Math.round(agent.genes[g.key] * 100);
    if (document.activeElement !== input) input.value = String(pct);
    num.textContent = input.value;
  }
  const protectBtn = document.querySelector('[data-fate="protect"]');
  protectBtn.textContent = agent.protected ? "解除护佑" : "护佑";
}

function refreshHud() {
  const clock = formatClock(worldTime);
  document.getElementById("day").textContent = String(dayCount);
  document.getElementById("clock").textContent = clock;
  document.getElementById("clock-live").textContent = clock;
  document.getElementById("pop").textContent = String(agents.agents.length);
  document.getElementById("gen").textContent = String(agents.maxGen);
  document.getElementById("births").textContent = String(agents.births);
  document.getElementById("deaths").textContent = String(agents.dead.length);
  if (!scrubbing) timeOfDay.value = String(Math.floor(worldTime * 1440) % 1440);
  document.getElementById("clock-rate-label").textContent = describeClock(clockSpeed());
  document.getElementById("sim-rate-label").textContent = describeSim(peopleSpeed());

  const civText = agents.civ.summary().join("\n");
  if (civText !== civSig) {
    civSig = civText;
    document.getElementById("civs").innerHTML = civText
      .split("\n")
      .map((line) => `<li>${esc(line)}</li>`)
      .join("");
  }

  const avg = averageGenes(agents.agents);
  for (const g of GENE_KEYS) {
    const row = geneBars.querySelector(`[data-key="${g.key}"]`);
    const pct = Math.round((avg[g.key] || 0) * 100);
    row.querySelector(".fill").style.width = `${pct}%`;
    row.querySelector("b").textContent = `${pct}%`;
  }
}

function setSky() {
  const dayness = Math.max(0, Math.sin(worldTime * Math.PI * 2 - Math.PI / 2) * 0.5 + 0.5);
  const c = new THREE.Color(0x0b1430).lerp(new THREE.Color(0x87b7ff), dayness);
  scene.background.copy(c);
  scene.fog.color.copy(c);
  sun.intensity = 0.15 + dayness * 1.05;
  hemi.intensity = 0.15 + dayness * 0.5;
  const angle = worldTime * Math.PI * 2;
  sun.position.set(Math.cos(angle) * 40, Math.sin(angle) * 50, 12);
}

function project(pos, yLift) {
  const v = pos.clone();
  v.y += yLift;
  v.project(camera);
  if (v.z > 1) return null;
  return {
    x: (v.x * 0.5 + 0.5) * window.innerWidth,
    y: (-v.y * 0.5 + 0.5) * window.innerHeight,
  };
}

let hideLabels = localStorage.getItem("hideLabels") === "1";

function applyLabelToggle() {
  const btn = document.getElementById("label-toggle");
  btn.textContent = hideLabels ? "显示头顶" : "隐藏头顶";
  btn.classList.toggle("on", hideLabels);
  if (hideLabels) document.getElementById("world-labels").innerHTML = "";
}

document.getElementById("label-toggle").addEventListener("click", () => {
  hideLabels = !hideLabels;
  localStorage.setItem("hideLabels", hideLabels ? "1" : "0");
  applyLabelToggle();
  toast(hideLabels ? "已屏蔽头顶的名字和对话" : "头顶信息已显示");
});
applyLabelToggle();

const labelNodes = new Map();

function ensureLabel(key, className) {
  let el = labelNodes.get(key);
  if (!el) {
    el = document.createElement("div");
    el.className = className;
    document.getElementById("world-labels").appendChild(el);
    labelNodes.set(key, el);
  } else if (el.className !== className) {
    el.className = className;
  }
  el.dataset.keep = "1";
  return el;
}

function updateLabels() {
  const root = document.getElementById("world-labels");
  if (hideLabels) {
    for (const el of labelNodes.values()) el.remove();
    labelNodes.clear();
    return;
  }
  const now = performance.now();
  for (const el of labelNodes.values()) el.dataset.keep = "0";
  const all = [...agents.agents, ...agents.dead];
  for (const agent of all) {
    const namePos = project(agent.pos, agent.alive ? 1.7 : 1.1);
    if (namePos) {
      const cls = ["name-tag", agent.alive ? "alive" : "dead", agent.id === selectedId ? "selected" : ""]
        .filter(Boolean)
        .join(" ");
      const faction = agent.faction();
      const marks = `${faction?.leaderId === agent.id ? " · 首领" : ""}${agent.bridge ? " · 通译" : ""}`;
      const caption = agent.alive
        ? `${agent.name}${marks} · ${agent.culture?.title || "人"} · ${activityLabel(agent)}`
        : `墓 · ${agent.name}`;
      const el = ensureLabel(`n${agent.id}`, cls);
      if (el.textContent !== caption) el.textContent = caption;
      el.style.left = `${Math.round(namePos.x)}px`;
      el.style.top = `${Math.round(namePos.y)}px`;
    }
    if (agent.speech && agent.speech.until > now) {
      const bubblePos = project(agent.pos, agent.alive ? 2.15 : 1.5);
      if (bubblePos) {
        const el = ensureLabel(`b${agent.id}`, "bubble");
        if (el.textContent !== agent.speech.text) el.textContent = agent.speech.text;
        el.style.left = `${Math.round(bubblePos.x)}px`;
        el.style.top = `${Math.round(bubblePos.y - 16)}px`;
      }
    }
  }
  for (const [key, el] of [...labelNodes.entries()]) {
    if (el.dataset.keep === "1") continue;
    el.remove();
    labelNodes.delete(key);
  }
  if (!root.childElementCount && labelNodes.size) labelNodes.clear();
}

function pickLookingAt() {
  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  let best = null;
  let bestDot = 0.92;
  for (const agent of [...agents.agents, ...agents.dead]) {
    const to = agent.pos.clone().sub(camera.position);
    const dist = to.length();
    if (dist > 18) continue;
    const d = to.normalize().dot(dir);
    if (d > bestDot) {
      bestDot = d;
      best = agent;
    }
  }
  return best;
}

function pickAtScreen(clientX, clientY) {
  const ndc = new THREE.Vector2((clientX / window.innerWidth) * 2 - 1, -(clientY / window.innerHeight) * 2 + 1);
  const ray = new THREE.Raycaster();
  ray.setFromCamera(ndc, camera);
  let best = null;
  let bestDist = 1.6;
  for (const agent of [...agents.agents, ...agents.dead]) {
    const center = agent.pos.clone().add(new THREE.Vector3(0, agent.alive ? 0.95 : 0.35, 0));
    const to = center.clone().sub(ray.ray.origin);
    const t = to.dot(ray.ray.direction);
    if (t < 0.4 || t > 18) continue;
    const closest = ray.ray.origin.clone().addScaledVector(ray.ray.direction, t);
    const d = closest.distanceTo(center);
    if (d < bestDist) {
      bestDist = d;
      best = agent;
    }
  }
  return best;
}

function intervene(action) {
  const agent = selected();
  if (!agent) {
    toast("先选中一个人");
    return;
  }
  if (action === "rename") agent.rename(document.getElementById("rename-input").value);
  if (action === "custom") {
    agent.setCustom(document.getElementById("custom-input").value);
    const faction = agent.faction();
    if (faction) {
      let refused = 0;
      for (const other of agents.agents) {
        if (other.factionId !== faction.id || other === agent) continue;
        if (other.obeying === false || (other.will > 0.68 && Math.random() < other.will)) {
          refused += 1;
          other.note(`没有服从新习俗「${agent.culture.rite}」`);
        } else other.culture = agent.culture;
      }
      if (refused) toast(`${refused} 人没有服从这条习俗`);
    }
  }
  if (action === "feed" && agent.alive) agent.feed();
  if (action === "heal" && agent.alive) agent.heal();
  if (action === "rest" && agent.alive) agent.rest();
  if (action === "wood" && agent.alive) agent.giveWood();
  if (action === "endow") {
    if (!agents.civ.endow(agent)) toast("这个人还没有势力，先让他建部");
  }
  if (action === "doctrine") {
    if (!agents.civ.cycleIdeology(agent)) toast("他还没有加入势力");
  }
  if (action === "leader") {
    const result = agents.civ.appointLeader(agent, agents.agents);
    if (!result) toast("他还没有部落，不能当首领");
    else if (result.same) toast(`${agent.name} 已经是首领`);
    else if (result.dissent) toast(`${agent.name} 成了首领，但有 ${result.dissent} 人不服从`);
    else toast(`${agent.name} 成了首领，族人这回都听从`);
  }
  if (action === "peace") agents.civ.peaceAll();
  if (action === "path") {
    showPath = !showPath;
    toast(showPath ? `只画出 ${agent.name} 从出生到现在的路线` : "路线已隐藏");
  }
  if (action === "protect" && agent.alive) agent.setProtected(!agent.protected);
  if (action === "talk") {
    const text = document.getElementById("player-line").value.trim();
    if (!text) toast("先写一句话");
    else if (agent.alive) {
      const reply = agent.hear(text, bus);
      document.getElementById("npc-reply").textContent = `${agent.name}：${reply}`;
      pushLog(`<strong>你</strong>对${esc(agent.name)}说：${esc(text)}`);
    } else {
      agent.note(`你在墓前说：「${text}」`);
      const kin = agents.agents.filter((person) => person.factionId && person.factionId === agent.factionId);
      const reply = kin.length
        ? kin
            .slice(0, 3)
            .map((person) => `${person.name}：${person.hear(text, bus, 0.6)}`)
            .join(" ")
        : "这座坟墓不会回答，也没有活着的族人听见。";
      document.getElementById("npc-reply").textContent = reply;
      pushLog(`<strong>你</strong>在${esc(agent.name)}墓前说：${esc(text)}`);
    }
  }
  if (action === "move-grave" || (action === "bring" && !agent.alive)) {
    if (agent.alive) toast("他还活着，没有坟墓");
    else {
      const pos = player.pos.clone();
      pos.y = world.surfaceY(Math.floor(pos.x), Math.floor(pos.z)) + 1.02;
      agent.moveGrave(pos, "你把坟墓迁到了身边");
      toast(`${agent.name} 的坟墓已迁到你身边`);
    }
  }
  if (action === "bring" && agent.alive) {
    const pos = player.pos.clone();
    pos.y = world.surfaceY(Math.floor(pos.x), Math.floor(pos.z)) + 1;
    agent.teleport(pos);
  }
  if (action === "goto") {
    player.pos.set(agent.pos.x + 2.2, agent.pos.y + 1.4, agent.pos.z + 2.2);
    showPath = true;
    toast(`来到 ${agent.name} 身边，黄线只属于他`);
  }
  if (action === "kill" && agent.alive) {
    agent.die("被你终结", bus);
    toast(`${agent.name} 已被终结`);
  }
  if (action === "revive") {
    if (agent.alive) toast(`${agent.name} 还活着，不用复活`);
    else if (agents.revive(agent)) {
      rosterMode = "alive";
      document.getElementById("tab-alive").classList.add("active");
      document.getElementById("tab-dead").classList.remove("active");
      toast(`${agent.name} 已复活，短暂护佑中`);
    } else toast("复活失败，再点一次");
  }
  renderFate();
  renderRoster();
}

document.getElementById("start-btn").addEventListener("click", () => {
  if (!document.body.classList.contains("touch-device")) canvas.requestPointerLock();
  document.body.classList.remove("sheet-open");
  toast(document.body.classList.contains("touch-device") ? "左下摇杆走路，点菜单可以调时间和命运" : "按 Esc 可以回来调时间和命运");
});

document.getElementById("pause-btn").addEventListener("click", () => {
  paused = !paused;
  document.getElementById("pause-btn").textContent = paused ? "继续" : "暂停一切";
  toast(paused ? "时间和人物都暂停了" : "继续运行");
});

document.getElementById("tab-alive").addEventListener("click", () => {
  rosterMode = "alive";
  document.getElementById("tab-alive").classList.add("active");
  document.getElementById("tab-dead").classList.remove("active");
  renderRoster();
});
document.getElementById("tab-dead").addEventListener("click", () => {
  rosterMode = "dead";
  document.getElementById("tab-dead").classList.add("active");
  document.getElementById("tab-alive").classList.remove("active");
  renderRoster();
});

document.getElementById("life-log").addEventListener("click", (e) => {
  const li = e.target.closest("[data-x]");
  if (!li) return;
  document.exitPointerLock();
  const x = Number(li.dataset.x);
  const z = Number(li.dataset.z);
  const y = world.surfaceY(Math.floor(x), Math.floor(z)) + 2;
  player.pos.set(x + 1.6, y, z + 1.6);
  showPath = true;
  toast("来到这段人生发生的地点");
});

document.getElementById("roster").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-id]");
  if (!btn) return;
  selectAgent(agents.find(Number(btn.dataset.id)));
});

let fateActionLock = 0;
function handleFateAction(e) {
  const btn = e.target.closest("[data-fate]");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const now = performance.now();
  if (now - fateActionLock < 350) return;
  fateActionLock = now;
  try {
    document.exitPointerLock?.();
  } catch {
    /* ignore */
  }
  intervene(btn.dataset.fate);
}
const fatePanel = document.getElementById("fate-panel");
fatePanel.addEventListener("click", handleFateAction);
fatePanel.addEventListener("pointerup", handleFateAction);

fateGenes.addEventListener("input", (e) => {
  const key = e.target.dataset.gene;
  if (!key) return;
  const agent = selected();
  if (!agent) return;
  agent.setGene(key, Number(e.target.value) / 100);
  e.target.parentElement.querySelector("b").textContent = e.target.value;
});

timeOfDay.addEventListener("pointerdown", () => {
  scrubbing = true;
  document.exitPointerLock();
});
window.addEventListener("pointerup", () => {
  scrubbing = false;
});
timeOfDay.addEventListener("input", () => {
  worldTime = Number(timeOfDay.value) / 1440;
  setSky();
});
for (const btn of document.querySelectorAll("[data-min]")) {
  btn.addEventListener("click", () => {
    document.exitPointerLock();
    worldTime = Number(btn.dataset.min) / 1440;
    timeOfDay.value = btn.dataset.min;
    setSky();
  });
}
for (const el of [clockRate, simRate]) {
  el.addEventListener("pointerdown", () => document.exitPointerLock());
  el.addEventListener("input", refreshHud);
}

window.addEventListener("keydown", (e) => {
  if (e.target.matches("input, textarea")) return;
  if (e.code === "KeyP") {
    paused = !paused;
    document.getElementById("pause-btn").textContent = paused ? "继续" : "暂停一切";
    toast(paused ? "已暂停" : "继续");
  }
  if (e.code === "KeyR") {
    const agent = agents.spawnOne(player.pos);
    selectAgent(agent);
  }
  if (e.code === "KeyT") {
    const n = world.spawnFoodNear(player.pos, 5);
    toast(n ? `附近长出了 ${n} 丛浆果` : "这里不太适合长浆果");
  }
  if (e.code === "KeyF") {
    const agent = pickLookingAt();
    if (agent) selectAgent(agent);
    else toast("准星附近没有活人");
  }
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

agents.seed(12);
pushLog("海边的人捕鱼，林中的人狩猎，草地的人耕种。死人会变成写着名字的坟墓。");
pushLog("选中一个人，在「对他说」里写一句话。同样的话重复几次，他们的做法会改。");
refreshHud();
renderRoster();
setSky();

let last = performance.now();
let hudAcc = 0;
let foodAcc = 0;

function frame(now) {
  const raw = Math.min(0.05, (now - last) / 1000);
  last = now;
  const dt = paused ? 0 : raw * peopleSpeed();

  if (!paused) {
    const rate = clockSpeed();
    worldTime += raw * rate;
    if (worldTime >= 1) {
      worldTime -= 1;
      dayCount += 1;
      pushLog(`—— 第 ${dayCount} 天 ——`);
    }
    setSky();
    agents.update(dt, worldTime);
    world.flushRebuild(raw);
    foodAcc += dt;
    if (foodAcc > 12) {
      foodAcc = 0;
      const pressure = Math.max(0.2, 1 - agents.agents.length / 40);
      if (Math.random() < 0.7 * pressure) world.spawnFoodNear(world.randomSpawn(), 1 + Math.floor(Math.random() * 2));
    }
  }
  player.update(raw);
  world.flushRebuild(raw);

  const agent = selected();
  if (agent) {
    ring.visible = true;
    ring.position.set(agent.pos.x, agent.pos.y + 0.05, agent.pos.z);
    const points = agent.path;
    if (showPath && points.length > 1) {
      const attr = lifeGeo.getAttribute("position");
      const count = Math.min(points.length, 180);
      const start = points.length - count;
      for (let i = 0; i < count; i++) {
        const p = points[start + i];
        attr.setXYZ(i, p.x, p.y + 0.15, p.z);
      }
      attr.needsUpdate = true;
      lifeGeo.setDrawRange(0, count);
      lifeLine.visible = true;
    } else lifeLine.visible = false;
  } else {
    ring.visible = false;
    lifeLine.visible = false;
  }

  hudAcc += raw;
  if (hudAcc > 0.35) {
    hudAcc = 0;
    refreshHud();
    renderRoster();
    if (agent) renderFate();
  }
  updateLabels();
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

const cardScales = [1, 0.85, 0.72, 0.6];
let cardScaleIndex = Math.min(cardScales.length - 1, Number(localStorage.getItem("cardScaleIndex")) || 0);
let cardsHidden = localStorage.getItem("cardsHidden") === "1";

function applyCardChrome() {
  document.documentElement.style.setProperty("--card-scale", String(cardScales[cardScaleIndex]));
  document.body.classList.toggle("cards-hidden", cardsHidden);
  document.getElementById("card-toggle").textContent = cardsHidden ? "展开卡片" : "收起卡片";
}

document.getElementById("card-smaller").addEventListener("click", () => {
  cardScaleIndex = Math.min(cardScales.length - 1, cardScaleIndex + 1);
  localStorage.setItem("cardScaleIndex", String(cardScaleIndex));
  applyCardChrome();
});
document.getElementById("card-larger").addEventListener("click", () => {
  cardScaleIndex = Math.max(0, cardScaleIndex - 1);
  localStorage.setItem("cardScaleIndex", String(cardScaleIndex));
  applyCardChrome();
});
document.getElementById("card-toggle").addEventListener("click", () => {
  cardsHidden = !cardsHidden;
  localStorage.setItem("cardsHidden", cardsHidden ? "1" : "0");
  applyCardChrome();
});
applyCardChrome();

requestAnimationFrame(frame);

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {});
}
