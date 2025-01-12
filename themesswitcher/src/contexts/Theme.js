import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "dark",
  darkTheme: () => {},
  lightThem: () => {},
  userName: "Avinash",
});

export const ThemeProvider = ThemeContext.Provider;

//Example cuustom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
