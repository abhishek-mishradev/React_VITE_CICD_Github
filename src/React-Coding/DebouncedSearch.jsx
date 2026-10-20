import React, { useEffect, useState } from "react";

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <h1>Debounced Search</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Searching: {debouncedSearch}</p>
    </div>
  );
};

export default DebouncedSearch;
