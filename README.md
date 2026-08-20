# Hospital Appointment System - MedCare Plus

A basic hospital appointment management system built for ITUE301 practical exam.
Tech stack: React (frontend), Express.js (backend), MongoDB with Mongoose (database).

## Frontend Setup

1. Navigate to the frontend folder:
   cd frontend

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Open the app at the URL shown in terminal (usually http://localhost:5173)

## Backend Setup

1. Navigate to the backend folder:
   cd backend

2. Install dependencies:
   npm install

3. Create a .env file (see Environment Variables section below)

4. Start the server:
   node server.js

5. Server runs on http://localhost:5000

## MongoDB Setup

This project uses a local MongoDB instance running on the default port.

1. Make sure MongoDB is installed and running on your machine (default: mongodb://localhost:27017)
2. No manual database creation needed - it is created automatically on first insert
3. To test the schema and validation, run:
   node testDb.js
4. To view the data, use the MongoDB extension in VS Code and connect to
   mongodb://localhost:27017, then look for the hospitalDB database
   
## Environment Variables

Create a .env file inside the backend folder with the following:

PORT=5000
MONGO_URI=mongodb://localhost:27017/hospitalDB

See .env.example for reference.