import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import "../globals.css";

// Initialize the Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Specify the weights you need
});

export const metadata: Metadata = {
  title: "PAKIT System",
  description: "Generated by create next app",
  icons: {
    icon: "/Favicon-300x300.png",
    apple: "/Favicon-300x300.png",
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
