export function isTouchDevice() {
  return window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
}

export function bindTouch(player, { onPick, onTap } = {}) {
  document.body.classList.add("touch-device");
  document.getElementById("touch-ui").hidden = false;
  const stick = document.getElementById("stick");
  const knob = stick.querySelector(".knob");
  const look = document.getElementById("look-zone");
  const max = 42;
  let stickId = null;
  let origin = null;
  let lookId = null;
  let last = null;
  let lookStart = null;
  let lookMoved = false;

  const placeKnob = (clientX, clientY) => {
    let dx = clientX - origin.x;
    let dy = clientY - origin.y;
    const len = Math.hypot(dx, dy) || 1;
    const clamped = Math.min(max, len);
    const nx = (dx / len) * clamped;
    const ny = (dy / len) * clamped;
    knob.style.transform = `translate(${nx}px, ${ny}px)`;
    player.setMove(nx / max, -ny / max);
  };

  stick.addEventListener("pointerdown", (e) => {
    if (document.body.classList.contains("sheet-open")) return;
    e.preventDefault();
    stickId = e.pointerId;
    stick.setPointerCapture(e.pointerId);
    const rect = stick.getBoundingClientRect();
    origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    placeKnob(e.clientX, e.clientY);
  });
  stick.addEventListener("pointermove", (e) => {
    if (e.pointerId !== stickId || !origin) return;
    placeKnob(e.clientX, e.clientY);
  });
  const endStick = (e) => {
    if (e.pointerId !== stickId) return;
    stickId = null;
    origin = null;
    knob.style.transform = "translate(0px, 0px)";
    player.setMove(0, 0);
  };
  stick.addEventListener("pointerup", endStick);
  stick.addEventListener("pointercancel", endStick);

  look.addEventListener("pointerdown", (e) => {
    if (document.body.classList.contains("sheet-open")) return;
    if (e.target.closest("button, #stick, #sheet, .panel, #install-hint, #pick-prompt, #card-dock")) return;
    lookId = e.pointerId;
    last = { x: e.clientX, y: e.clientY };
    lookStart = { x: e.clientX, y: e.clientY };
    lookMoved = false;
    look.setPointerCapture(e.pointerId);
  });
  look.addEventListener("pointermove", (e) => {
    if (e.pointerId !== lookId || !last) return;
    const dx = e.clientX - last.x;
    const dy = e.clientY - last.y;
    if (Math.hypot(e.clientX - lookStart.x, e.clientY - lookStart.y) > 10) lookMoved = true;
    player.addLook(dx, dy);
    last = { x: e.clientX, y: e.clientY };
  });
  const endLook = (e) => {
    if (e.pointerId !== lookId) return;
    const wasTap = !lookMoved && lookStart;
    const tapX = lookStart?.x;
    const tapY = lookStart?.y;
    lookId = null;
    last = null;
    lookStart = null;
    if (wasTap && tapX != null) onTap?.(tapX, tapY);
  };
  look.addEventListener("pointerup", endLook);
  look.addEventListener("pointercancel", endLook);

  const press = (id, fn) => {
    const el = document.getElementById(id);
    el.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      e.stopPropagation();
      fn();
    });
  };
  press("btn-jump", () => player.requestJump());
  press("btn-mine", () => player.mine());
  press("btn-place", () => player.place());
  press("btn-run", () => {
    player.touch.sprint = !player.touch.sprint;
    document.getElementById("btn-run").classList.toggle("on", player.touch.sprint);
  });
  press("btn-pick", () => onPick?.());
  press("btn-menu", () => {
    document.getElementById("pick-prompt").hidden = true;
    document.body.classList.toggle("sheet-open");
  });
  document.getElementById("sheet-close").addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("sheet-open");
  });

  const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  const hint = document.getElementById("install-hint");
  if (!standalone) hint.hidden = false;
  document.getElementById("install-dismiss").addEventListener("click", () => {
    hint.hidden = true;
  });
  document.getElementById("crosshair").style.opacity = "1";
  document.getElementById("touch-ui").addEventListener("contextmenu", (e) => e.preventDefault());
}
