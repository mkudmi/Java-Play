/** Keyboard input belongs only to the focused world, never to the editor. */
export class WorldInput {
  private keys = new Set<string>();
  private enabled = true;
  private focused = false;
  private interaction = false;

  setEnabled(value: boolean) { this.enabled = value; this.clear(); }
  setFocused(value: boolean) { this.focused = value; this.clear(); }
  clear() { this.keys.clear(); this.interaction = false; }

  keyDown(code: string, repeat: boolean): boolean {
    if (!this.enabled || !this.focused) return false;
    if (!['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'KeyE'].includes(code)) return false;
    this.keys.add(code);
    if (code === 'KeyE' && !repeat) this.interaction = true;
    return true;
  }

  keyUp(code: string) { this.keys.delete(code); }

  direction() {
    const x = Number(this.keys.has('KeyD') || this.keys.has('ArrowRight')) - Number(this.keys.has('KeyA') || this.keys.has('ArrowLeft'));
    const y = Number(this.keys.has('KeyS') || this.keys.has('ArrowDown')) - Number(this.keys.has('KeyW') || this.keys.has('ArrowUp'));
    const length = Math.hypot(x, y) || 1;
    return { x: x / length, y: y / length };
  }

  takeInteraction() { const value = this.interaction; this.interaction = false; return value; }
}
