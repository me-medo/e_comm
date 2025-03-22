import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          myColor: {
            main: "#F6F9FC",
            dark: "#e3e8ef"  // Add dark variant for light mode
          },
          back: {
            main : "#F6F6F6",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },
          myColor: {
            main: "#252b32",
            dark: "#1e2329"  // Add dark variant for dark mode
          },
          back: {
            main : "#1D2021",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
  typography: {
    fontFamily: 'Cairo, Arial, sans-serif',
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
