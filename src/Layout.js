import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route, useParams, useOutletContext } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Outlet } from "react-router-dom";
import Side from "./Side";

function Layout() {

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
                    <Side />
                </div>
                <div id="notes">
                    <Outlet />
                </div>
            </div>
        </>
    )
  };
  
  export default Layout;