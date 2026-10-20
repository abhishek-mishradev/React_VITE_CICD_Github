import { useState, useTransition } from "react";

export function Search() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();

  // https://chatgpt.com/c/6ab00167-4e48-83ee-91c7-963af05cbb0a
  const handleChange = (e) => {
    const value = e.target.value;

    // Urgent update 
    setInput(value);

    // Non-urgent update
    startTransition(() => {
      setSearch(value);
    });
  };

  return (
    <>
      <input value={input} onChange={handleChange} />

      {isPending && <p>Loading...</p>}

      <h2>Searching for: {search}</h2>
    </>
  );
}

export default Search;
