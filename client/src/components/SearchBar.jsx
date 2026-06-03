import { useState, useEffect } from "react";
import "./SearchBar.css";
import { searchGithubUsers } from "../services/githubApi";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (username.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const users =
          await searchGithubUsers(username);

        setSuggestions(users);
      } catch (error) {
        console.error(error);
        setSuggestions([]);
      }
    };

    const timer = setTimeout(
      fetchSuggestions,
      500
    );

    return () => clearTimeout(timer);
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    onSearch(username);

    setUsername("");
    setSuggestions([]);
  };

  const handleSuggestionClick = (
    selectedUser
  ) => {
    onSearch(selectedUser);

    setUsername("");
    setSuggestions([]);
  };

  return (
    <div className="search-wrapper">
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

      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((user) => (
            <div
              key={user.login}
              className="suggestion-item"
              onClick={() =>
                handleSuggestionClick(
                  user.login
                )
              }
            >
              <img
                src={user.avatar_url}
                alt={user.login}
              />

              <span>
                {user.login}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;