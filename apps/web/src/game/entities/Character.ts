import Phaser from 'phaser';

export class Character extends Phaser.GameObjects.Container {
  private figure: Phaser.GameObjects.Graphics;
  private eyes: Phaser.GameObjects.Graphics;
  private stride = 0;

  constructor(scene: Phaser.Scene, x: number, y: number, color: number) {
    super(scene, x, y);
    const shadow = scene.add.ellipse(0, 1, 25, 10, 0x243e39, 0.3);
    this.figure = scene.add.graphics();
    this.figure.fillStyle(0x253b40).fillRoundedRect(-8, -9, 6, 10, 2).fillRoundedRect(2, -9, 6, 10, 2);
    this.figure.fillStyle(color).fillRoundedRect(-11, -26, 22, 20, 5);
    this.figure.fillStyle(0xe4ba91).fillCircle(0, -33, 9);
    this.figure.fillStyle(0x3a4545).fillRoundedRect(-9, -43, 18, 8, 4);
    this.eyes = scene.add.graphics().fillStyle(0x293d3e).fillCircle(-3, -33, 1.3).fillCircle(3, -33, 1.3);
    this.add([shadow, this.figure, this.eyes]);
    scene.add.existing(this);
    this.setDepth(y);
  }

  animateWalk(dx: number, dy: number, delta: number) {
    const moving = dx !== 0 || dy !== 0;
    this.stride = moving ? this.stride + delta * 0.016 : 0;
    const bob = moving ? -Math.abs(Math.sin(this.stride)) * 3 : 0;
    this.figure.y = bob;
    this.eyes.y = bob;
    if (moving) { this.eyes.x = Math.sign(dx) * 2; this.eyes.visible = dy >= 0; }
    this.setDepth(this.y);
  }
}
