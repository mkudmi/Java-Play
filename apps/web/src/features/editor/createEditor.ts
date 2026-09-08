import * as monaco from 'monaco-editor/editor/editor.api.js';
import 'monaco-editor/languages/definitions/java/register.js';
import EditorWorker from 'monaco-editor/editor/editor.worker.js?worker';

self.MonacoEnvironment = { getWorker: () => new EditorWorker() };

export function createEditor(container: HTMLElement, value: string, onChange: (value: string) => void) {
  monaco.editor.defineTheme('javaplay', {
    base: 'vs-dark', inherit: true, rules: [],
    colors: { 'editor.background': '#152e35', 'editorLineNumber.foreground': '#67848b', 'editor.lineHighlightBackground': '#1a363e' },
  });
  const model = monaco.editor.createModel(value, 'java');
  const editor = monaco.editor.create(container, {
    model, theme: 'javaplay', automaticLayout: true,
    ariaLabel: 'Редактор Java. Выполнение кода пока недоступно. Escape, затем Tab — выйти из редактора.',
    fontSize: 15, lineHeight: 26, tabSize: 4,
    minimap: { enabled: false }, scrollBeyondLastLine: false,
    padding: { top: 20, bottom: 20 },
    quickSuggestions: false, wordBasedSuggestions: 'off',
    stickyScroll: { enabled: false },
  });
  const subscription = model.onDidChangeContent(() => onChange(model.getValue()));
  return () => { subscription.dispose(); editor.dispose(); model.dispose(); };
}
