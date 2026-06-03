import "./RepoCard.css";

function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>

      <p>{repo.description || "No description available"}</p>

      <div className="repo-info">
        <span>⭐ {repo.stargazers_count}</span>
        <span>💻 {repo.language || "N/A"}</span>
      </div>

      <small>
        Updated:{" "}
        {new Date(repo.updated_at).toLocaleDateString()}
      </small>
    </div>
  );
}

export default RepoCard;