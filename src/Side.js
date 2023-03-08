function Side() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
            <h1>Notes</h1>
            <button>Add</button>
        </div>
        <div className="sidebar-notes">
            <div className="sidebar-note">
                <div className="sidebar-note-title">
                    <strong>TITLE</strong>
                    <button>Delete</button>
                </div>
                <p>Note Preview</p>
                <small className="note-date">
                   Last modified [date] 
                </small>
            </div>
        </div>

      </div>
    )
  };
  
  export default Side;