/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { createContext, useState, useEffect, useContext } from "react";

// Create a Context for the dark mode
//@ts-ignore
const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }:never) => {
  // Initialize dark mode state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      //@ts-ignore
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
