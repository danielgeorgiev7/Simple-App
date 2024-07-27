import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import User from "./User/User";

const jsonPlaceholderUsersLink = "https://jsonplaceholder.typicode.com/users/";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(jsonPlaceholderUsersLink);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="users-list">
      {users.map((user) => (
        <User key={user.id} info={user} />
      ))}
    </div>
  );
}

export default Users;
