import React, { useState } from 'react';
import { marked } from 'marked';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import Prism from 'prismjs';
import '../App.css';

// Konfigurasi untuk pustaka marked
marked.setOptions({
  highlight: (code) => {
    // Menyoroti kode menggunakan Prism
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

// Contoh teks Markdown awal
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
  - With different indentation levels.
  - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const App = () => {
  // State untuk teks Markdown, maximize editor, dan maximize previewer
  const [markdown, setMarkdown] = useState(placeholder);
  const [editorMaximized, setEditorMaximized] = useState(false);
  const [previewMaximized, setPreviewMaximized] = useState(false);

  // Mengubah teks Markdown saat ada perubahan pada textarea
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  // Mengatur status maximize editor
  const handleEditorMaximize = () => {
    setEditorMaximized(!editorMaximized);
  };

  // Mengatur status maximize previewer
  const handlePreviewMaximize = () => {
    setPreviewMaximized(!previewMaximized);
  };

  // Mengatur kelas CSS berdasarkan status maximize
  const classes = editorMaximized
    ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
    : previewMaximized
      ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
      : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

  return (
    <div>
      {/* Render Komponen Toolbar dan Editor */}
      <div className={classes[0]}>
        <Toolbar icon={classes[2]} onClick={handleEditorMaximize} text="Editor" />
        <Editor markdown={markdown} onChange={handleChange} />
      </div>
      {/* Render Komponen Toolbar dan Penampil */}
      <div className={classes[1]}>
        <Toolbar
          icon={classes[2]}
          onClick={handlePreviewMaximize}
          text="Previewer"
        />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;