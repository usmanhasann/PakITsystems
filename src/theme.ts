// styles/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    // Customize specific typography variants if needed
    h1: {
      fontFamily: "Montserrat, Arial, sans-serif",
    },
    h2: {
      fontFamily: "Montserrat, Arial, sans-serif",
    },
    // You can customize other typography variants as needed
  },
  // Other theme settings if needed
});

export default theme;
