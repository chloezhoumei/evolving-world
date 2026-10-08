#!/bin/bash
ROOT="/Users/chloe/Desktop/工作项目/演化我的世界"
SUPPORT="$HOME/Library/Application Support/演化我的世界"
BIN="$SUPPORT/cloudflared"
URL_FILE="$HOME/Desktop/演化世界地址.txt"
PORT=4173
VITE="$ROOT/node_modules/.bin/vite"
NODE="/usr/local/bin/node"

mkdir -p "$SUPPORT"
cd "$ROOT" || exit 1
export PATH="/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin"

preview_pid=0
tunnel_pid=0
public_fails=0
local_fails=0

alive() {
  [ "$1" -gt 0 ] && kill -0 "$1" 2>/dev/null
}

listener() {
  lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1
}

start_preview() {
  if listener; then
    return
  fi
  "$NODE" "$VITE" preview --host 127.0.0.1 --port "$PORT" >>"$SUPPORT/preview.log" 2>&1 &
  preview_pid=$!
}

start_tunnel() {
  if alive "$tunnel_pid"; then
    kill "$tunnel_pid" 2>/dev/null || true
    wait "$tunnel_pid" 2>/dev/null || true
  fi
  : >"$SUPPORT/tunnel.log"
  "$BIN" tunnel --url "http://127.0.0.1:$PORT" >>"$SUPPORT/tunnel.log" 2>&1 &
  tunnel_pid=$!
  public_fails=0
}

publish_url() {
  local url
  url="$(grep -oE 'https://[-a-z0-9]+\.trycloudflare\.com' "$SUPPORT/tunnel.log" 2>/dev/null | tail -1)"
  if [ -z "$url" ]; then
    return
  fi
  printf '%s\n' "用 Safari 打开下面这个地址。" "电脑开着、不要休眠，游戏就会一直在。" "只有这条隧道自己断掉并重连时，地址才会换成新的。以这个文件最后一行为准。" "" "$url" >"$URL_FILE"
  printf '%s\n' "$url" >"$SUPPORT/url.txt"
}

code_of() {
  curl -sS -m 8 -o /dev/null -w '%{http_code}' "$1" 2>/dev/null || printf '000'
}

caffeinate -i -w $$ >/dev/null 2>&1 &

while true; do
  if ! alive "$preview_pid" && ! listener; then
    start_preview
  fi
  if ! alive "$tunnel_pid"; then
    start_tunnel
  fi
  publish_url

  local_code="$(code_of "http://127.0.0.1:$PORT/")"
  if [ "$local_code" = "200" ]; then
    local_fails=0
  else
    local_fails=$((local_fails + 1))
  fi
  if [ "$local_fails" -ge 2 ]; then
    if listener; then
      lsof -tiTCP:"$PORT" -sTCP:LISTEN | xargs kill 2>/dev/null || true
      sleep 1
    fi
    preview_pid=0
    start_preview
    local_fails=0
  fi

  url="$(cat "$SUPPORT/url.txt" 2>/dev/null || true)"
  if [ -n "$url" ] && alive "$tunnel_pid"; then
    public_code="$(code_of "$url/")"
    if [ "$public_code" = "200" ]; then
      public_fails=0
    else
      public_fails=$((public_fails + 1))
    fi
    if [ "$public_fails" -ge 3 ]; then
      start_tunnel
    fi
  fi

  sleep 15
done
