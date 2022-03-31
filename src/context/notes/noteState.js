import React,{useState} from "react";

//import the notesContext from the notesContext file
import NoteContext from "./notesContext";


const NoteState=({children})=>{

    
    //function to get the notes from a user
    

      //writing some method to update delete and update the notes
      const addnote=(title,description,tag)=>{

        
        const newNote={
            title,
            description,
            tag,
        }
        setNotes((prev)=>{
            return [...prev,newNote];
        });
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
     

    const [notes,setNotes]=useState(intialNotes);
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
    const deleteNote=(id)=>{
        
      
        const newNotes=notes.filter((note)=>{
            return note._id!==id;
        })
        setNotes(newNotes);
    
    }


    //FUNCTION TO UPDATE A NOTE
    const updateNote=(id,title,description,tag)=>{
        const newNotes=notes.map((note)=>{
            if(note._id===id){
                return {
                    ...note,
                    title,
                    description,
                    tag
                }
            }
            return newNotes;
        })

        setNotes(newNotes);
    }

    const closeModalAfter2Seconds=()=>{
        setTimeout(()=>{
            setIsAlertOpen(false);
        },2000)
    }
    return (
        <NoteContext.Provider value={{notes,addnote,messageState,setShowMessage,isAlertOpen,closeModalAfter2Seconds,openAlertModal,deleteNote,updateNote}}>
                {children}
        </NoteContext.Provider>   
    )
}

export default NoteState;