import Loader from "../Loader/Loader";
import UserCard from "./UserCard/UserCard";
import "./Users.css";
import { useAppContext } from "../../contexts/AppContext";

function Users() {
  const { users, isLoading } = useAppContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="users-list">
      {users.map((user) => (
        <UserCard key={user.id} info={user} />
      ))}
    </div>
  );
}

export default Users;
