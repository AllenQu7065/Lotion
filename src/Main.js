import React, { useState, useRef, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Main({ activeNote, onUpdateNote,}) {
    const [value, setValue] = useState(); 

    const onEditTitle = (value) => {
        onUpdateNote({
          ...activeNote,
          title: value,
          lastModified: Date.now(),
        });
    };
    const onEditBody = () => {

        const newBody = value
        onUpdateNote({
          ...activeNote,
          body: value,
          lastModified: Date.now(),
        });
        setValue(value)
    };

    if (!activeNote) return <div className="no-active-note">No Active Note</div>;

    
    return (
        <div className="main">
            <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditTitle(e.target.value)} />
            <ReactQuill theme="snow" value={value}  defaultValue={activeNote.body} onChange={setValue} />;
            <button id="save" onClick={onEditBody} > Save Notes </button>
        </div>
    )
    
  };
  
  export default Main;