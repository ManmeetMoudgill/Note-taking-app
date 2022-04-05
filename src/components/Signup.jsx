import React, { useState, useContext, useEffect } from 'react'
import notesContext from '../context/notes/notesContext';
import { useNavigate } from 'react-router-dom';
function Signup() {

  const noteContextData = useContext(notesContext);
  const { userAuthToken, userAlreadyLoggedIn, setUserAuthToken, setShowMessage, openAlertModal, closeModalAfter2Seconds } = noteContextData;

  const baseUrl = "http://localhost:80";
  const [userSignup, setUserSignup] = useState({
    signupemail: '',
    signuppassword: '',
    signupname: ''
  })


  useEffect(() => {
    userAlreadyLoggedIn();
  })
  const navigate = useNavigate();
  const valueChanged = (e) => {
    setUserSignup({
      ...userSignup,
      [e.target.name]: e.target.value
    })
  }

  const signup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/createUser`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }, body: JSON.stringify({
          email: userSignup.signupemail,
          password: userSignup.signuppassword,
          name: userSignup.signupname
        })
      });
      const dataBack = await response.json(); // parses JSON response into native JavaScript objects

      if (dataBack.success == true) {

        setUserAuthToken(dataBack.authToken);
        localStorage.setItem('authToken', dataBack.authToken);
        navigate('/');

      }

      if (dataBack.error) {
        setUserSignup({
          signupemail: '',
          signuppassword: '',
          signupname: ''
        })
        setShowMessage(dataBack.error, 'danger');
        openAlertModal();
        closeModalAfter2Seconds();
      }

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div className='container mt-3'>
      <h2>Create an account to use Inotebook app</h2>
        <form onSubmit={signup}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input name="signupname" minLength={5} value={userSignup.signupname} onChange={valueChanged} type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input name="signupemail"  value={userSignup.signupemail} onChange={valueChanged} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Password"  className="form-label">Password</label>
            <input name="signuppassword" minLength={8} value={userSignup.signuppassword} onChange={valueChanged} type="password" className="form-control" id="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>

    </>
  )
}

export default Signup