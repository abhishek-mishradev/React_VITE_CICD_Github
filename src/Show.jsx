import { useState } from "react";

const show = () => {
  // const [show, setShow]= useState(false);

  const [show, setShow] = useState(false);

  const showToggel = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>Show</h1>

      <button onClick={showToggel}>{show ? "Hide" : "Show"}</button>

      {show && <p>Show is true</p>}
    </>
  );
};

export default show;
