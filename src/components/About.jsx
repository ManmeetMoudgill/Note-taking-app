
import React,{useContext} from 'react'
import notesContext from '../context/notes/notesContext';
const About = () => {
  const data=useContext(notesContext);
  const {userAuthToken}=data;
  return (
    <>
    {userAuthToken ? <div>About</div>:<div><h3>Please Login to see the about page!</h3></div> }
    </>
    
  )
}

export default About