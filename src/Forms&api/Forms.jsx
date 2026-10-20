import { useState } from "react";

const Forms = () => {
const style = {
  heading : {
    color: "blue",
  }
};


  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);

  const handelChange = (e) => {
    const val = e.target.value;
    console.log(val);
    setText(val);
  };

  const handelClick = () => {
    setShowText(text);
  };

  return (
    <div>
      <h1 style={style.heading}>Forms Component</h1>

      <input value={text} onChange={handelChange} />
      <button onClick={handelClick}>show</button>

      <p>{showText}</p>
    </div>
  );
};

export default Forms;
