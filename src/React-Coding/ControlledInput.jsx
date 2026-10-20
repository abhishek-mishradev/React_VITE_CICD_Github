import React, { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState(" ");

  const handleInputChanged = (e) => {
    const val = e.target.value;

    setName(val);
    console.log(val);
  };

  return (
    <div>
      <h1>Controlled Input</h1>

      <input
        type="text"
        value={name}
        // onChange={(e) => setName(e.target.value)}
        onChange={handleInputChanged}
      />

      <h1>{name}</h1>
    </div>
  );
};

export default ControlledInput;
