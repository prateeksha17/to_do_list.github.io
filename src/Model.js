import React from 'react';
import './Model.css';
import NewEvent from './NewEvent';


export default function Model({setEvents,setShowModel}) {
  const addEvent =(event)=>{
    setEvents((prevEvents)=>{
      return[...prevEvents,event]
    })
    setShowModel(false)
   }
  return (
   <div className='models'>
    <div className='model'>
    <NewEvent addEvent={addEvent}/>
       
    </div>
   </div>


  )
}
