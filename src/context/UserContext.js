import { useState, useContext, createContext, useEffect } from "react";

export const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const userContextLocalStorage = localStorage.getItem("userContext");
  const [userContext, setUserContext] = useState(
    userContextLocalStorage && userContextLocalStorage !== "undefined"
      ? JSON.parse(userContextLocalStorage)
      : null
  );

  useEffect(() => {
    localStorage.setItem("userContext", JSON.stringify(userContext));
  }, [userContext]);

  return (
    <UserContext.Provider value={[userContext, setUserContext]}>
      {children}
    </UserContext.Provider>
  );
};
