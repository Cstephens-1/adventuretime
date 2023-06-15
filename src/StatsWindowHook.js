import { useEffect, useState } from "react";

export const useStatsWindow = () => {
  const [statsWindowOpen, setStatsWindowOpen] = useState(false);

  const toggleStatsWindow = () => {
    setStatsWindowOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "p" || event.key === "P") {
        toggleStatsWindow();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return [statsWindowOpen, toggleStatsWindow];
};