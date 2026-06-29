## Overview
A full-stack web application to track personal income and expenses, built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features
- Add, view, and delete income and expense transactions
- Real-time balance calculation (Total Income, Total Expenses, Net Balance)
- Transaction history with date and category
- Responsive and user-friendly UI

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Tools:** VS Code, GitHub, Postman

## Project Structure
Personal-Budget-Tracker/
├── client/          # React frontend
├── server/          # Node.js + Express backend
├── models/          # MongoDB schemas
├── routes/          # API routes
└── README.md
## How to Run
1. Clone the repository
2. Install dependencies:
cd server && npm install
cd client && npm install
3. Add your MongoDB Atlas connection string in `.env`
4. Run backend: `npm start` (in server folder)
5. Run frontend: `npm start` (in client folder)
6. Open `http://localhost:3000` in your browser

## Learnings
- Built and connected a full MERN stack application from scratch
- Managed MongoDB Atlas cloud database connectivity
- Implemented REST API with Express.js
- Developed dynamic React components for real-time UI updates
