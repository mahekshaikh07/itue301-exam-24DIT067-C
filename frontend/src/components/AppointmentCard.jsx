import React from "react";

function AppointmentCard({ patientName, doctorName, date, timeSlot, status }) {
  const statusClass =
    status === "confirmed" ? "status-confirmed" :
    status === "cancelled" ? "status-cancelled" :
    "status-pending";

  return (
    <div className="appointment-card">
      <p><strong>Patient:</strong> {patientName}</p>
      <p><strong>Doctor:</strong> {doctorName}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time Slot:</strong> {timeSlot}</p>
      <p className={statusClass}><strong>Status:</strong> {status}</p>
    </div>
  );
}

export default AppointmentCard;