import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './src/context';

const App = props => {
    const [theme, setTheme] = useState("light");
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        if (theme === "light") {
            window.document.body.classList.remove("night");
        } else {
            window.document.body.classList.add("night");
        }
    });

    useEffect(() => {
        const drawer = window.document.getElementById("navbarsExampleDefault");
        const hamburgerIcon = window.document.getElementById("hamburger-icon");
        const overlay = window.document.getElementById("overlay");
        
        if (drawer && hamburgerIcon && overlay) {
            if (showDrawer) {
                hamburgerIcon.classList.add("open");
                drawer.classList.add("open");
                overlay.style.display = "block";
            } else {
                drawer.classList.remove("open");
                hamburgerIcon.classList.remove("open");
                overlay.style.display = "none";
            }
        }
    });

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    }

    return (
        <ThemeProvider value={{
            toggleTheme,
            toggleDrawer,
            showDrawer,
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

