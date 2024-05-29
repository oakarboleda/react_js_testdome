import React, { createContext, useState, useContext } from 'react';

// Step 1: Create a ThemeContext
const ThemeContext = createContext();

// Step 2: Create a ThemeProvider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Step 3: Create a useTheme hook
export function useTheme() {
    return useContext(ThemeContext);
}

// Step 4: Use the useTheme hook in a component
function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
    );
}