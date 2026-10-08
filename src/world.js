import * as THREE from "three";
import { fbm } from "./noise.js";
import { BLOCK, BLOCK_META, isSolid } from "./blocks.js";

const SIZE = 64;
const SEA = 6;

export class World {
  constructor(scene) {
    this.scene = scene;
    this.size = SIZE;
    this.seaLevel = SEA;
    this.blocks = new Uint8Array(SIZE * 24 * SIZE);
    this.height = 24;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.meshes = new Map();
    this.foodSpawns = [];
    this.dirty = false;
    this.rebuildCooldown = 0;
    this.generate();
    this.rebuild();
  }

  idx(x, y, z) {
    return y * this.size * this.size + z * this.size + x;
  }

  inBounds(x, y, z) {
    return x >= 0 && z >= 0 && y >= 0 && x < this.size && z < this.size && y < this.height;
  }

  get(x, y, z) {
    if (!this.inBounds(x, y, z)) return BLOCK.AIR;
    return this.blocks[this.idx(x, y, z)];
  }

  set(x, y, z, id) {
    if (!this.inBounds(x, y, z)) return false;
    this.blocks[this.idx(x, y, z)] = id;
    return true;
  }

  surfaceY(x, z) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (isSolid(this.get(x, y, z))) return y;
    }
    return 0;
  }

  generate() {
    for (let x = 0; x < this.size; x++) {
      for (let z = 0; z < this.size; z++) {
        const n = fbm(x * 0.045, z * 0.045, 5);
        let h = Math.floor(4 + n * 10);
        const beach = h <= SEA + 1;
        for (let y = 0; y <= h; y++) {
          let id = BLOCK.STONE;
          if (y === h) id = beach ? BLOCK.SAND : BLOCK.GRASS;
          else if (y >= h - 2) id = beach ? BLOCK.SAND : BLOCK.DIRT;
          this.set(x, y, z, id);
        }
        if (h < SEA) {
          for (let y = h + 1; y <= SEA; y++) this.set(x, y, z, BLOCK.WATER);
        }
        if (!beach && h > SEA && Math.random() < 0.035) {
          this.plantTree(x, h + 1, z);
        }
        if (!beach && h > SEA && Math.random() < 0.04) {
          this.set(x, h + 1, z, BLOCK.BERRY);
          this.foodSpawns.push({ x, y: h + 1, z });
        }
      }
    }
    this.collectBiomes();
    this.seedCritters();
  }

  columnFlags(x, z) {
    x = Math.max(0, Math.min(this.size - 1, x));
    z = Math.max(0, Math.min(this.size - 1, z));
    const y = this.heightMap[z][x];
    const ground = this.get(x, y, z);
    const above = this.get(x, y + 1, z);
    let woods = false;
    for (let yy = y; yy >= Math.max(0, y - 8); yy--) {
      if (this.get(x, yy, z) === BLOCK.WOOD) woods = true;
    }
    return {
      y,
      ground,
      shore: ground === BLOCK.SAND || ground === BLOCK.WATER || above === BLOCK.WATER,
      woods,
      walk: (ground === BLOCK.GRASS || ground === BLOCK.SAND || ground === BLOCK.DIRT) && above !== BLOCK.WATER && ground !== BLOCK.LEAVES && ground !== BLOCK.WOOD,
    };
  }

  collectBiomes() {
    this.heightMap = Array.from({ length: this.size }, () => new Uint8Array(this.size));
    for (let x = 0; x < this.size; x++) {
      for (let z = 0; z < this.size; z++) this.heightMap[z][x] = this.surfaceY(x, z);
    }
    this.biomeSpots = { sea: [], hunt: [], field: [] };
    for (let x = 2; x < this.size - 2; x++) {
      for (let z = 2; z < this.size - 2; z++) {
        const here = this.columnFlags(x, z);
        if (!here.walk) continue;
        let shore = false;
        let woods = false;
        for (let dx = -3; dx <= 3 && !(shore && woods); dx++) {
          for (let dz = -3; dz <= 3; dz++) {
            const flag = this.columnFlags(x + dx, z + dz);
            shore = shore || flag.shore;
            woods = woods || flag.woods;
          }
        }
        if (here.ground === BLOCK.SAND) this.biomeSpots.sea.push({ x, y: here.y, z });
        else if (woods) this.biomeSpots.hunt.push({ x, y: here.y, z });
        else if (here.ground === BLOCK.GRASS) this.biomeSpots.field.push({ x, y: here.y, z });
      }
    }
  }

  biomeAt(x, z) {
    x = Math.max(0, Math.min(this.size - 1, x));
    z = Math.max(0, Math.min(this.size - 1, z));
    if (!this.heightMap) return "field";
    const here = this.columnFlags(x, z);
    if (here.ground === BLOCK.SAND) return "sea";
    for (let dx = -3; dx <= 3; dx++) {
      for (let dz = -3; dz <= 3; dz++) {
        const xx = Math.max(0, Math.min(this.size - 1, x + dx));
        const zz = Math.max(0, Math.min(this.size - 1, z + dz));
        if (this.columnFlags(xx, zz).woods) return "hunt";
      }
    }
    return "field";
  }

  spawnBiome(kind) {
    const list = this.biomeSpots?.[kind] || [];
    if (!list.length) return this.randomSpawn();
    const spot = list[Math.floor(Math.random() * list.length)];
    return new THREE.Vector3(spot.x + 0.5, spot.y + 1.05, spot.z + 0.5);
  }

  burialNear(x, z, livelihood) {
    const kind = livelihood === "sea" ? "sea" : livelihood === "hunt" ? "hunt" : "field";
    const spot = this.spawnBiome(kind);
    spot.x = Math.max(2, Math.min(this.size - 2, x * 0.35 + spot.x * 0.65));
    spot.z = Math.max(2, Math.min(this.size - 2, z * 0.35 + spot.z * 0.65));
    const y = this.surfaceY(Math.floor(spot.x), Math.floor(spot.z));
    spot.y = y + 1.02;
    return spot;
  }

  seedCritters() {
    this.critters = [];
    for (let i = 0; i < 12; i++) this.critters.push(this.makeCritter("fish"));
    for (let i = 0; i < 12; i++) this.critters.push(this.makeCritter("game"));
  }

  makeCritter(kind) {
    const pos = this.spawnBiome(kind === "fish" ? "sea" : "hunt");
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(kind === "fish" ? 0.42 : 0.34, 0.18, kind === "fish" ? 0.2 : 0.5),
      new THREE.MeshLambertMaterial({ color: kind === "fish" ? 0x4aa3d8 : 0x7a4b2a })
    );
    mesh.position.copy(pos);
    this.scene.add(mesh);
    return { kind, mesh, gone: false, back: 0 };
  }

  nearestCritter(from, kind, maxDist = 16) {
    let best = null;
    let bestD = maxDist * maxDist;
    for (const critter of this.critters || []) {
      if (critter.gone || critter.kind !== kind) continue;
      const dx = critter.mesh.position.x - from.x;
      const dz = critter.mesh.position.z - from.z;
      const d = dx * dx + dz * dz;
      if (d < bestD) {
        bestD = d;
        best = critter;
      }
    }
    return best;
  }

  collectCritter(critter) {
    if (!critter || critter.gone) return false;
    critter.gone = true;
    critter.back = performance.now() + 14000;
    critter.mesh.visible = false;
    return true;
  }

  tickCritters() {
    const now = performance.now();
    for (const critter of this.critters || []) {
      if (!critter.gone || now < critter.back) continue;
      const pos = this.spawnBiome(critter.kind === "fish" ? "sea" : "hunt");
      critter.mesh.position.copy(pos);
      critter.mesh.visible = true;
      critter.gone = false;
    }
  }

  plantTree(x, y, z) {
    const trunk = 3 + Math.floor(Math.random() * 2);
    for (let i = 0; i < trunk; i++) this.set(x, y + i, z, BLOCK.WOOD);
    const top = y + trunk;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (Math.abs(dx) + Math.abs(dz) + Math.abs(dy) > 4) continue;
          const lx = x + dx;
          const ly = top + dy;
          const lz = z + dz;
          if (this.get(lx, ly, lz) === BLOCK.AIR) this.set(lx, ly, lz, BLOCK.LEAVES);
        }
      }
    }
  }

  markDirty() {
    this.dirty = true;
  }

  flushRebuild(dt = 0) {
    if (!this.dirty) return;
    this.rebuildCooldown -= dt;
    if (this.rebuildCooldown > 0) return;
    this.rebuild();
    this.dirty = false;
    this.rebuildCooldown = 0.18;
  }

  rebuild() {
    for (const mesh of this.meshes.values()) {
      this.group.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.dispose();
    }
    this.meshes.clear();

    const buckets = new Map();
    for (let x = 0; x < this.size; x++) {
      for (let z = 0; z < this.size; z++) {
        for (let y = 0; y < this.height; y++) {
          const id = this.get(x, y, z);
          if (id === BLOCK.AIR) continue;
          if (!this.isExposed(x, y, z)) continue;
          if (!buckets.has(id)) buckets.set(id, []);
          buckets.get(id).push(x, y, z);
        }
      }
    }

    const geo = new THREE.BoxGeometry(1, 1, 1);
    for (const [id, coords] of buckets) {
      const count = coords.length / 3;
      const meta = BLOCK_META[id];
      const mat = new THREE.MeshLambertMaterial({
        color: meta.color,
        transparent: id === BLOCK.WATER || id === BLOCK.LEAVES || id === BLOCK.BERRY,
        opacity: id === BLOCK.WATER ? 0.55 : id === BLOCK.LEAVES ? 0.85 : id === BLOCK.BERRY ? 0.95 : 1,
      });
      const mesh = new THREE.InstancedMesh(geo, mat, count);
      mesh.castShadow = id !== BLOCK.WATER;
      mesh.receiveShadow = true;
      const m = new THREE.Matrix4();
      for (let i = 0; i < count; i++) {
        m.setPosition(coords[i * 3] + 0.5, coords[i * 3 + 1] + 0.5, coords[i * 3 + 2] + 0.5);
        mesh.setMatrixAt(i, m);
      }
      mesh.instanceMatrix.needsUpdate = true;
      this.meshes.set(id, mesh);
      this.group.add(mesh);
    }
    this.dirty = false;
  }

  isExposed(x, y, z) {
    const dirs = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1],
    ];
    for (const [dx, dy, dz] of dirs) {
      const n = this.get(x + dx, y + dy, z + dz);
      if (n === BLOCK.AIR || n === BLOCK.WATER) return true;
    }
    return false;
  }

  breakBlock(x, y, z) {
    const id = this.get(x, y, z);
    if (!id || !BLOCK_META[id]?.breakable) return null;
    this.set(x, y, z, BLOCK.AIR);
    this.markDirty();
    return id;
  }

  placeBlock(x, y, z, id = BLOCK.DIRT) {
    if (!this.inBounds(x, y, z) || this.get(x, y, z) !== BLOCK.AIR) return false;
    this.set(x, y, z, id);
    this.markDirty();
    return true;
  }

  findNearest(from, predicate, maxDist = 18) {
    let best = null;
    let bestD = maxDist * maxDist;
    const x0 = Math.floor(from.x);
    const z0 = Math.floor(from.z);
    const r = Math.ceil(maxDist);
    for (let x = x0 - r; x <= x0 + r; x++) {
      for (let z = z0 - r; z <= z0 + r; z++) {
        if (x < 0 || z < 0 || x >= this.size || z >= this.size) continue;
        for (let y = this.height - 1; y >= 0; y--) {
          const id = this.get(x, y, z);
          if (!predicate(id, x, y, z)) continue;
          const dx = x + 0.5 - from.x;
          const dz = z + 0.5 - from.z;
          const d = dx * dx + dz * dz;
          if (d < bestD) {
            bestD = d;
            best = { x, y, z, id };
          }
          break;
        }
      }
    }
    return best;
  }

  spawnFoodNear(pos, count = 3) {
    let made = 0;
    for (let i = 0; i < 40 && made < count; i++) {
      const x = Math.max(1, Math.min(this.size - 2, Math.floor(pos.x + (Math.random() - 0.5) * 10)));
      const z = Math.max(1, Math.min(this.size - 2, Math.floor(pos.z + (Math.random() - 0.5) * 10)));
      const y = this.surfaceY(x, z);
      if (this.get(x, y, z) === BLOCK.GRASS && this.get(x, y + 1, z) === BLOCK.AIR) {
        this.set(x, y + 1, z, BLOCK.BERRY);
        made++;
      }
    }
    if (made) this.rebuild();
    return made;
  }

  randomSpawn() {
    for (let i = 0; i < 80; i++) {
      const x = 8 + Math.floor(Math.random() * (this.size - 16));
      const z = 8 + Math.floor(Math.random() * (this.size - 16));
      const y = this.surfaceY(x, z);
      if (this.get(x, y, z) === BLOCK.GRASS || this.get(x, y, z) === BLOCK.DIRT) {
        return new THREE.Vector3(x + 0.5, y + 1.1, z + 0.5);
      }
    }
    return new THREE.Vector3(this.size / 2, 12, this.size / 2);
  }
}
