import React from "react";
import marked from "marked";
import prism from "prismjs";

import "./MarkdownPreviewer.css";

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