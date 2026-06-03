import "./ProfileCard.css";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="avatar"
      />

      <h2>{user.name || user.login}</h2>

      <p className="bio">{user.bio}</p>

      <div className="stats">
        <div>
          <strong>{user.followers}</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>{user.following}</strong>
          <span>Following</span>
        </div>

        <div>
          <strong>{user.public_repos}</strong>
          <span>Repos</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;