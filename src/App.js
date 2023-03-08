import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route, useParams, useOutletContext } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Layout from "./Layout";
import Main from "./Main";



const LOCAL_STORAGE_KEY = 'lotion'

function App() {

  /* const [value, setValue] = useState('');

  const { userId } = useParams(); */

  /* const [notes, setNotes] = useState([])
  const notesNameRef = useRef()

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedNotes)setNotes(prevNotes => [...prevNotes, ...storedNotes])
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
  }, [notes])

  function toggleNotes(id){
    const newNotes = [...notes]
    const note = newNotes.find(note => note.id === id)
    note.complete = !note.complete
    setNotes(newNotes)
  }

  function handleAddNotes(e) {
    const name = notesNameRef.current.value
    if (name === ''){
      return
    } 
    setNotes(prevNotes => {
      return [...prevNotes, { id: uuidv4(), name: name, complete: false}]
    })
    notesNameRef.current.value = null
  }

  function handleClearNotes() {
    const newNotes = notes.filter(note => !note.complete)
    setNotes(newNotes)
  } */
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

          {/* <input ref={notesNameRef} type="text" />
          <button onClick={handleAddNotes}>Add Notes</button>
          <button onClick={handleClearNotes}>Clear Notes</button>
          <div>{notes.filter(note => !note.complete).length} left notes</div> */}
       
  </> 

  );
}

export default App;
