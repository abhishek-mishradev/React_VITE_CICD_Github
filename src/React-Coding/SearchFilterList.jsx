import { useState } from "react";

function SearchFilterList() {
  const [search, setSearch] = useState("");

  const users = ["Amit", "Rahul", "Abhishek", "Neha"];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      {filteredUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
}

export default SearchFilterList;
