import { useState } from "react";
import RepoCard from "./RepoCard";
import "./RepoList.css";

function RepoList({ repos }) {
  const [sortBy, setSortBy] = useState("stars");

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "updated") {
      return new Date(b.updated_at) - new Date(a.updated_at);
    }

    return 0;
  });

  return (
    <>
      <div className="repo-header">
        <h2>Repositories ({repos.length})</h2>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="stars">Sort by Stars</option>
          <option value="name">Sort by Name</option>
          <option value="updated">Sort by Updated</option>
        </select>
      </div>

      <div className="repo-grid">
        {sortedRepos.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))}
      </div>
    </>
  );
}

export default RepoList;