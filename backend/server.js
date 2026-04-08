const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let elevator = {
  currentFloor: 1,
  direction: "idle",
  requests: []
};

// 🚀 Add Request
app.post("/request", (req, res) => {
  const { floor } = req.body;

  if (!elevator.requests.includes(floor)) {
    elevator.requests.push(floor);
  }

  res.json({ message: "Request added", elevator });
});

// 📊 Get Elevator Status
app.get("/status", (req, res) => {
  res.json(elevator);
});

// ⚙️ Process Requests
setInterval(() => {
  if (elevator.requests.length === 0) {
    elevator.direction = "idle";
    return;
  }

  const target = elevator.requests[0];

  if (elevator.currentFloor < target) {
    elevator.currentFloor++;
    elevator.direction = "up";
  } else if (elevator.currentFloor > target) {
    elevator.currentFloor--;
    elevator.direction = "down";
  } else {
    elevator.requests.shift(); // reached
    elevator.direction = "idle";
  }

}, 1000); // move every second

app.listen(5000, () => console.log("Server running on port 5000"));