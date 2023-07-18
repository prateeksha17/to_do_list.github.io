import { useState } from "react";
import "./NewEvent.css";

export default function NewEvent({ addEvent }) {
  const [title, setTitle] = useState("");
  const [Date, setDate] = useState("");

  const resetForm = () => {
    setDate("");
    setTitle("");
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: Date,
     
      id: Math.floor(Math.random() * 10000),
    };
    console.log(e);
    addEvent(event);
    resetForm();
  };
  return (
    <form className="new-event-model" onSubmit={handleSubmit}>
        
      <label>
        <span>Task Name   </span>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </label>
      <br />
      <label>
        <span>End Date   </span>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={Date}
        />
      </label>

      <br />
      
      {/* <p>title -{title} date-{Date}</p> */}
      <button className="btn btn-outline-danger">Submit</button>
      {/* <button onClick={resetForm}>reset</button> */}
    </form>
  );
}
