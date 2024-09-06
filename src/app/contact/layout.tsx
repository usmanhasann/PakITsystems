import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pak IT system | Cotact Us",
  description: "Contact us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
