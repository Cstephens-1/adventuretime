import { useState, useContext, createContext, useEffect } from "react";

export const EnemyContext = createContext({});
export const useEnemyContext = () => useContext(EnemyContext);

export const EnemyProvider = ({ children }) => {
  const enemyContextLocalStorage = localStorage.getItem("enemyContext");
  const [enemyContext, setEnemyContext] = useState(
    enemyContextLocalStorage && enemyContextLocalStorage !== "undefined"
      ? JSON.parse(enemyContextLocalStorage)
      : {}
  );

  useEffect(() => {
    localStorage.setItem("enemyContext", JSON.stringify(enemyContext));
  }, [enemyContext]);

  return (
    <EnemyContext.Provider value={[enemyContext, setEnemyContext]}>
      {children}
    </EnemyContext.Provider>
  );
};