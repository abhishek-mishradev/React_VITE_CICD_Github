import { useEffect } from "react";
import React from "react";

const LifeCycle = () => {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: "red" }}>test</h1>
    </div>
  );
};

export default LifeCycle;
