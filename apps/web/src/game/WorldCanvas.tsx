import { useEffect, useRef, useState } from 'react';
import type { NpcIntroduction } from '@javaplay/contracts';
import { WorldInput } from './input/WorldInput';

export function WorldCanvas({ blocked }: { blocked: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Загружаем остров…');
  const [ready, setReady] = useState(false);
  const [controls] = useState(() => new WorldInput());
  const [npc, setNpc] = useState<NpcIntroduction | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => { controls.setEnabled(!blocked && !npc); }, [blocked, npc, controls]);
  useEffect(() => { if (npc) closeButton.current?.focus(); }, [npc]);

  useEffect(() => {
    const clear = () => controls.clear();
    window.addEventListener('blur', clear);
    document.addEventListener('visibilitychange', clear);
    return () => { window.removeEventListener('blur', clear); document.removeEventListener('visibilitychange', clear); };
  }, [controls]);

  function closeIntroduction() {
    setNpc(null);
    container.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    let disposed = false;
    let destroy: (() => void) | undefined;
    const parent = container.current;
    if (!parent) return;

    void import('./createWorld').then(({ createWorld }) => {
      if (disposed) return;
      destroy = createWorld(parent, (event) => {
        if (disposed) return;
        if (event.type === 'world.ready') {
          setStatus('Остров загружен. Нажми на мир или выбери его клавишей Tab. WASD или стрелки — движение, E — знакомство с NPC.');
          setReady(true);
        } else if (event.type === 'world.interact') {
          setNpc(event.npc);
        } else {
          setStatus(event.message);
          setReady(false);
        }
      }, controls);
    }).catch(() => {
      if (!disposed) setStatus('Не удалось загрузить сцену. Обнови страницу; если ошибка повторяется, сообщи о ней.');
    });

    return () => { disposed = true; destroy?.(); };
  }, [controls]);

  return (
    <div className="world-surface">
      <div ref={container} className="world-canvas" role="group" tabIndex={0}
        aria-label="Игровой мир. WASD или стрелки — движение. E — взаимодействие рядом с NPC. Tab — выйти из мира."
        onPointerDown={() => container.current?.focus({ preventScroll: true })}
        onFocus={() => controls.setFocused(true)} onBlur={() => controls.setFocused(false)}
        onKeyDown={(event) => { if (controls.keyDown(event.code, event.repeat)) event.preventDefault(); }}
        onKeyUp={(event) => controls.keyUp(event.code)} />
      <p className={ready ? 'sr-only' : 'world-status'} role="status">{status}</p>
      <span className="scene-caption" aria-hidden="true">ЛОГОС <span>·</span> ЮЖНЫЙ БЕРЕГ</span>
      {blocked && <p className="world-pause">Редактор открыт · движение приостановлено</p>}
      {npc && <section className="npc-introduction" role="dialog" aria-labelledby="npc-name" onKeyDown={(event) => { if (event.key === 'Escape') { event.stopPropagation(); closeIntroduction(); } }}>
        <p className="eyebrow">{npc.role}</p><h2 id="npc-name">{npc.name}</h2><p>{npc.greeting}</p>
        <button ref={closeButton} className="primary-button" onClick={closeIntroduction}>Продолжить исследование <span aria-hidden="true">↗</span></button>
      </section>}
    </div>
  );
}
