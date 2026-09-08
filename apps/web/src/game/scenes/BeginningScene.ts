import Phaser from 'phaser';
import type { WorldEventHandler } from '@javaplay/contracts';

/** Static M0 scene. Movement, collisions and NPCs belong to M1. */
export class BeginningScene extends Phaser.Scene {
  constructor(private readonly onEvent: WorldEventHandler) { super('beginning'); }

  create() {
    const art = this.add.graphics();

    // Deterministic ripples keep the foundation independent of downloaded assets.
    art.lineStyle(2, 0x83b8b9, 0.16);
    for (let row = 0; row < 13; row++) {
      for (let col = 0; col < 16; col++) {
        const x = col * 68 + (row % 2) * 25;
        const y = row * 52 + 22;
        art.lineBetween(x, y, x + 18, y);
      }
    }

    const island = [170, 180, 275, 112, 430, 120, 532, 92, 685, 145, 786, 241, 775, 398, 666, 497, 490, 532, 325, 507, 181, 434, 127, 310];
    art.fillStyle(0x183c46, 0.55).fillEllipse(470, 364, 696, 400);
    art.fillStyle(0xb1bda1).fillPoints(this.points(island, 0, 16), true);
    art.fillStyle(0x789888).fillPoints(this.points(island), true);
    art.fillStyle(0x87a491).fillEllipse(473, 299, 520, 301);

    // A winding path links the landing, house and lighthouse.
    art.lineStyle(38, 0xd0c3a0, 1);
    art.beginPath().moveTo(460, 503).lineTo(449, 396).lineTo(542, 323).lineTo(597, 207).strokePath();
    art.lineStyle(28, 0xd0c3a0, 1).lineBetween(457, 390, 318, 319);

    this.house(art, 286, 272);
    this.lighthouse(art, 594, 182);
    for (const [x, y, size] of [[217, 238, 1], [256, 420, 1.2], [701, 322, 1.1], [656, 420, 0.85], [430, 198, 0.85], [376, 457, 0.65]] as const) {
      this.tree(art, x, y, size);
    }

    // Landing pier.
    art.fillStyle(0x294848, 0.4).fillRect(423, 500, 90, 115);
    art.fillStyle(0x9c8163).fillRect(432, 493, 62, 110);
    art.lineStyle(2, 0x695e50);
    for (let y = 505; y < 604; y += 14) art.lineBetween(434, y, 492, y);
    art.fillStyle(0xd1b590);
    for (const x of [428, 490]) for (const y of [499, 583]) art.fillRoundedRect(x, y, 9, 23, 3);

    for (const [x, y] of [[340, 204], [374, 220], [599, 433], [611, 449], [208, 340], [696, 258]]) {
      if (x === undefined || y === undefined) continue;
      art.fillStyle(0xead9a4).fillCircle(x, y, 3);
      art.fillStyle(0x597e70).fillRect(x - 1, y + 3, 2, 6);
    }

    this.add.text(542, 107, 'СТАРЫЙ МАЯК', { fontFamily: 'sans-serif', fontSize: '12px', color: '#f1e8cf', letterSpacing: 2 }).setAlpha(0.8);
    this.onEvent({ type: 'world.ready', regionId: 'beginning-village' });
  }

  private points(values: number[], dx = 0, dy = 0): Phaser.Geom.Point[] {
    const result: Phaser.Geom.Point[] = [];
    for (let i = 0; i < values.length; i += 2) result.push(new Phaser.Geom.Point(values[i]! + dx, values[i + 1]! + dy));
    return result;
  }

  private tree(art: Phaser.GameObjects.Graphics, x: number, y: number, scale: number) {
    art.fillStyle(0x385d52, 0.28).fillEllipse(x + 8, y + 14, 65 * scale, 26 * scale);
    art.fillStyle(0x746b52).fillRect(x - 5, y - 10, 10, 28);
    art.fillStyle(0x3a675b).fillTriangle(x - 37 * scale, y, x, y - 91 * scale, x + 37 * scale, y);
    art.fillStyle(0x4c7a65).fillTriangle(x - 29 * scale, y - 24 * scale, x, y - 99 * scale, x + 29 * scale, y - 24 * scale);
    art.fillStyle(0x659078).fillTriangle(x - 19 * scale, y - 50 * scale, x, y - 107 * scale, x + 19 * scale, y - 50 * scale);
  }

  private house(art: Phaser.GameObjects.Graphics, x: number, y: number) {
    art.fillStyle(0x385d52, 0.3).fillEllipse(x + 25, y + 61, 146, 42);
    art.fillStyle(0xe1d4b5).fillRoundedRect(x - 51, y - 20, 105, 83, 4);
    art.fillStyle(0x8f6252).fillTriangle(x - 66, y - 12, x + 2, y - 72, x + 68, y - 12);
    art.fillStyle(0xae7960).fillTriangle(x - 66, y - 12, x + 2, y - 72, x + 2, y - 12);
    art.fillStyle(0x49635e).fillRoundedRect(x - 10, y + 19, 23, 44, 3);
    art.fillStyle(0xe4bf7e).fillRect(x - 37, y + 10, 17, 19).fillRect(x + 26, y + 10, 17, 19);
  }

  private lighthouse(art: Phaser.GameObjects.Graphics, x: number, y: number) {
    art.fillStyle(0x476859, 0.35).fillEllipse(x + 15, y + 71, 116, 39);
    art.fillStyle(0xc9c8af).fillPoints(this.points([-32, 65, -22, -44, 22, -44, 32, 65], x, y), true);
    art.fillStyle(0xe4debf).fillPoints(this.points([-32, 65, -22, -44, 0, -44, 0, 65], x, y), true);
    art.fillStyle(0x9f7563).fillRect(x - 26, y + 2, 52, 19);
    art.fillStyle(0x344c49).fillRoundedRect(x - 9, y + 39, 18, 26, 6);
    art.fillStyle(0x2e4e51).fillRect(x - 25, y - 73, 50, 30);
    art.fillStyle(0xd4b678).fillRect(x - 15, y - 68, 30, 20);
    art.fillStyle(0x476360).fillTriangle(x - 35, y - 73, x, y - 99, x + 35, y - 73);
    art.fillStyle(0x3b5551).fillRect(x - 34, y - 46, 68, 7);
  }
}
