import React from "react";
import "./globals.css"
import NavBar from "@/components/layout/navBar/NavBar";
import Footer from "@/components/layout/footer/footer";
import {ToastContainer} from "react-toastify";


export default function RootLayout({ children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="fr">
      <body >
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
        <NavBar/>
        <main>
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
