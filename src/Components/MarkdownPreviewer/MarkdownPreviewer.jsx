import React from "react";
import Prism from "prismjs"
import  Marked, { marked }  from "marked";


import "./MarkdownPreviewer.css";


marked.setOptions({ 
  breaks: true,
  highlight: function(code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  } 
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) { 
  return `<a target="_blank" href="${href}">${text}</a>`; 
}
const Editor = ({content, handleTextareaChange}) => <textarea id="editor" value={content} onChange={handleTextareaChange}/>;

const Previewer = ({content}) => <div id="previewer">{content}</div>;
export const MarkdownPreviewer = () => {
  
  const[content, setContent] = React.useState("testet");
  
  const handleTextareaChange = (e) => {
    setContent(e.target.value);
  };
    return (
    <div>
        <div className="main"></div>
        <Editor content={content} handleTextareaChange={handleTextareaChange}/>
        <Previewer content={content}/>
    </div>
  )
}

export default MarkdownPreviewer;