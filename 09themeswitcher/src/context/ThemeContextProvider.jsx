import ThemeContext from "./ThemeContext";
import { useEffect, useState } from "react";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   document.documentElement.classList.remove('light', 'dark')
  //   document.documentElement.classList.add(theme)
  // },[theme])

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  return (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
    </ThemeContext.Provider>
    );
};
export default ThemeContextProvider;