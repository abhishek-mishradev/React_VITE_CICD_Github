import { useEffect, useRef } from "react";

const Input = () => {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  return (
    <div>

      <h1>Ref Component</h1>
      input: <input type="text" ref={inputRef} />
      
    </div>
  )
}

export default Input
