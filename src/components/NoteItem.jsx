import React from 'react'

function NoteItem({note}) {
    const {title,description,tag}=note;
  return (
    <div className='col-md-4'>
        <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
            <p className="card-text">{description}</p>
            <i className="fa-solid fa-trash-can mx-2"></i>
            <i className="fa-solid fa-edit mx-2 "></i>
        </div>
        </div>
    </div>
  )
}

export default NoteItem