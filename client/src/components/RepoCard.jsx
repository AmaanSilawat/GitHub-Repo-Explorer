import { useState } from "react";
import "./RepoCard.css";

function RepoCard({ repo }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="repo-card"
      onClick={() =>
        setExpanded(!expanded)
      }
    >
      <div className="expand-tag">
    Click to Expand
  </div>
      <h3>{repo.name}</h3>

      <p>
        {repo.description ||
          "No description available"}
      </p>

      <div className="repo-info">
        <span>
          ⭐ {repo.stargazers_count}
        </span>

        <span>
          💻 {repo.language || "N/A"}
        </span>
      </div>

      <small>
        Updated:{" "}
        {new Date(
          repo.updated_at
        ).toLocaleDateString()}
      </small>

      {expanded && (
        <div className="repo-extra">
          <p>
            Open Issues:{" "}
            {repo.open_issues_count}
          </p>

          <p>
            Default Branch:{" "}
            {repo.default_branch}
          </p>

          <p>
            Forks: {repo.forks_count}
          </p>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      )}
    </div>
  );
}

export default RepoCard;