import { useState } from 'react';
import { WorldCanvas } from '../game/WorldCanvas';
import { CodeEditor } from '../features/editor/CodeEditor';

export function App() {
  const [editorOpen, setEditorOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#main" aria-label="JavaPlay — к основному содержимому">
          <span className="brand-mark" aria-hidden="true">J<span>•</span></span>
          <span>JavaPlay<small>ХРАНИТЕЛИ ЯДРА</small></span>
        </a>
        <span className="build-badge"><span aria-hidden="true" /> Исследование острова · M1</span>
      </header>

      <main id="main">
        <section className="intro" aria-labelledby="page-title">
          <div><p className="eyebrow">АРХИПЕЛАГ ЛОГОС / ГЛАВА 01</p>
            <h1 id="page-title">Каждый мир начинается<br />с первого сигнала.</h1>
          </div>
          <p className="intro-copy">Когда-то маяки связывали острова.<br />Теперь их свет ждёт нового хранителя.</p>
        </section>

        <div className="workspace">
          <section className="world-card" aria-labelledby="region-title">
            <div className="world-heading">
              <div><span className="eyebrow">ВАША ПЕРВАЯ ОСТАНОВКА</span><h2 id="region-title">Деревня Начала</h2></div>
              <span className="location-tag">Остров 01</span>
            </div>
            <WorldCanvas blocked={editorOpen} />
            <div className="world-caption"><span className="compass" aria-hidden="true">✦</span><p>Нажми на мир · WASD / стрелки — идти · E — знакомство</p></div>
          </section>

          <aside className="journal" aria-labelledby="journal-title">
            <span className="eyebrow">ЗАПИСКИ ХРАНИТЕЛЯ</span>
            <div className="journal-symbol" aria-hidden="true">⌘</div>
            <h2 id="journal-title">Язык, который<br />оживляет мир</h2>
            <p>Здесь ты будешь писать Java-код, чинить механизмы и возвращать свет островам.</p>
            <div className="stage-note"><span className="note-label">СЕЙЧАС · ИССЛЕДУЙ ОСТРОВ</span><p>Ты на причале. Пройди по тропинке: Ира ждёт у маяка, а Ника — возле мастерской. Подойди ближе и нажми E.</p></div>
            <button className="primary-button" onClick={() => setEditorOpen((open) => !open)} aria-expanded={editorOpen} aria-controls="editor-panel">
              {editorOpen ? 'Свернуть редактор' : 'Открыть редактор'} <span aria-hidden="true">{editorOpen ? '−' : '↗'}</span>
            </button>
            <p className="quiet-note">Пока можно редактировать пример.<br />Запуск кода появится на этапе M3.</p>
          </aside>
        </div>

        <section id="editor-panel" className="editor-panel" hidden={!editorOpen} aria-labelledby="editor-title">
          {editorOpen && <>
            <div className="editor-heading"><div><p className="eyebrow">МАСТЕРСКАЯ КОДА</p><h2 id="editor-title">Первый сигнал</h2></div><span className="file-tab">Main.java</span></div>
            <CodeEditor />
          </>}
        </section>

        <footer className="page-footer"><span>ИССЛЕДУЙ. ПОНИМАЙ. СОЗДАВАЙ.</span><span>JavaPlay · Основа будущего приключения</span></footer>
      </main>
    </div>
  );
}
