import React,{useContext, useEffect,useState} from "react";
import { Link,useLocation } from "react-router-dom";
import notesContext from '../context/notes/notesContext';

const Navbar = () => {
  const location=useLocation();
  const notesContextData=useContext(notesContext);
  const {userAuthToken,setUserAuthToken}=notesContextData;
  const [currentLocation,setCurrentLocation]=useState('');
 

  useEffect(()=>{
    setCurrentLocation(location.pathname);
  })
  const logout=()=>{
    localStorage.removeItem('authToken');
    setUserAuthToken('');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          
          {userAuthToken && <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logout}>Logout</button>}
          {!userAuthToken && currentLocation!=='/login' && <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Login</Link>}
          <Link className="btn btn-secondary btn-small mx-1" to="/signup">Sign up</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
