# Elevator Request System

This project is a simple simulation of an elevator system built as part of an assignment. It demonstrates how requests can be handled and processed step by step in a real-world scenario using basic system design concepts.

## Tech Stack

* Node.js
* Express.js
* React.js
* Axios

## Features

* Users can request the elevator from different floors
* Displays the current floor of the elevator
* Shows the direction of movement (up, down, idle)
* Processes requests using a queue-based approach
* Prevents duplicate requests

## How It Works

When a user clicks on a floor button, the request is added to a queue. The elevator processes each request one by one. It moves one floor at a time (every second) until it reaches the requested floor, then moves to the next request.

## Project Structure

backend/ – Handles API and elevator logic
frontend/ – Handles UI and user interaction

## How to Run the Project

### Start Backend

cd backend
npm install
npm start

### Start Frontend

cd frontend
npm install
npm start

## Notes

* This project uses a single elevator system
* Requests are processed sequentially
* The focus is on logic rather than UI design

## Future Improvements

* Add support for multiple elevators
* Implement smarter scheduling algorithms
* Improve UI with animations
* Add floor indicators and better controls

---

This project was built to understand how real-time request handling systems work in a simple and practical way.
