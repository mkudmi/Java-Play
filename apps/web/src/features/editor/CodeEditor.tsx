import { useEffect, useRef, useState } from 'react';

const initialCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Привет, Логос!");
    }
}`;

export function CodeEditor() {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Загружаем редактор…');

  useEffect(() => {
    let disposed = false;
    let destroy: (() => void) | undefined;
    const parent = container.current;
    if (!parent) return;

    void import('./createEditor').then(({ createEditor }) => {
      if (disposed) return;
      destroy = createEditor(parent, initialCode, () => {
        setStatus('Пример изменён. Изменения временные: при закрытии панели они сбросятся.');
      });
      setStatus('Редактор готов. Изменения временные: при закрытии панели они сбросятся.');
    }).catch(() => {
      if (!disposed) setStatus('Не удалось загрузить редактор. Обнови страницу и попробуй снова.');
    });
    return () => { disposed = true; destroy?.(); };
  }, []);

  return <>
    <div ref={container} className="code-editor" />
    <div className="editor-footer"><p role="status">{status}</p><span>Java · пример без выполнения</span></div>
  </>;
}
