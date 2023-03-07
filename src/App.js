import React, { useState } from "react";
import NotesList from './NotesList'

function App() {
  const [notes] =  useState([{id: 1, name: "Notes 1", complete: true}])
  
  return (
    <>
      <h1>Lotion Project</h1>
      <NotesList notes={notes}/>
      <input type="text" />
      <button>Add Notes</button>
      <button>Clear Notes</button>
      <div>0 left notes</div>
    </>
  );
}

export default App;
