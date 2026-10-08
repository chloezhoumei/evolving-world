import * as THREE from "three";
import { BLOCK, isSolid } from "./blocks.js";

export class Player {
  constructor(camera, world, dom) {
    this.camera = camera;
    this.world = world;
    this.dom = dom;
    this.pos = world.randomSpawn().add(new THREE.Vector3(0, 1.2, 0));
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = -0.2;
    this.speed = 6;
    this.keys = new Set();
    this.locked = false;
    this.boost = false;
    this.touch = { x: 0, y: 0, sprint: false, jump: false };
    this.raycaster = new THREE.Raycaster();

    window.addEventListener("keydown", (e) => {
      this.keys.add(e.code);
      if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
        e.preventDefault();
      }
    });
    window.addEventListener("keyup", (e) => this.keys.delete(e.code));

    dom.addEventListener("click", () => {
      if (document.body.classList.contains("touch-device")) return;
      if (!this.locked) dom.requestPointerLock();
    });
    document.addEventListener("pointerlockchange", () => {
      this.locked = document.pointerLockElement === dom;
      if (!document.body.classList.contains("touch-device")) {
        document.getElementById("crosshair").style.opacity = this.locked ? "1" : "0";
      }
    });
    document.addEventListener("mousemove", (e) => {
      if (!this.locked) return;
      this.yaw -= e.movementX * 0.0022;
      this.pitch -= e.movementY * 0.0022;
      this.pitch = Math.max(-1.4, Math.min(1.4, this.pitch));
    });
    document.addEventListener("mousedown", (e) => {
      if (!this.locked) return;
      if (e.button === 0) this.mine();
      if (e.button === 2) this.place();
    });
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  setMove(x, y) {
    this.touch.x = x;
    this.touch.y = y;
  }

  addLook(dx, dy) {
    this.yaw -= dx * 0.006;
    this.pitch -= dy * 0.005;
    this.pitch = Math.max(-1.2, Math.min(1.2, this.pitch));
  }

  requestJump() {
    this.touch.jump = true;
  }

  update(dt) {
    this.boost = this.keys.has("KeyE") || this.touch.sprint;
    const speed = this.speed * (this.boost ? 2.2 : 1);
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    let ix = this.touch.x;
    let iy = this.touch.y;
    if (this.keys.has("KeyD")) ix += 1;
    if (this.keys.has("KeyA")) ix -= 1;
    if (this.keys.has("KeyW")) iy += 1;
    if (this.keys.has("KeyS")) iy -= 1;
    ix = Math.max(-1, Math.min(1, ix));
    iy = Math.max(-1, Math.min(1, iy));
    const move = new THREE.Vector3();
    if (Math.abs(ix) > 0.05 || Math.abs(iy) > 0.05) {
      move.addScaledVector(right, ix);
      move.addScaledVector(forward, iy);
      const mag = Math.min(1, move.length());
      move.normalize().multiplyScalar(speed * mag);
      this.vel.x = move.x;
      this.vel.z = move.z;
    } else {
      this.vel.x *= 0.8;
      this.vel.z *= 0.8;
    }

    const onGround = this.pos.y <= this.groundY() + 0.05;
    if ((this.keys.has("Space") || this.touch.jump) && onGround) this.vel.y = 8.5;
    this.touch.jump = false;
    this.vel.y -= 22 * dt;

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    this.pos.x = Math.max(1, Math.min(this.world.size - 1, this.pos.x));
    this.pos.z = Math.max(1, Math.min(this.world.size - 1, this.pos.z));
    this.pos.y += this.vel.y * dt;
    const g = this.groundY();
    if (this.pos.y < g) {
      this.pos.y = g;
      this.vel.y = 0;
    }

    this.camera.position.copy(this.pos);
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
  }

  groundY() {
    const x = Math.floor(this.pos.x);
    const z = Math.floor(this.pos.z);
    return this.world.surfaceY(x, z) + 1.6;
  }

  aimBlock() {
    const origin = this.camera.position.clone();
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    let prev = null;
    for (let t = 0; t < 6; t += 0.1) {
      const p = origin.clone().addScaledVector(dir, t);
      const x = Math.floor(p.x);
      const y = Math.floor(p.y);
      const z = Math.floor(p.z);
      const id = this.world.get(x, y, z);
      if (isSolid(id)) return { x, y, z, id, place: prev };
      prev = { x, y, z };
    }
    return null;
  }

  mine() {
    const hit = this.aimBlock();
    if (!hit) return null;
    return this.world.breakBlock(hit.x, hit.y, hit.z);
  }

  place() {
    const hit = this.aimBlock();
    if (!hit?.place) return false;
    const { x, y, z } = hit.place;
    if (Math.hypot(x + 0.5 - this.pos.x, y + 0.5 - this.pos.y, z + 0.5 - this.pos.z) < 1.2) return false;
    return this.world.placeBlock(x, y, z, BLOCK.DIRT);
  }
}
