require("dotenv").config({ path: "../.env" });
const connectDB = require("./config/db");
const Patient = require("./models/Patient");

async function run() {
  await connectDB();

  // 1. successful insert
  try {
    const p = await Patient.create({
      name: "Ramesh Patel",
      email: "ramesh@test.com",
      bloodGroup: "B+",
      age: 30
    });
    console.log("Patient created:", p);
  } catch (err) {
    console.log("Error creating patient:", err.message);
  }

  // 2. validation failure - invalid blood group
  try {
    await Patient.create({
      name: "Invalid Patient",
      email: "invalid@test.com",
      bloodGroup: "Z+",  // not in enum, will fail
      age: 25
    });
  } catch (err) {
    console.log("Validation failed as expected:", err.message);
  }

  process.exit();
}

run();