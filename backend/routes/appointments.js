const express = require("express");
const router = express.Router();

let appointments = [];

router.get("/", (req, res) => {
  res.status(200).json(appointments);
});

router.post("/", (req, res) => {
  const newAppointment = req.body;
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
});

module.exports = router;