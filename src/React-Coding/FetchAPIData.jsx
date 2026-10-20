import React, { useEffect, useState } from "react";

import axios from "axios";

const FetchAPIData = () => {
  const [users, setUsers] = useState([]);

  // 1st method
  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     setUsers(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // 2nd method
  // useEffect(()=>{
  //   fetchData()

  // },[])

  // 3rd method
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Fetch API Data</h1>
      {/* <button onClick={fetchData}>Fetch Data</button> <br /> <br /> */}
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );
};

export default FetchAPIData;
