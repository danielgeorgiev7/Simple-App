import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
import { toast } from "react-toastify";

const JSON_PLACEHOLDER_USERS_LINK =
  "https://jsonplaceholder.typicode.com/users/";

export function AppProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(JSON_PLACEHOLDER_USERS_LINK);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || "An error occurred. Try refreshing the site.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 3000,
      });
      setError(null);
    }
  }, [error]);

  return (
    <AppContext.Provider value={{ users, isLoading, error, setError }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
