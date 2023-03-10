import React, { useState, useRef, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useOutletContext, Link, useParams, useNavigate } from "react-router-dom";

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


function MainView() {

    const [notes, setNotes, activeNote, setActiveNote] = useOutletContext();

    const { id } = useParams();

    const navigate = useNavigate();

    const onDeleteNote = (idToDelete) =>{
      const answer = window.confirm("Are you sure?");
      if (answer) {
          setNotes(notes.filter((note) => note.id !== idToDelete))
      }
      navigate(`/notes`)
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
              <input type="text" id="title" readOnly={true} value={theActiveNote.title} onChange={(e) => onEditTitle(e.target.value)} />
              <input id="time" type="datetime-local" readOnly={true}  value={(formatDate(theActiveNote.lastModified))} onChange={onEditTime} />
            </div>
            <Link to={`/notes/{id}/edit`} className="main-header-save" > Edit </Link>
            <div className="main-header-delete" onClick={() => onDeleteNote(theActiveNote.id)} > Delete </div>
          </div>
          <p dangerouslySetInnerHTML={{__html: value}} ></p>
        </div>
    )
    
  };
  
  export default MainView;