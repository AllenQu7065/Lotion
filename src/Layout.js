import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import { Outlet } from "react-router-dom";
import Side from "./Side";


function Layout() {

    const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);

    
    const [activeNote, setActiveNote] = useState(false);

    const [visible, setVisible] = useState(true);

    const navigate = useNavigate();

    const toggleVisible = () =>{
        setVisible(!visible)
    }

    const onAddNote = () =>{
        const newNote = {
            id: uuidv4(),
            title: "Untitiled Note",
            body: "",
            lastModified: Date.now("en-US"),
        };

        setNotes([newNote, ...notes])
        setActiveNote(newNote.id);
        navigate('/notes/1')
    };
    
    const onDeleteNote = (idToDelete) =>{
        const answer = window.confirm("Are you sure?");
        if (answer) {
            setNotes(notes.filter((note) => note.id != idToDelete))
            navigate('/notes');
        }
    }


    return (
        <>
            <div id="header">
                <div id="Sidebar" className="Sidebar" onClick={toggleVisible}><h2>&#9776;</h2></div>
                <div id="titlebox">
                    <h1 id="title">Lotion</h1>
                    <p id="subtitle">Like Notion But Worse</p>
                </div>
                <div id="empty"></div>
            </div>

            <div id="content">
                {visible && <div id="noteslist">
                    <Side 
                        notes={notes}  
                        onAddNote={onAddNote} 
                        onDeleteNote={onDeleteNote} 
                        activeNote={activeNote}
                        setActiveNote={setActiveNote}
                    />
                </div>}
                <div id="notes">
                    <Outlet context={[notes, setNotes, activeNote]}/>
                </div>
            </div>
        </>
    )
  };
  
  export default Layout;