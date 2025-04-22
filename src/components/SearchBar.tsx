import { useState } from "react";

interface SearchBarProps {
  onAddTodo: (title: string) => void;
}

const SearchBar = ({ onAddTodo }: SearchBarProps) => {
  const [item, setItem] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!item.trim()) {
      return setError("Invalid task title!");
    }
    onAddTodo(item);
    setItem("");
  };

  return (
    <>
      <form
        onSubmit={handleAdd}
        className="my-2 border-b-2 border-emerald-700 flex gap-2 justify-center w-8/10 m-auto"
      >
        <input
          className="w-100 outline-none"
          type="text"
          placeholder="Add a new item"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
            setError("");
          }}
        />
        <button className="p-2 rounded bg-emerald-400 text-white">Add</button>
      </form>

      {error && <p>{error}</p>}
    </>
  );
};

export default SearchBar;
