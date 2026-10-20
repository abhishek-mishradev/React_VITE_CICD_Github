import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Timer Component</h1>

      <p>Timer: {timer}</p>
    </div>
  );
};

export default Timer;
