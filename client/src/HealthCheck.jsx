import { useEffect, useState } from "react";

function HealthCheck() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus("Backend not reachable ❌"));
  }, []);

  return (
    <div>
      <h2>Health Check:</h2>
      <p>{status}</p>
    </div>
  );
}

export default HealthCheck;
