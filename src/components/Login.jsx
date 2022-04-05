
import React,{useState,useContext,useEffect} from 'react'
import notesContext from '../context/notes/notesContext'
//import use history from react-router-dom
import {useNavigate} from 'react-router-dom';

function Login() {

    var baseUrl="http://localhost:80";
    const history = useNavigate();
    const noteContextData=useContext(notesContext);
    const {userAuthToken,userAlreadyLoggedIn,setUserAuthToken,setShowMessage,openAlertModal,closeModalAfter2Seconds}=noteContextData;
    
    
    
   
    useEffect(()=>{
        userAlreadyLoggedIn();
        if(localStorage.getItem("authtoken")){
            history('/');
        }
        
    },[])

   
    const [userLogin,setUserLogin]=useState({
        email:'',
        password:''
    })

    const userInfoChange=(e)=>{
        setUserLogin({
            ...userLogin,
            [e.target.name]:e.target.value
        })
    }



    const login=async(e)=>{
        e.preventDefault();
       
        try {
            const response = await fetch(`${baseUrl}/api/v1/auth/login`, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },body:JSON.stringify({
                  email:userLogin.email,
                  password:userLogin.password
              })
            });
            const dataBack=await response.json(); // parses JSON response into native JavaScript objects
            
            if(dataBack.success==true){
                setUserAuthToken(dataBack.authToken);
                localStorage.setItem('authToken',dataBack.authToken);
                setShowMessage('You are logged in successfully','success');
                openAlertModal();
                closeModalAfter2Seconds();
                history('/');


            }
            
            if(dataBack.error){
                setShowMessage(dataBack.error,'danger');
                openAlertModal();
                closeModalAfter2Seconds();
            }
            
        } catch (error) {
           alert(error.message);
        }

        setUserLogin({
            email:'',
            password:''
        })
    }

    
    return (
        <div>
            {userAuthToken?<div className="container"><h2>User already logged In</h2></div>:<div className='container mt-3'>
                <h3>Login to Inotebook app</h3>
                <form onSubmit={login}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={userLogin.email}  onChange={userInfoChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={userLogin.password} onChange={userInfoChange}  name="password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <button type="submit"  className="btn btn-primary">Login</button>
                    
                </form>
            </div>}
            
        </div>
    )
}

export default Login