
import React,{useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import notesContext from '../context/notes/notesContext';
const About = () => {

  const history=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('authToken')){
      history('/');
    }
  })
  const data=useContext(notesContext);
  const {userAuthToken}=data;
  return (
    <>
    {userAuthToken ? <div>About</div>:<div><h3>Please Login to see the about page!</h3></div> }
    </>
    
  )
}

export default About