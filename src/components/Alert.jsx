import React,{useContext}from 'react'
import notesContext from '../context/notes/notesContext';
function Alert() {
    const notesContextData=useContext(notesContext);
    const {messageState,isAlertOpen}=notesContextData;
    const {message,type}=messageState;
    return (
        <>
        {isAlertOpen&&<div className={`alert alert-${type?type:'success'}`} role="alert">
        {message}
        </div>}
        </>
    )
}

export default Alert