import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);

  const [running, setRunning] = useState(0);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h2>{seconds} seconds</h2>
      <button onClick={() => setRunning(true)}>start</button>
      <button onClick={() => setRunning(false)}>Stop</button>

      <button
        onClick={() => {
          setRunning(false);
          setSeconds(0);
        }}
      >
        Reset
      </button>

      <h1>Stop Watch</h1>
    </div>
  );
};

export default Stopwatch;
