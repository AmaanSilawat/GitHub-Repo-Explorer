import { useState} from "react";
import SearchBar from "./components/SearchBar";
import { getGithubUser } from "./services/githubApi";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import Loading from "./components/Loading";
import LanguageChart from "./components/LanguageChart";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [recentSearches, setRecentSearches] =
  useState(() => {
    return (
      JSON.parse(
        localStorage.getItem(
          "recentSearches"
        )
      ) || []
    );
  });

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");

      const result =
        await getGithubUser(username);

      setData(result);

      const updatedSearches = [
        username,
        ...recentSearches.filter(
          (item) => item !== username
        ),
      ].slice(0, 5);

      setRecentSearches(
        updatedSearches
      );

      localStorage.setItem(
        "recentSearches",
        JSON.stringify(
          updatedSearches
        )
      );
    } catch (err) {
      setData(null);

      if (
        err.response?.status === 404
      ) {
        setError(
          "GitHub user not found"
        );
      } else if (
        err.response?.status === 403
      ) {
        setError(
          "GitHub rate limit exceeded. Please try again later."
        );
      } else {
        setError(
          "Network error. Please check your connection."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">
        GitHub Repo Explorer
      </h1>

      <SearchBar
        onSearch={handleSearch}
      />

      {recentSearches.length >
        0 && (
        <div className="recent-searches">
          <h3>
            Recent Searches
          </h3>

          <div className="recent-list">
            {recentSearches.map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    handleSearch(
                      item
                    )
                  }
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {loading && <Loading />}

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      {data && (
        <>
          <div className="top-section">
  <ProfileCard user={data.user} />

  <LanguageChart repos={data.repos} />
</div>
          <RepoList
            repos={data.repos}
          />
        </>
      )}
    </div>
  );
}

export default App;