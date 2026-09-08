import { useEffect, useRef, useState } from 'react';

export function WorldCanvas() {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Загружаем остров…');
  const [ready, setReady] = useState(false);

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
          setStatus('Остров загружен. Передвижение появится в следующей части.');
          setReady(true);
        } else {
          setStatus(event.message);
          setReady(false);
        }
      });
    }).catch(() => {
      if (!disposed) setStatus('Не удалось загрузить сцену. Обнови страницу; если ошибка повторяется, сообщи о ней.');
    });

    return () => { disposed = true; destroy?.(); };
  }, []);

  return (
    <div className="world-surface">
      <div ref={container} className="world-canvas" role="img" aria-label="Деревня Начала: зелёный остров, тропинка к маяку и домик у моря. Статичная стартовая сцена." />
      <p className={ready ? 'sr-only' : 'world-status'} role="status">{status}</p>
      <span className="scene-caption" aria-hidden="true">ЛОГОС <span>·</span> ЮЖНЫЙ БЕРЕГ</span>
    </div>
  );
}
