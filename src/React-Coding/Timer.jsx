import React, { useEffect, useState } from 'react'

const Timer = () => {

  const [timer, setTimer]= useState(0);


  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimer(prev=>prev+1)
    },1000);

    return()=>clearInterval(timer)


  },[])


  return (
    <div>

      <h1>Timer Component</h1>

      <h2>Timer : {timer}</h2>
      
    </div>
  )
}

export default Timer
