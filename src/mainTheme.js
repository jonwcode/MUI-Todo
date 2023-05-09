import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const MainTheme = ({ children, themeMode }) => {
  const theme = createTheme({
    palette: {
      mode: themeMode,
      secondary: {
        main: "#FFA500",
      },
      headerBG: {
        main: themeMode === "light" ? "#FFA500" : "#c57b20",
      },
      gray: {
        main: "#9e9e9e",
      },
      tableRow: {
        main: themeMode === "light" ? "#fafafa" : "rgba(28, 28, 28, 0.67)",
        completed:
          themeMode === "light"
            ? "rgba(0, 255, 0, 0.26)"
            : "rgba(28, 75, 28, 0.27)",
      },
      closeBtn: {
        main: themeMode === "light" ? "#cccccc" : "rgba(38, 38, 38, 0.82)",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MainTheme;
