import "./App.css";
import { useState } from "react";
import Model from "./Model";
import EventsLists from "./EventsLists";

function App() {
  const [showModel, setShowModel] = useState(false);

  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(true);

  const handleOpen = () => {
    setShowModel(true);
  };
  const handleClick=(id)=>{
    setEvents((preEvents)=>{
      return preEvents.filter((event)=>{
        return id!== event.id
      })
    })
  }
  // console.log(showEvents)

  return (
    <div className="App">
      <h2>Tasks List</h2>
      {showEvents && (
        <div>
          <button className="btn btn-outline-primary" onClick={() => setShowEvents(false)}>Hide All Tasks</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button className="btn btn-outline-success" onClick={() => setShowEvents(true)}>Show All Tasks</button>
        </div>
      )}

      {showEvents && <EventsLists events={events} handleClick={handleClick}/>}
      {showModel && (
        <Model setEvents={setEvents} setShowModel={setShowModel}></Model>
      )}
      <button className="btn btn-outline-dark" onClick={handleOpen}>Add Task</button>
    </div>
  );
}

export default App;
