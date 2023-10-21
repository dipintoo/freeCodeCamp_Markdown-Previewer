import React from 'react';

const Editor = ({ markdown, onChange }) => {
  return (
    <textarea id="editor" onChange={onChange} type="text" value={markdown} />
  );
};

export default Editor;
