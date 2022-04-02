import React, { useContext, useEffect, useRef,useState} from 'react'

//import the noteContext 
import noteContext from '../context/notes/notesContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
function Notes() {

  const noteCotextData = useContext(noteContext);
  const { notes, getNotes,updateNote,setShowMessage,openAlertModal,closeModalAfter2Seconds} = noteCotextData;


  const [note,setNote]=useState({
    etitle:'',
    edescription:'',
    etag:''
});


const changeText=(e)=>{
  setNote(()=>{
      return {
          ...note,
          [e.target.name]:e.target.value
      }
  })
}

  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, [])

  const ref = useRef(null);
  const refClose=useRef(null);
  //function for updating the note
  const updateNoteCompo = (note) => {
    ref.current.click();
    setNote({
      etitle: note.title,
      edescription: note.description,
      etag: note.tag,
      id: note._id
    });
  
  }


  const updateNoteApi=(e)=>{
    e.preventDefault();
    refClose.current.click();
    updateNote(note.id,note.etitle,note.edescription,note.etag);
    setShowMessage('Note updated Successfully','success');
    openAlertModal();
    closeModalAfter2Seconds();
  }

  return (
    <div className='my-3'>
      <AddNote />


      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update the Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input   name="etitle" value={note.etitle}  onChange={changeText} type="text" className="form-control" placeholder='Insert the title' id="etitle" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Decription</label>
              <input  name="edescription" value={note.edescription}  onChange={changeText} type="text" className="form-control" placeholder='Insert the description' id="edescription"/>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input   type="text" name="etag" value={note.etag} onChange={changeText}  className="form-control" placeholder='Insert the placeholder' id="etag"/>
            </div>
          </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={updateNoteApi}>Update</button>
            </div>
          </div>
        </div>
      </div>



      <div className="container my-3">
        <h2>Your Notes</h2>
        <div className='row'>

          {notes.length>0 && notes.map((note, id) => {
            return <NoteItem key={id} updateNoteCompo={updateNoteCompo} note={note} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Notes