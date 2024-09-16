import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import "../globals.css";

// Initialize the Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "700"], // Specify the weights you need
});

export const metadata: Metadata = {
  title: "Contact – PAK IT SYSTEMS",
  description: "Generated by create next app",
  icons: {
    icon: "../favicon.ico",
    apple: "../favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ margin: "0px" }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
