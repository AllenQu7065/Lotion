import React from 'react'
import Note from './Note'

export default function NotesList({notes}) {

    return (
      notes.map(note =>{
        return <Note key={note.id} note = {note} />
      })
    );
  }