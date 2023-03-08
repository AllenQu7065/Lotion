import React, { useState, useRef, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Main() {
    const [value, setValue] = useState('');

    return (
        <div className="main">
            <input type="text" id="title" placeholder="Untitled"/>
            <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Your Note Here..." />
        </div>
    )
  };
  
  export default Main;