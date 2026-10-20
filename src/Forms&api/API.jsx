import { useState, useEffect } from "react";
import axios from "axios";

const API = () => {
  const [users, setUsers] = useState([]);

  // const showData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users",
  //     );
  //     setUsers(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   showData();
  // }, []);

  // useEffect(()=>{

  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setUsers(res.data))

  // },[])

  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(()=>{
  //     getData();
  // },[])

  return (
    <div>
      <h1>API Component</h1>

      <button onClick={getData}>Show Data</button>

      {users.map((user, id) => (
        <div key={id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
};

export default API;
