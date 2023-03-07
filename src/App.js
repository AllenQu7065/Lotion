import React, { useState } from "react";

function App() {
  const [notes] =  useState([])
  
  return (
    <>
      <h1>Lotion Project</h1>
      <NotesList />
      <input type="text" />
      <button>Add Notes</button>
      <button>Clear Notes</button>
      <div>0 left notes</div>
    </>
  );
}

export default App;
