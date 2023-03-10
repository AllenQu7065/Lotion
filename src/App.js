import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route, useParams, useOutletContext } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Layout from "./Layout";
import Main from "./Main";
import MainView from "./MainView";



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/notes" element={<MainView />}></Route>
          <Route path="/notes/:id" element={<MainView />}></Route>
          <Route path="/notes/:id/edit" element={<Main />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
       
  </> 

  );
}

export default App;
