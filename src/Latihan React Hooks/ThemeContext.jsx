import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === "dark" ? "#222" : "#fff", color: theme === "dark" ? "#fff" : "#222", minHeight: 100, padding: 16 }}>
      <h2>Theme Switcher (useContext)</h2>
      <button onClick={toggleTheme}>Ganti Tema</button>
      <p>Tema saat ini: {theme}</p>
    </div>
  );
}

export { ThemeProvider, ThemeSwitcher };
