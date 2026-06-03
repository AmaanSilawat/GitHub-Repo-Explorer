import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    onSearch(username);
  };

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <input
        className="search-input"
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <button
        className="search-button"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;