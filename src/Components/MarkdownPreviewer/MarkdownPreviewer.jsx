import React from "react";
import Prism from "prismjs";
import Marked, { marked } from "marked";
import "./MarkdownPreviewer.css";

const defaultContent = `
![Dwinatech Logo](https://yt3.ggpht.com/ytc/AKedOLRCB8l9dwq0qVxZIb7C7b1G5lvYlFIYzymD1Dkx=s176-c-k-c0x00ffffff-no-rj)

# Hello, 
## You'r welcom at
### DwinaTech Channel


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My Channel](https://www.youtube.com/channel/UCSS0kFyF7KWjE19Rj9PgNQA)

> Block Quot

1. First list item
2. Second list item
`;

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};
const Editor = ({ content, handleTextareaChange }) => (
  <textarea id="editor" value={content} onChange={handleTextareaChange} />
);

const Previewer = ({ content }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer }),
    }}
  ></div>
);

export const MarkdownPreviewer = () => {
  const [content, setContent] = React.useState(defaultContent);

  const handleTextareaChange = (e) => {
    setContent(e.target.value);
  };
  return (
    
      <div className="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
      </div>
  );
};

export default MarkdownPreviewer;
