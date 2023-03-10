import { useNavigate } from "react-router-dom";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

function Side({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {

  const navigate = useNavigate();

  const getIndex = (id) => {
    var num = notes.findIndex((note) => note.id === id);
    return num + 1;
  }

  const twoFunc = (id) =>{
    setActiveNote(id);
    var num = getIndex(id);
    navigate((`/notes/`+num))
  }


    return (
      <div className="sidebar">
        <div className="sidebar-header">
            <h1>Notes</h1>
            <div className="sidebar-header-add" onClick={onAddNote}>+</div>
        </div>
        <div className="sidebar-notes">
          {notes.map((note) => (
            <div className={`sidebar-note ${note.id === activeNote && "active"}`} onClick={() => twoFunc(note.id)}>
                <div className="sidebar-note-title">
                    <strong className="sidebar-note-title-strong">{note.title}</strong>
                    <div className="sidebar-note-title-delete"onClick={() => onDeleteNote(note.id)}>Delete</div>
                </div>
                <td className="sidebar-note-sub" dangerouslySetInnerHTML={{__html: note.body.substr(0, 100)}} />
                <small className="note-date">
                   Last modified [{new Date(note.lastModified).toLocaleDateString("en-US", options)}] 
                </small>
            </div>
          ))}
        </div>

      </div>
    )
  };
  
  export default Side;