import React,{useContext,useEffect, useState} from 'react'
import Notes from './Notes'
import notesContext from '../context/notes/notesContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const notesContextData=useContext(notesContext);
  const  {userAuthToken,userAlreadyLoggedIn}=notesContextData;
  
  const navigate=useNavigate();
  useEffect(()=>{
    userAlreadyLoggedIn();
    if(!localStorage.getItem('authToken')){
      navigate('/login');
    }
  },[])

  return (
    <>
    {userAuthToken?<Notes/>:<div className='container'><h2>Login to add and see notes</h2></div>}
    </>
  )
}

export default Home