import React, { useState } from "react";

function BookingPage() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    timeSlot: ""
  });

  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "doctorName") {
      setSelectedDoctor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="patientName" placeholder="Patient Name" onChange={handleChange} />
        <input type="text" name="doctorName" placeholder="Doctor Name" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <input type="text" name="timeSlot" placeholder="Time Slot" onChange={handleChange} />
        <button type="submit">Book</button>
      </form>

      <p>Entered patient name: {formData.patientName}</p>
      <p>Selected doctor: {selectedDoctor}</p>
    </div>
  );
}

export default BookingPage;