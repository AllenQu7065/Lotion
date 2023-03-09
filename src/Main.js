import React, { useState, useRef, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useOutletContext } from "react-router-dom";

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


function Main() {

    const [notes, setNotes, activeNote, setActiveNote] = useOutletContext();

    const onDeleteNote = (idToDelete) =>{
      const answer = window.confirm("Are you sure?");
      if (answer) {
          setNotes(notes.filter((note) => note.id !== idToDelete))
      }
  }

  const onUpdateNote = (updatedNote) => {
      const updatedNotesArr = notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
  
        return note;
      });
  
      setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
      if (activeNote === false){
          return null
      }
      if (notes === null){
          return null
      }
      return notes.find((note) => note.id === activeNote);
    };

    var theActiveNote = getActiveNote()

    const useStateCheck = () => {
      if (!theActiveNote){
        return ''
      }
      else{
        console.log(theActiveNote.body)
        return theActiveNote.body
      }
    }
   
    const [value, setValue] = useState(useStateCheck)
    const [prevID, setPrevID] = useState('')

    const onEditTitle = (value) => {
        onUpdateNote({
          ...theActiveNote,
          title: value,
          lastModified: Date.now("en-US"),
        });
    };

    const onEditBody = () => {
        onUpdateNote({
          ...theActiveNote,
          body: value,
          lastModified: Date.now("en-US"),
        });
    };

    const onEditTime = (e) => {
      var localDate = new Date(e.target.value);
      var offset = (new Date()).getTimezoneOffset() * 60000;
      const date = new Date(localDate + offset);
      onUpdateNote({
        ...theActiveNote,
        lastModified: date,
      });
  };

    const checkValue = () => {
      if(!theActiveNote){
        return
      }
      if (theActiveNote.id === prevID){
        return
      }
      setValue(theActiveNote.body)
      setPrevID(theActiveNote.id)
    }

    useEffect(() => {
      checkValue()
      theActiveNote = getActiveNote()
    });
    

    if (!theActiveNote) return <div className="no-active-note">Select a note, or create a new one.</div>;

    return (
        <div className="main">
          <div className="main-header">
            <div className="main-header-text">
              <input type="text" id="title" value={theActiveNote.title} onChange={(e) => onEditTitle(e.target.value)} />
              <input id="time" type="datetime-local"  value={(formatDate(theActiveNote.lastModified))} onChange={onEditTime} />
            </div>
            <div className="main-header-save" onClick={onEditBody} > Save </div>
            <div className="main-header-delete" onClick={() => onDeleteNote(theActiveNote.id)} > Delete </div>
          </div>
          <ReactQuill theme="snow"  value={value} defaultValue={theActiveNote.body} onChange={setValue} placeholder={"Type something here..."} />

        </div>
    )
    
  };
  
  export default Main;