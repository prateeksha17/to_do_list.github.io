import React from 'react'

export default function EventsLists( {events,handleClick}) {


  return (
    <div>
        

        {events.map((event)=>(
        <div key={event.id}>
          <div class="card w-50 ">
  <div class="card-header">
  <h4>Title- {event.title}</h4>
  </div>
  <div class="card-body">
    <h5 class="card-title">Date- {event.date}</h5>
   
    <button className='btn btn-outline-danger' onClick={()=>{handleClick(event.id)}}>Mark as Done</button>
  </div>
</div>
           
       
          
        </div>
      )
    )}
    </div>
  )
}
