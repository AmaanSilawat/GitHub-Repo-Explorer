import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getGithubUser } from "./services/githubApi";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");

      const result = await getGithubUser(username);

      setData(result);
    } catch (err) {
      setError("User not found");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">
        GitHub Repo Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loading />}

      {error && <p>{error}</p>}

      {data && (
        <>
          <ProfileCard user={data.user} />
          <RepoList repos={data.repos} />
        </>
      )}
    </div>
  );
}

export default App;