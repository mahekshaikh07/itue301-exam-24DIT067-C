const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");
const appointmentRoutes = require("./routes/appointments");
const doctorRoutes = require("./routes/doctors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/doctors", doctorRoutes);

// error handler must be last
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});