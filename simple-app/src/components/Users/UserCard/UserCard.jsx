import Map from "./Map";
import "./UserCard.css";
function UserCard({ info }) {
  const { username, name, phone, email, website, company, address } = info;
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="user-info">
          <h2>{name}</h2>
          <p className="username">
            <strong>Username:</strong> @{username}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Address:</strong> {address?.city}, {address?.street},{" "}
            {address.suite}
          </p>
          <p>
            <strong>Website:</strong> <a href={website}>{website}</a>
          </p>
        </div>
        <Map position={[address?.geo?.lat, address?.geo?.lng]} />
      </div>
      <hr />
      <div className="company-info">
        <p>
          <strong>Company:</strong> {company?.name}
        </p>
        <p>
          <strong>Purpose:</strong>{" "}
          {company?.bs.slice(0, 1).toUpperCase() + company?.bs.slice(1)}
        </p>
        <p className="company-motto">&quot;{company?.catchPhrase}&quot;</p>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
}

export default UserCard;
