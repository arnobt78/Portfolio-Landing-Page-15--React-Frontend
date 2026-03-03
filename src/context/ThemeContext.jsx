/* eslint-disable react-refresh/only-export-components -- ThemeContext exports provider + hook */
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

/** Provides theme (dark/light) to the tree and syncs it to document.documentElement class and localStorage for persistence. */
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("dark", "light");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/** Hook to read theme and toggleTheme from the nearest ThemeProvider. */
export const useTheme = () => useContext(ThemeContext);
