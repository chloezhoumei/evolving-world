import * as THREE from "three";
import { BLOCK } from "./blocks.js";

const STAGE = { 游群: 0, 营地: 1, 村落: 2, 城邦: 3 };

export const CRAFTS = [
  {
    id: "field",
    name: "耕田",
    en: "a field",
    lives: ["field"],
    minStage: 0,
    wood: 1,
    seconds: 7,
    danger: 0.16,
    reward: 4,
    death: "耕田时被农具所伤",
  },
  {
    id: "boat",
    name: "船",
    en: "a boat",
    lives: ["sea"],
    minStage: 0,
    wood: 2,
    seconds: 8,
    danger: 0.28,
    reward: 6,
    death: "造船时落水",
    nearWater: true,
  },
  {
    id: "house",
    name: "房子",
    en: "a house",
    lives: ["sea", "hunt", "field"],
    minStage: 0,
    wood: 3,
    seconds: 9,
    danger: 0.34,
    reward: 8,
    death: "盖房时房屋倒塌",
  },
  {
    id: "bike",
    name: "摩托",
    en: "a motorcycle",
    lives: ["hunt", "field", "sea"],
    minStage: 1,
    wood: 3,
    seconds: 8,
    danger: 0.52,
    reward: 10,
    death: "造摩托时失事",
  },
  {
    id: "plane",
    name: "飞机",
    en: "a plane",
    lives: ["sea", "hunt", "field"],
    minStage: 2,
    wood: 4,
    seconds: 10,
    danger: 0.7,
    reward: 14,
    death: "造飞机时坠毁",
  },
];

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function pickCraft(agent) {
  const faction = agent.faction?.();
  const rank = STAGE[faction?.stage] || 0;
  const daring = (agent.genes.build > 0.7 || agent.genes.brave > 0.78) && agent.will > 0.45;
  const tier = rank + (daring ? 1 : 0);
  const life = agent.culture?.livelihood || "field";
  const options = CRAFTS.filter((craft) => craft.minStage <= tier);
  if (!options.length) return null;
  const bag = [];
  for (const craft of options) {
    const weight = craft.lives.includes(life) ? 4 : 1;
    for (let i = 0; i < weight; i++) bag.push(craft);
  }
  return { ...pick(bag), progress: 0, acc: 0 };
}

function box(w, h, d, color, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }));
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  return mesh;
}

function wheel(x, y, z) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.18, 0.08, 10),
    new THREE.MeshLambertMaterial({ color: 0x222222 })
  );
  mesh.rotation.z = Math.PI / 2;
  mesh.position.set(x, y, z);
  return mesh;
}

function buildMesh(id) {
  const group = new THREE.Group();
  if (id === "boat") {
    group.add(box(1.5, 0.28, 0.62, 0x8a5a32, 0, 0.2, 0));
    group.add(box(0.9, 0.16, 0.4, 0xc49a62, 0, 0.38, 0));
    group.add(box(0.08, 0.7, 0.08, 0x5c4030, 0.35, 0.7, 0));
  } else if (id === "field") {
    group.add(box(1.6, 0.08, 1.3, 0x6d4c2f, 0, 0.04, 0));
    group.add(box(1.35, 0.08, 0.22, 0x67a33a, 0, 0.1, -0.35));
    group.add(box(1.35, 0.08, 0.22, 0x7fb34a, 0, 0.1, 0));
    group.add(box(1.35, 0.08, 0.22, 0x5d9334, 0, 0.1, 0.35));
  } else if (id === "house") {
    group.add(box(1.25, 0.7, 1.15, 0xc4a06a, 0, 0.4, 0));
    group.add(box(1.4, 0.28, 1.3, 0x8d4b32, 0, 0.88, 0));
    group.add(box(0.28, 0.38, 0.08, 0x5a3a28, 0, 0.28, 0.58));
  } else if (id === "bike") {
    group.add(box(0.9, 0.22, 0.28, 0x2c3340, 0, 0.38, 0));
    group.add(box(0.16, 0.28, 0.1, 0x4a5568, -0.05, 0.58, 0));
    group.add(wheel(-0.38, 0.2, 0));
    group.add(wheel(0.38, 0.2, 0));
  } else {
    group.add(box(1.5, 0.22, 0.28, 0xd5dbe3, 0, 0.55, 0));
    group.add(box(0.7, 0.06, 1.5, 0xb7c3d0, 0.1, 0.55, 0));
    group.add(box(0.28, 0.16, 0.08, 0x9aa7b5, -0.62, 0.68, 0));
  }
  return group;
}

export function findCraftSite(world, agent, craft) {
  const origin = agent.faction?.() || agent;
  const ox = origin.x ?? agent.pos.x;
  const oz = origin.z ?? agent.pos.z;
  for (let i = 0; i < 10; i++) {
    const x = Math.max(2, Math.min(world.size - 3, Math.floor(ox + (Math.random() - 0.5) * 12)));
    const z = Math.max(2, Math.min(world.size - 3, Math.floor(oz + (Math.random() - 0.5) * 12)));
    const y = world.surfaceY(x, z);
    const ground = world.get(x, y, z);
    const wet = ground === BLOCK.WATER || ground === BLOCK.SAND;
    if (craft.nearWater ? wet || ground === BLOCK.SAND : ground !== BLOCK.WATER && ground !== BLOCK.AIR) {
      return { x: x + 0.5, z: z + 0.5 };
    }
  }
  return { x: agent.pos.x, z: agent.pos.z };
}

export function placeCraft(world, craft, x, z) {
  const y = world.surfaceY(Math.floor(x), Math.floor(z)) + 1.02;
  const mesh = buildMesh(craft.id);
  mesh.position.set(x, y, z);
  mesh.rotation.y = Math.random() * Math.PI * 2;
  world.scene.add(mesh);
  if (!world.crafts) world.crafts = [];
  world.crafts.push(mesh);
  while (world.crafts.length > 70) {
    const old = world.crafts.shift();
    world.scene.remove(old);
    old.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
  }
}
