import React from 'react';
import { marked } from 'marked';

const Preview = ({ markdown }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown)
      }}
      id="preview"
    />
  );
};

export default Preview;
