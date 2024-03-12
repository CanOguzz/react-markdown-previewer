import React from "react";
import Prism from "prismjs";
import Marked, { marked } from "marked";
import "./MarkdownPreviewer.css";

const defaultContent = `
![Dwinatech Logo](https://avatars.githubusercontent.com/u/64172912?v=4)

# Hello, 
## About me
### I'm Can, a newly graduated computer engineer who previously worked in the computer games industry.


\`<title>Welcome to my Markdown Previewer</title>\`

\`\`\`
const SayHello = (name) => {
    return conole.log(\`Hello, \${name}\`);
}
\`\`\`

**Some bold text**

[Visit Github Profile](https://github.com/CanOguzz)

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
