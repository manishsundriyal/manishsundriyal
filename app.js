import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './src/context';

const App = props => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "light") {
            window.document.body.classList.remove("night");
        } else {
            window.document.body.classList.add("night");
        }
    });

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeProvider value={{
            toggleTheme,
            theme,
        }}>
            {props.children}
        </ThemeProvider>
    )
};

export default ({ element }) => (
    <App>
      {element}
    </App>
  );

