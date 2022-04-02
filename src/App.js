
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


//import about component from components folder
import About from './components/About';

//impèort Home component from  components folder
import Home from './components/Home';

//import the navbar from the components folder
import Navbar from './components/Navbar';


//import the newState from the notesContext file
import NoteState from './context/notes/noteState.js';
import Alert from './components/Alert';




function App() {
 
 
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert/>
      
        <div className='container'>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
    </Router>
    </NoteState>
    </>

  );
}

export default App;
