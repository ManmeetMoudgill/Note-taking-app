import React,{useContext,useEffect, useState} from 'react'
import Notes from './Notes'
import notesContext from '../context/notes/notesContext'

const Home = () => {
  const notesContextData=useContext(notesContext);
  const  {userAuthToken,userAlreadyLoggedIn}=notesContextData;
  
  useEffect(()=>{
    userAlreadyLoggedIn();
  },[])

  return (
    <>
    {userAuthToken?<Notes/>:<div className='container'><h2>Login to add and see notes</h2></div>}
    </>
  )
}

export default Home