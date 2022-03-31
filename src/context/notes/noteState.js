import React,{useState} from "react";

//import the notesContext from the notesContext file
import NoteContext from "./notesContext";


const NoteState=({children})=>{

    const intialNotes=[
        {
          "_id": "62436b715c79f6c78f99aae1",
          "title": "manmeet first note",
          "description": "hello there",
          "userId": "6240ce3abff3813fc2ba363a",
          "tag": "sports",
          "date": "2022-03-29T20:26:25.097Z",
          "__v": 0
        },{
            "_id": "62436b715c79f6c78f99aae1",
            "title": "manmeet second note",
            "description": "hello sss",
            "userId": "6240ce3abff3813fc2ba363a",
            "tag": "sports",
            "date": "2022-03-29T20:26:25.097Z",
            "__v": 0
          },{
            "_id": "62436b715c79f6c78f99aae1",
            "title": "manmeet third note",
            "description": "hello there",
            "userId": "6240ce3abff3813fc2ba363a",
            "tag": "sports",
            "date": "2022-03-29T20:26:25.097Z",
            "__v": 0
          }
          ,{
            "_id": "62436b715c79f6c78f99aae1",
            "title": "manmeet third note",
            "description": "hello there",
            "userId": "6240ce3abff3813fc2ba363a",
            "tag": "sports",
            "date": "2022-03-29T20:26:25.097Z",
            "__v": 0
          },{
            "_id": "62436b715c79f6c78f99aae1",
            "title": "manmeet third note",
            "description": "hello there",
            "userId": "6240ce3abff3813fc2ba363a",
            "tag": "sports",
            "date": "2022-03-29T20:26:25.097Z",
            "__v": 0
          },{
            "_id": "62436b715c79f6c78f99aae1",
            "title": "manmeet third note",
            "description": "hello there",
            "userId": "6240ce3abff3813fc2ba363a",
            "tag": "sports",
            "date": "2022-03-29T20:26:25.097Z",
            "__v": 0
          },{
            "_id": "62436b715c79f6c78f99aae1",
            "title": "manmeet third note",
            "description": "hello there",
            "userId": "6240ce3abff3813fc2ba363a",
            "tag": "sports",
            "date": "2022-03-29T20:26:25.097Z",
            "__v": 0
          }
      ];

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

    const closeAlertModal=()=>{
        setIsAlertOpen(false);
    }

    const openAlertModal=()=>{
        setIsAlertOpen(true);
    }
    return (
        <NoteContext.Provider value={{notes,addnote,messageState,setShowMessage,isAlertOpen,closeAlertModal,openAlertModal}}>
                {children}
        </NoteContext.Provider>   
    )
}

export default NoteState;