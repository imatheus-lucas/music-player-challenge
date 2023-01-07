import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Themes } from "../styles/theme";

type ThemeContextData = {
  toogleTheme: () => void;
  theme: typeof Themes.light | typeof Themes.dark;
};
export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(Themes.light);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(JSON.parse(theme));
    }
  }, []);

  function toogleTheme() {
    const seletedTheme = theme.title === "dark" ? Themes.light : Themes.dark;
    localStorage.setItem("theme", JSON.stringify(seletedTheme));
    setTheme(seletedTheme);
  }
  return (
    <ThemeContext.Provider value={{ toogleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
