import { useAppContext } from "../../../contexts/AppContext";
import Map from "../../Map/Map";
import "./UserCard.css";
function UserCard({ info }) {
  const { username, name, phone, email, website, company, address } = info;

  const { setError } = useAppContext();

  const mapSettings = {
    position: [address?.geo?.lat, address?.geo?.lng],
    style: { height: "21.5rem", width: "100%", borderRadius: "1rem" },
    zoom: 3,
    zoomControl: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    dragging: false,
  };

  function LearnMoreHandler() {
    setError("You have learned a lot! Have a 15 minute break.");
  }

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
            <strong>Website:</strong> <a href="/">{website}</a>
          </p>
        </div>
        <Map settings={mapSettings} />
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
        <button className="btn" onClick={LearnMoreHandler}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default UserCard;
