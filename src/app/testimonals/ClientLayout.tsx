"use client"; // Mark this as a Client Component for MUI and other client-side logic

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";
import "../globals.css";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
