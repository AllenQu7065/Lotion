import React, { useState, useRef, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Layout from "./Layout"

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const formatDate = (when) => {
  var offset = (new Date()).getTimezoneOffset() * 60000;
  const formatted = new Date(when - offset).toISOString("en-US").slice(0, -8);
  if (formatted === "Invalid Date") {
      return "";
  }
  return formatted;
};


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
          lastModified: Date.now("en-US"),
        });
    };

    const onEditBody = () => {
        onUpdateNote({
          ...activeNote,
          body: value,
          lastModified: Date.now("en-US"),
        });
    };

    const onEditTime = (e) => {
      var localDate = new Date(e.target.value);
      var offset = (new Date()).getTimezoneOffset() * 60000;
      const date = new Date(localDate + offset);
      onUpdateNote({
        ...activeNote,
        lastModified: date,
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
            <div className="main-header-text">
              <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditTitle(e.target.value)} />
              <input id="time" type="datetime-local"  value={(formatDate(activeNote.lastModified))} onChange={onEditTime} />
            </div>
            <div className="main-header-save" onClick={onEditBody} > Edit </div>
            <div className="main-header-delete" onClick={() => onDeleteNote(activeNote.id)} > Delete </div>
          </div>
          <ReactQuill theme="snow"  value={value} defaultValue={activeNote.body} onChange={setValue} placeholder={"Type something here..."} />

        </div>
    )
    
  };
  
  export default Main;