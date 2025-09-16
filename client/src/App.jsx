import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then(res => res.json())
      .then(data => setHealth(data.message))
      .catch(() => setHealth("Backend not reachable ❌"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Lock-In Tasker</h1>
      <p>Health Check:</p>
      <strong>{health}</strong>
    </div>
  );
}

export default App;
