import React from 'react'

const Child1 = ({ count, onIncrement }) => {
  return (
    <div>

      <h1>Child 1 Component</h1>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>


      
    </div>
  )
}

export default Child1
