import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);

    setSubmittedData({
      name: name,
      email: email,
    });
  };

  return (
    <div>
      <h1>Form Data</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Name: {submittedData.name}</h2>
          <h2>Email: {submittedData.email}</h2>
        </div>
      )}
      {/* 
      <h1>Name: {name}</h1>
      <h1>Email : {email}</h1> */}
    </div>
  );
};

export default Form;
