// TableForm.jsx
/**
 * @jest-environment jsdom
 */
import "./index.css"; // Import your CSS file
import { useState } from "react";


function TableForm() {
  const availableTime = [
    "choose your Time",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  const [bookedSlots, setBookedSlots] = useState([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [guest, setGuest] = useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const isSlotBooked = bookedSlots.includes(time);
    
    if (isSlotBooked) {
      alert("This time slot is already booked. Please choose another.");
    } else {
      // Add the booking to bookedSlots
      setBookedSlots([...bookedSlots, time]);
      setDate(date); // Set the selected date
      window.confirm(`confirm details before final submission \n Name: ${name} \n Time: ${time} \n Date: ${date}`);
      alert(
        `Congratulations ${name}! Your booking is confirmed for ${date} at ${time}.`
      );
    }

    // Reset form fields
    setTime("");
    setName("");
    setEmail("");
    setDate("");
    setGuest("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            id="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTime.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            placeholder="1"
            min="1"
            max="10"
            id="guests"
          />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Promotion</option>
            <option>Date</option>
          </select>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default TableForm;
