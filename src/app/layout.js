"use client";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "./globals.css";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkToken(); // inicializa al montar

    const handleLoginChange = () => checkToken();

    window.addEventListener("loginChange", handleLoginChange); // escuchar evento personalizado

  return () => window.removeEventListener("loginChange", handleLoginChange);
  }, []);

  return (
    <html lang="es">
      <body className="bg-gray-900 text-white font-sans flex flex-col min-h-screen">
        <Provider store={store}>
        <div className="w-full flex justify-end px-6 pt-4">
    {isLoggedIn && (
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.dispatchEvent(new Event("loginChange"));
          location.href = "/";
        }}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-all text-sm"
      >
        🔓 Cerrar Sesión
      </button>
    )}
  </div>
          <main className="flex-grow flex flex-col items-center justify-center p-6">
            {children}
          </main>
          <Footer /> 
        </Provider>
      </body>
    </html>
  );
}
