"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "./globals.css";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white font-sans flex flex-col min-h-screen">
        <Provider store={store}>
        <div className="w-full flex justify-end px-6 pt-4">
    {typeof window !== "undefined" && localStorage.getItem("userId") && (
      <button
        onClick={() => {
          localStorage.removeItem("userId");
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
