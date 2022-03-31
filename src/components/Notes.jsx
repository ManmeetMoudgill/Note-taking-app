import React,{useContext} from 'react'

//import the noteContext 
import noteContext from '../context/notes/notesContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
function Notes() {

    const noteCotextData=useContext(noteContext);
    const {notes,setNotes}=noteCotextData;

  return (
    <div className='my-3'>
        <AddNote/>
        <div className="container my-3">
        <h2>Your Notes</h2>
        <div className='row'>

            {notes.map((note,id)=>{
                return <NoteItem key={id} note={note}/>
            })}
        </div>    
        </div>
    </div>
  )
}

export default Notes