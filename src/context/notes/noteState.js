import React,{useState} from "react";

//import the notesContext from the notesContext file
import NoteContext from "./notesContext";


var baseUrl="http://localhost:80";
const NoteState=({children})=>{

    //create a function to login the user
    const [userAuthToken,setUserAuthToken]=useState(null);


   
    
    //function to get the notes from a user
    const  getNotes= async ()=>{
         
            // Default options are marked with *
            
            try {
                const response = await fetch(`${baseUrl}/api/v1/notes/getnotes/`, {
                  method: 'get', // *GET, POST, PUT, DELETE, etc.
                  mode: 'cors', // no-cors, *cors, same-origin
                  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                  headers: {
                    'Content-Type': 'application/json',
                    "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOnsiaWQiOiI2MjQwY2UzYWJmZjM4MTNmYzJiYTM2M2EifX0sImlhdCI6MTY0ODg5ODU3OH0.R086pIVhR4vGaWVQB5Iq-7MUMBEC-P_bGPoB0Uw2D74"
    
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  }
                });
                const dataBack=await response.json(); // parses JSON response into native JavaScript objects
                if(dataBack.error){
                    setShowMessage(dataBack.error,'danger');
                    openAlertModal();
                    closeModalAfter2Seconds();
                }
                setNotes(dataBack);
                
            } catch (error) {
               alert(error.message);
            }
          
    }



      //writing some method to update delete and update the notes
      const addnote=async (title,description,tag)=>{

        //API CALL TO ADD THE NOTE
        try {
            const response = await fetch(`${baseUrl}/api/v1/notes/addnote/`, {
               method: 'POST', 
               mode: 'cors', 
               cache: 'no-cache',
               headers: {
                 'Content-Type': 'application/json',
                 "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOnsiaWQiOiI2MjQwY2UzYWJmZjM4MTNmYzJiYTM2M2EifX0sImlhdCI6MTY0ODg5ODU3OH0.R086pIVhR4vGaWVQB5Iq-7MUMBEC-P_bGPoB0Uw2D74"
                 
                 
               },
               body: JSON.stringify({
                   title,
                   description,
                   tag
               })
             });
             const dataBack=await response.json(); // parses JSON response into native JavaScript objects
             if(dataBack.error){
                setShowMessage(dataBack.error,'danger');
                openAlertModal();
                closeModalAfter2Seconds();
            }
             const note={title,description,tag};
             setNotes((prev)=>{
               return [...prev,note];
             })
            
        } catch (error) {
            alert(error.message);
        }


           
              
      }


      //FUNCTION TO CHANGE THE ALERT MESSAGE AND TYPE
      const setShowMessage=(message,type)=>{
            setMessage(()=>{
                return {
                    message,
                    type
                }
            })
      }
     

    const [notes,setNotes]=useState([]);
    const [isAlertOpen,setIsAlertOpen]=useState(false);
    const [messageState,setMessage]=useState({
        message:'',
        type:'',
    });
   





    //FUNCTION TO CLOSE THE ALERT
    const closeAlertModal=()=>{
        setIsAlertOpen(false);
    }

    //FUNCTIO TO OPEN THE ALERT
    const openAlertModal=()=>{
        setIsAlertOpen(true);
    }

    


    //FUNCTION TO DELETE A NOTE
    const deleteNote=async (id)=>{
        

        try {
            //api call here to delete the user note
            const response = await fetch(`${baseUrl}/api/v1/notes/deletenote/${id}`, {
                method: 'DELETE',
                mode: 'cors',
                cache: 'no-cache', 
                headers: {
                  'Content-Type': 'application/json',
                  "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOnsiaWQiOiI2MjQwY2UzYWJmZjM4MTNmYzJiYTM2M2EifX0sImlhdCI6MTY0ODg5ODU3OH0.R086pIVhR4vGaWVQB5Iq-7MUMBEC-P_bGPoB0Uw2D74"
                  
                
                },
              });
              const dataBack=await response.json(); // parses JSON response into native JavaScript objects
              if(dataBack.error){
                setShowMessage(dataBack.error,'danger');
                openAlertModal();
                closeModalAfter2Seconds();
            }
            const newNotes=notes.filter((note)=>{
                return note._id!==id;
            })
            setNotes(newNotes);
            
        } catch (error) {
            alert(error.message);
        }
    
    }


    //FUNCTION TO UPDATE A NOTE
    const updateNote=async (id,title,description,tag)=>{

        try {
            //api call here to update the note
            const response = await fetch(`${baseUrl}/api/v1/notes/updatenote/${id}`, {
                method: 'PUT',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                  'Content-Type': 'application/json',
                   "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXIiOnsiaWQiOiI2MjQwY2UzYWJmZjM4MTNmYzJiYTM2M2EifX0sImlhdCI6MTY0ODg5ODU3OH0.R086pIVhR4vGaWVQB5Iq-7MUMBEC-P_bGPoB0Uw2D74"
                  
                  
                },
                body: JSON.stringify({
                    title,
                    description,
                    tag
                })
              });
              const dataBack=await response.json(); // parses JSON response into native JavaScript objects
              if(dataBack.error){
                setShowMessage(dataBack.error,'danger');
                openAlertModal();
                closeModalAfter2Seconds();
                }
            
                const newNotes=JSON.parse(JSON.stringify(notes));
               
                for (let index = 0; index < newNotes.length; index++) {
                    const element = newNotes[index];
                    if(element._id===id){
                      element['title']=title;
                      element['description']=description;
                      element['tag']=tag;
                        break;
                    }
                    
                }
    
    
              setNotes(newNotes);
            
        } catch (error) {
            alert(error.message);
        }
        
    }

    const userAlreadyLoggedIn=()=>{
        var userAuthLocal=localStorage.getItem('authToken');
        setUserAuthToken(userAuthToken?userAuthToken:userAuthLocal);
        
    }

    const closeModalAfter2Seconds=()=>{
        setTimeout(()=>{
            setIsAlertOpen(false);
        },2000)
    }
    return (
        <NoteContext.Provider value={{notes,userAuthToken,userAlreadyLoggedIn,setUserAuthToken,addnote,messageState,setShowMessage,isAlertOpen,closeAlertModal,closeModalAfter2Seconds,openAlertModal,deleteNote,updateNote,getNotes}}>
                {children}
        </NoteContext.Provider>   
    )
}

export default NoteState;