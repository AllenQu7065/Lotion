import React from 'react'

export default function Note({note}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={note.complete} />
                {note.name}
            </label>
            
        </div>
    )
}