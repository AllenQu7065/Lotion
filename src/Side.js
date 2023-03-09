import React, { useState, useRef, useEffect } from "react";

function Side({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {

    return (
      <div className="sidebar">
        <div className="sidebar-header">
            <h1>Notes</h1>
            <div className="sidebar-header-add" onClick={onAddNote}>+</div>
        </div>
        <div className="sidebar-notes">
          {notes.map((note) => (
            <div className={`sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                <div className="sidebar-note-title">
                    <strong className="sidebar-note-title-strong">{note.title}</strong>
                    <div className="sidebar-note-title-delete"onClick={() => onDeleteNote(note.id)}>Delete</div>
                </div>
                <td className="sidebar-note-sub" dangerouslySetInnerHTML={{__html: note.body.substr(0, 100)}} />
                <small className="note-date">
                   Last modified [{new Date(note.lastModified).toLocaleDateString("en-GB", {hour: "2-digit", minute: "2-digit"})}] 
                </small>
            </div>
          ))}
        </div>

      </div>
    )
  };
  
  export default Side;