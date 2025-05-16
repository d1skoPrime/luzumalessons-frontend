import Editor from '@monaco-editor/react';
import { emmetCSS, emmetHTML } from 'emmet-monaco-es';
import * as monaco from 'monaco-editor';
import { useEffect, useState } from 'react';

const initialCode = {
  html: '<div class="container">\n  <ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</div>',
  css: 'body { background-color: #f0f0f0; font-family: sans-serif; }',
  js: "console.log('Hello from JS!');",
};

const Coding = () => {
  const [language, setLanguage] = useState<'html' | 'css' | 'js'>('html');
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  // Enable Emmet
  useEffect(() => {
    emmetHTML(monaco);
    emmetCSS(monaco);

    // Monaco Editor configuration with correct theme
    monaco.editor.defineTheme('vs-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'FF0000' }, // Example rule for keywords
        { token: 'variable', foreground: '00FF00' }, // Example rule for variables
        // Don't include background here
      ],
      colors: {
        'editor.background': '#1D1E24', // Set background color here
      },
    });
  }, []);

  // Update live preview
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullHtml = `
        <html>
          <head><style>${code.css}</style></head>
          <body>
            ${code.html}
            <script>${code.js}<\/script>
          </body>
        </html>
      `;
      setSrcDoc(fullHtml);
    }, 300);
    return () => clearTimeout(timeout);
  }, [code]);

  const handleEditorChange = (value: string | undefined) => {
    if (!value) return;
    setCode({ ...code, [language]: value });
  };

  return (
    <div className="flex flex-col h-screen bg-[#1D1E24] text-white top-22 relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="bg-[#2A2B3A] text-white px-3 py-1 rounded"
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option>
          </select>
        </div>
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="bg-teal-600 px-3 py-1 rounded text-sm"
        >
          {showHelp ? 'Hide Help' : 'Show Help'}
        </button>
      </div>

      {/* Help Panel */}
      {showHelp && (
        <div className="bg-[#2A2B3A] p-20 text-sm max-h-40 overflow-auto">
          <h2 className="text-teal-400 font-semibold mb-2">Emmet Cheatsheet</h2>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              <code>{'div.container>ul>li*3'}</code> → 3 list items in a div
            </li>
            <li>
              <code>{'section>h1{Title}+p{Text}'}</code> → section with heading
              and paragraph
            </li>
            <li>
              <code>{'a[href="#"]{Click me}'}</code> → anchor link
            </li>
            <li>
              <code>{'input:password'}</code> → password input
            </li>
            <code>{'form:post'}</code> → POST form
          </ul>
        </div>
      )}

      {/* Editor & Preview */}
      <div className="flex flex-1">
        {/* Left: Editor */}
        <div className="w-1/2 border-r border-gray-700">
          <Editor
            height="100%"
            defaultLanguage={language}
            language={language}
            value={code[language]}
            onChange={handleEditorChange}
            theme="vs-dark"
          />
        </div>

        {/* Right: Preview */}
        <div className="w-1/2 bg-white">
          <iframe
            srcDoc={srcDoc}
            title="Live Preview"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Coding;
