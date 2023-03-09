import React, { useState, useRef, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Layout from "./Layout"

function Main({ activeNote, onUpdateNote, onDeleteNote}) {

    const useStateCheck = () => {
      if (!activeNote){
        return ''
      }
      else{
        console.log(activeNote.body)
        return activeNote.body
      }
    }
   
    const [value, setValue] = useState(useStateCheck)
    const [prevID, setPrevID] = useState('')

    const onEditTitle = (value) => {
        onUpdateNote({
          ...activeNote,
          title: value,
          lastModified: Date.now(),
        });
    };

    const onEditBody = () => {
        onUpdateNote({
          ...activeNote,
          body: value,
          lastModified: Date.now(),
        });
    };

    const checkValue = () => {
      if(!activeNote){
        return
      }
      if (activeNote.id === prevID){
        return
      }
      setValue(activeNote.body)
      setPrevID(activeNote.id)
    }

    useEffect(() => {
      checkValue()
    });
    

    if (!activeNote) return <div className="no-active-note">Select a note, or create a new one.</div>;

    return (
        <div className="main">
          <div className="main-header">
            <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditTitle(e.target.value)} />
            <div className="main-header-save" onClick={onEditBody} > Save </div>
            <div className="main-header-delete" onClick={() => onDeleteNote(activeNote.id)} > Delete </div>
          </div>
          <ReactQuill theme="snow"  value={value} defaultValue={activeNote.body} onChange={setValue} placeholder={"Type something here..."} />

        </div>
    )
    
  };
  
  export default Main;