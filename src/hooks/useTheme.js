import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem("theme") ||
      "light"
    );
  });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      theme
    );

    if (theme === "dark") {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    );
  };

  return {
    theme,
    isDark:
      theme === "dark",
    toggleTheme
  };
}