import "./index.css";
import { useState } from "react";


function TableForm() {

          const [time, setTime] = useState("00:09");
          const [name, setName] = useState('')

      function handleSubmit(e){
            e.preventDefaul();
            setTime("00:00");
            setName("");
      }

  return (
    <div className="formd">
    <form onSubmit={handleSubmit}>
      <fieldset>
      <label htmlForfor="name">Name</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
    <label htmlFor="mail">Email</label>
    <input type="email" id="mail" required/>
    <label htmlFor="date">Choose date</label>
    <input type="date" id="date" />
    <label for="res-time">Choose time</label>
    <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
       <option>17:00</option>
       <option>18:00</option>
       <option>19:00</option>
       <option>20:00</option>
       <option>21:00</option>
       <option>22:00</option>
    </select>
    <label for="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" />
    <label for="occasion">Occasion</label>
    <select id="occasion">
       <option>Birthday</option>
       <option>Anniversary</option>
       <option>Prmotion</option>
       <option>date</option>
    </select>
    <input type="submit" value="Make Your reservation" />
    </fieldset>
 </form>
 </div>
  );
}

export default TableForm;
