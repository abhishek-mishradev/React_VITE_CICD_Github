// import React from 'react'

import { useEffect, useState } from "react";

const ReactTest = () => {
  const [timer, setTimer] = useState(0);

  // useEffect(() => {

  //     const timer = setInterval(() => {

  //         setTimer(pre => pre + 1)

  //     }, 1000);

  //     return () => {

  //         clearInterval(timer)

  //         console.log("Component unmounted");
  //     };
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hello");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>React Test new page </h1>
      <h1> Timer : {timer}</h1>
    </>
  );
};

export default ReactTest;
