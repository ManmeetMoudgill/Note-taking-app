
import React,{useContext} from 'react'
import notesContext from '../context/notes/notesContext'
const About = () => {
  const data=useContext(notesContext);
  console.log(data);
  return (
    <div>About</div>
  )
}

export default About