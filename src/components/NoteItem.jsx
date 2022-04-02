import React,{useContext} from 'react'

//import the noteContext 
import noteContext from '../context/notes/notesContext'
function NoteItem({note,updateNoteCompo}) {
    const {title,description,tag}=note;
    const noteCotextData=useContext(noteContext);
    const {deleteNote,setShowMessage,openAlertModal,closeModalAfter2Seconds,setIsModalOpen}=noteCotextData;
    const deleteNoteAndShowAlert=(id)=>{

        deleteNote(id);
        setShowMessage('Note deleted Successfully','success');
        openAlertModal();
        closeModalAfter2Seconds();


    }


   
  return (
    <div className='col-md-4'>
        <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
            <p className="card-text">{description}</p>
            <i className="fa-solid fa-trash-can mx-2" onClick={()=>deleteNoteAndShowAlert(note._id)}></i>
            <i className="fa-solid fa-edit mx-2  " type="button"  onClick={()=>updateNoteCompo(note)}></i>
        </div>
        </div>
    </div>
  )
}

export default NoteItem