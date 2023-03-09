import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route, useParams, useOutletContext } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Outlet } from "react-router-dom";
import Side from "./Side";
import Main from "./Main";

function Layout() {

    const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);

    const [activeNote, setActiveNote] = useState(false);

    const onAddNote = () =>{
        const newNote = {
            id: uuidv4(),
            title: "Untitiled Note",
            body: "",
            lastModified: Date.now("en-US"),
        };

        setNotes([newNote, ...notes])
        setActiveNote(newNote.id);
    };
    
    const onDeleteNote = (idToDelete) =>{
        const answer = window.confirm("Are you sure?");
        if (answer) {
            setNotes(notes.filter((note) => note.id != idToDelete))
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
        console.log(activeNote.lastModified)
        return notes.find((note) => note.id === activeNote);
        
    };

    return (
        <>
            <div id="header">
                <div id="Sidebar" className="Sidebar"><h2>&#9776;</h2></div>
                <div id="titlebox">
                    <h1 id="title">Lotion</h1>
                    <p id="subtitle">Like Notion But Worse</p>
                </div>
                <div id="empty"></div>
            </div>

            <div id="content">
                <div id="noteslist">
                    <Side 
                        notes={notes}  
                        onAddNote={onAddNote} 
                        onDeleteNote={onDeleteNote} 
                        activeNote={activeNote}
                        setActiveNote={setActiveNote}
                    />
                </div>
                <div id="notes">
                    <Main
                        activeNote={getActiveNote()}
                        onUpdateNote={onUpdateNote} 
                        onDeleteNote={onDeleteNote}
                    />
                </div>
            </div>
        </>
    )
  };
  
  export default Layout;