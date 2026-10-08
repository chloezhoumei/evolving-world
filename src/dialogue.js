function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const PACK = {
  zh: {
    hungry: {
      lines: ["我快饿扁了。", "你看到吃的了吗？", "再找不到吃的就危险了。"],
      replies: ["我也在找。", "先别急，一起找。", "我刚看到一点。"],
    },
    home: {
      lines: ["今晚得有个屋顶。", "木头还差几块。", "房子盖好了就能熬过夜里。"],
      replies: ["我去弄木头。", "夜里外面冷。", "盖好了叫我。"],
    },
    war: {
      lines: ["这片地不能一直打。", "人不够，先别拼命。", "你到底听谁的？"],
      replies: ["我有自己的主意。", "先保住族人。", "我不想白死。"],
    },
    social: {
      lines: ["要不要把家安在同一边？", "孩子会继承我们的话。", "你认现在的首领吗？"],
      replies: ["看他值不值得听。", "我可以自己选。", "先看吃的够不够。"],
    },
    idle: {
      lines: ["今天的风很轻。", "你还好吗？", "我想自己决定下一步。"],
      replies: ["还活着。", "一起走走？", "我也在想。"],
    },
    leader: ["我来领这一部。", "票在我这里，我先带着大家活下去。"],
    refuse: ["我不服从。", "这首领不是我选的。", "我有自己的意志。"],
    obey: ["这回我听首领的。", "我认他。"],
    confused: ["听不懂。", "你说的什么？"],
    cross: ["我们语言不同，可我听懂了。这回两边都有好处。"],
    birth: ["孩子出生了。"],
  },
  en: {
    hungry: {
      lines: ["I'm hungry.", "Have you seen any food?", "We need to eat before dark."],
      replies: ["I'm looking too.", "Stay close, we'll find some.", "I saw some over there."],
    },
    home: {
      lines: ["We need a roof tonight.", "Still short on wood.", "A house will get us through the night."],
      replies: ["I'll get wood.", "It's cold outside.", "Call me when it's done."],
    },
    war: {
      lines: ["We can't fight forever.", "Too few of us. Don't throw lives away.", "Whose orders are you following?"],
      replies: ["I have my own mind.", "Keep the people alive.", "I won't die for nothing."],
    },
    social: {
      lines: ["Should we settle on the same side?", "The child will inherit our words.", "Do you accept the chief?"],
      replies: ["Only if they're worth hearing.", "I can choose for myself.", "Food first."],
    },
    idle: {
      lines: ["The wind is light today.", "Are you all right?", "I want to choose my own next step."],
      replies: ["Still alive.", "Walk with me?", "I'm thinking too."],
    },
    leader: ["I'll lead this tribe.", "The vote is mine. We live first."],
    refuse: ["I won't obey.", "That chief is not my choice.", "I have my own will."],
    obey: ["This time I follow the chief.", "I accept them."],
    confused: ["I don't understand.", "What are you saying?"],
    cross: ["Different tongues, but I follow you. Both tribes gain from this."],
    birth: ["A child is born."],
  },
};

function langOf(agent) {
  return agent?.tongue === "en" ? "en" : "zh";
}

function topicKey(agent) {
  if (agent.hunger > 0.7 || agent.state === "forage" || agent.state === "fish" || agent.state === "hunt") return "hungry";
  if (agent.state === "build" || agent.state === "sleep") return "home";
  if (agent.state === "war") return "war";
  if (agent.state === "social" || agent.genes.social > 0.62) return "social";
  return "idle";
}

export function voice(agent, key) {
  const bag = PACK[langOf(agent)][key] || PACK.zh[key];
  if (Array.isArray(bag)) return pick(bag);
  return pick(bag.lines);
}

export function canTalk(a, b) {
  const sameTribe = a.factionId && a.factionId === b.factionId;
  const la = langOf(a);
  const lb = langOf(b);
  if (sameTribe || la === lb) return { ok: true, bridge: false, cross: !sameTribe && !!a.factionId && !!b.factionId };
  if (a.bridge || b.bridge) return { ok: true, bridge: true, cross: true };
  return { ok: false, bridge: false, cross: true };
}

export function converse(a, b) {
  const key = topicKey(a);
  const left = PACK[langOf(a)][key];
  const right = PACK[langOf(b)][key];
  return { line: pick(left.lines), reply: pick(right.replies) };
}

export function interpret(text) {
  const tags = [];
  if (/和平|别打|不要打|停战|住手|别杀/.test(text)) tags.push("peace");
  if (/打猎|狩猎|追兽|野兽|弓|猎物/.test(text)) tags.push("hunt");
  if (/海|鱼|潮|船|盐|网/.test(text)) tags.push("sea");
  if (/种|田|浆果|耕|种子|分享|省着/.test(text)) tags.push("field");
  if (/勇敢|去打|战斗|不怕|进攻/.test(text)) tags.push("brave");
  if (/回家|盖房|房子|屋子|建/.test(text)) tags.push("build");
  if (/交换|交易|做买卖|卖/.test(text)) tags.push("trade");
  return tags;
}

export function replyToPlayer(agent, text, tags) {
  const title = agent.culture?.title || "我们的活法";
  const origin = agent.culture?.origin || "";
  if (!tags.length) {
    return `我听见了。「${text}」。${origin || title}。你再说得具体些，我会照着改。`;
  }
  if (tags.includes("peace")) return "你叫我别打。这话我会记住，下手之前会犹豫。";
  if (tags.includes("sea")) return `${title}的人听你说海。若你反复这样说，我会改去靠潮汐生活。`;
  if (tags.includes("hunt")) return `${title}的人听你说打猎。说得多了，我会改去林子里追。`;
  if (tags.includes("field")) return "你让我守着地和种子。我会把更多时间留在草地上。";
  if (tags.includes("brave")) return "你让我勇敢一点。下次遇敌，我不会先退。";
  if (tags.includes("build")) return "你让我先把屋子盖起来。天黑前我会往家走。";
  if (tags.includes("trade")) return "你让我拿东西去换，而不是去抢。我会把这话带给同族。";
  return `我记下了：${text}`;
}

export function activityLabel(agent) {
  if (!agent?.alive) return agent?.deathReason || "坟墓";
  if (agent.state === "craft" && agent.job) return `造${agent.job.name}`;
  return stateLabel(agent.state);
}

export function stateLabel(state) {
  return (
    {
      idle: "发呆",
      forage: "觅食",
      fish: "捕鱼",
      hunt: "狩猎",
      build: "筑巢",
      craft: "造物",
      sleep: "睡觉",
      social: "社交",
      wander: "游荡",
      war: "交战",
      trade: "交易",
      flee: "奔逃",
      grave: "坟墓",
      dead: "坟墓",
    }[state] || "活动"
  );
}
