/** Public lifecycle events; React never reaches into a Phaser scene. */
export type WorldEvent =
  | { type: 'world.ready'; regionId: string }
  | { type: 'world.error'; message: string };

export type WorldEventHandler = (event: WorldEvent) => void;
