import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState(null);

  const fetchStatus = async () => {
    const res = await axios.get("http://localhost:5000/status");
    setStatus(res.data);
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  const requestElevator = async (floor) => {
    await axios.post("http://localhost:5000/request", { floor });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🚀 Elevator System</h1>

      <h2>Current Floor: {status?.currentFloor}</h2>
      <h3>Direction: {status?.direction}</h3>

      <div>
        {[1,2,3,4,5,6,7,8,9,10].map(floor => (
          <button key={floor} onClick={() => requestElevator(floor)}>
            Floor {floor}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;