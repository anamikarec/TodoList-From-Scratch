import { useState } from "react";

const TodoInput = ({ handleClick }) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add Something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => handleClick(query)}>ADD</button>
    </>
  );
};
export default TodoInput;
