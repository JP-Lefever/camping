import React from "react";
import "./globals.css"
import NavBar from "@/components/layout/navBar/NavBar";


export default function RootLayout({ children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="fr">
      <body >
        <NavBar/>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
