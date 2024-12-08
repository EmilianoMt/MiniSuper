import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiniSuper",
  description: "",
  icons: [
    
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kodchasan:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
