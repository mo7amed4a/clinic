import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { useAuth } from "./auth/AuthProvider";

interface ThemeContextProps {
  colors: Record<string, string>;
  setColors: (colors: Record<string, string>) => void;
}

const defaultColors: Record<string, string> = {
  main: "#3bae5b",
  mainGray: "#5f616a",
  mainColorLight: "#f8f5ff",
  text: "#000000",
};

const ThemeContext = createContext<ThemeContextProps>({
  colors: defaultColors,
  setColors: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const [colors, setColors] = useState<Record<string, string>>(defaultColors);

  useEffect(() => {
    if (user) {
      const userColors = user.branding?.color || defaultColors?.main;
      setColors({ main: userColors });
    }
  }, [user]);
  return (
    <ThemeContext.Provider value={{ colors, setColors }}>
      <div
        style={
          {
            "--main-color": colors?.main ,
            "--mainGray-color": colors.mainGray,
            // "--main-color": colors?.main,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
