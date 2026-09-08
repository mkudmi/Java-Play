import Phaser from 'phaser';
import type { WorldEventHandler } from '@javaplay/contracts';
import type { WorldInput } from './input/WorldInput';
import { BeginningScene } from './scenes/BeginningScene';

export function createWorld(parent: HTMLElement, onEvent: WorldEventHandler, controls: WorldInput): () => void {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: 960,
    height: 640,
    backgroundColor: '#244c58',
    banner: false,
    input: { keyboard: false },
    audio: { noAudio: true },
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: [new BeginningScene(onEvent, controls)],
  });

  const handleContextLoss = () => onEvent({ type: 'world.error', message: 'Графическая сцена недоступна. Обнови страницу, чтобы восстановить её.' });
  game.canvas.addEventListener('webglcontextlost', handleContextLoss);
  return () => {
    game.canvas.removeEventListener('webglcontextlost', handleContextLoss);
    game.destroy(true);
  };
}
