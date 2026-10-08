export const BLOCK = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  WOOD: 4,
  LEAVES: 5,
  SAND: 6,
  WATER: 7,
  BERRY: 8,
  PLANKS: 9,
};

export const BLOCK_META = {
  [BLOCK.GRASS]: { name: "草方块", color: 0x5d9e4a, solid: true, breakable: true },
  [BLOCK.DIRT]: { name: "泥土", color: 0x8b5a2b, solid: true, breakable: true },
  [BLOCK.STONE]: { name: "石头", color: 0x7a7f88, solid: true, breakable: true },
  [BLOCK.WOOD]: { name: "木头", color: 0x6b4423, solid: true, breakable: true },
  [BLOCK.LEAVES]: { name: "树叶", color: 0x3f8f4a, solid: true, breakable: true },
  [BLOCK.SAND]: { name: "沙子", color: 0xd8c27a, solid: true, breakable: true },
  [BLOCK.WATER]: { name: "水", color: 0x3a7fd4, solid: false, breakable: false },
  [BLOCK.BERRY]: { name: "浆果丛", color: 0xc43b5a, solid: true, breakable: true, food: true },
  [BLOCK.PLANKS]: { name: "木板", color: 0xb8894d, solid: true, breakable: true },
};

export function isSolid(id) {
  return !!(BLOCK_META[id] && BLOCK_META[id].solid);
}

export function isFood(id) {
  return !!(BLOCK_META[id] && BLOCK_META[id].food);
}
