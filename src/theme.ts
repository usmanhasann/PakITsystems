"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3644af",
    },
    secondary: {
      main: "#dc004e",
    },

    background: {
      default: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

export default theme;
