import React,{useContext,useState} from 'react'
import notesContext from '../context/notes/notesContext'
function AddNote() {
    const noteContextData=useContext(notesContext);
    const {addnote,setShowMessage,closeAlertModal,openAlertModal}=noteContextData;

    const [note,setNote]=useState({
        title:'',
        description:'',
        tag:''
    });
    

    
    const handleTheAddNote=(e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag);
        setShowMessage('Note Added Successfully','success');
        openAlertModal();
        setTimeout(()=>{
            closeAlertModal();
        },3000)
        setNote({
            title:'',
            description:'',
            tag:''
        });
       
    }

    const changeText=(e)=>{
        setNote(()=>{
            return {
                ...note,
                [e.target.name]:e.target.value
            }
        })
    }

   
  return (
    <div className="container my-3">
      <h1 className=''>Add a note</h1>
        <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input  value={note.title}  name="title" onChange={changeText} type="text" className="form-control" placeholder='Insert the title' id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Decription</label>
          <input value={note.description} name="description"  onChange={changeText} type="text" className="form-control" placeholder='Insert the description' id="description"/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input  value={note.tag} type="text" name="tag" onChange={changeText} className="form-control" placeholder='Insert the placeholder' id="tag"/>
        </div>
        <button type="submit" onClick={handleTheAddNote} className="btn btn-primary">Add Note</button>
      </form>
    </div>
  )
}

export default AddNote