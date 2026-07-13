import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
});

export const ThemeProvider = ThemeContext.Provider;

// const { themeMode, darkTheme, lightTheme } = useContext(ThemeContext);
// Below export is the better replacement for the above one, it creates custom hook that looks clean  
export default function useTheme() {
    return useContext(ThemeContext)
}