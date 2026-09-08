import type { NpcIntroduction } from '@javaplay/contracts';

export const islandOutline = [170, 180, 275, 112, 430, 120, 532, 92, 685, 145, 786, 241, 775, 398, 666, 497, 490, 532, 325, 507, 181, 434, 127, 310];
export const trees = [[217, 238, 1], [256, 420, 1.2], [701, 322, 1.1], [656, 420, 0.85], [430, 198, 0.85], [376, 457, 0.65]] as const;

export const villagers: (NpcIntroduction & { x: number; y: number; color: number })[] = [
  { id: 'ira', name: 'Ира', role: 'Хранительница маяка', greeting: 'Добро пожаловать на Логос. Осмотрись: за моей спиной — старый маяк. Скоро мы вернём ему свет.', x: 542, y: 276, color: 0xb97752 },
  { id: 'nika', name: 'Ника', role: 'Багхантер', greeting: 'Я Ника. Проверяю, почему механизмы перестали слушаться. Если заметишь что-то странное — запомни, как это повторить.', x: 345, y: 355, color: 0x7773a5 },
];

export const obstacles = [
  { x: 235, y: 252, width: 105, height: 83 }, // Workshop walls.
  { x: 562, y: 138, width: 64, height: 109 }, // Lighthouse base.
  { x: 735, y: 333, width: 26, height: 67 }, // Closed gate.
  ...trees.map(([x, y]) => ({ x: x - 11, y: y - 7, width: 22, height: 26 })),
  ...villagers.map(({ x, y }) => ({ x: x - 10, y: y - 7, width: 20, height: 14 })),
];

function insideIsland(x: number, y: number) {
  let inside = false;
  for (let i = 0, j = islandOutline.length - 2; i < islandOutline.length; j = i, i += 2) {
    const xi = islandOutline[i]!, yi = islandOutline[i + 1]!;
    const xj = islandOutline[j]!, yj = islandOutline[j + 1]!;
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Eight samples keep the player's feet on land or the connected pier. */
export function canStandAt(x: number, y: number) {
  const radius = 9;
  for (let index = 0; index < 8; index++) {
    const angle = index * Math.PI / 4;
    const px = x + Math.cos(angle) * radius, py = y + Math.sin(angle) * radius;
    const onPier = px >= 432 && px <= 494 && py >= 493 && py <= 603;
    if (!insideIsland(px, py) && !onPier) return false;
  }
  return !obstacles.some((rect) => {
    const closestX = Math.max(rect.x, Math.min(x, rect.x + rect.width));
    const closestY = Math.max(rect.y, Math.min(y, rect.y + rect.height));
    return Math.hypot(x - closestX, y - closestY) < radius;
  });
}
