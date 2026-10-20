import React, { useState } from "react";

const ShowHidePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Show Hide Password</h1>

      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button onClick={handleShowPassword}>
        {showPassword ? "Hide" : "show"}
      </button>
      {showPassword && <h1>password is: {password}</h1>}
    </div>
  );
};

export default ShowHidePassword;
