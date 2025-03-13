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
          <main className="flex-grow flex flex-col items-center justify-center p-6">
            {children}
          </main>
          <Footer /> 
        </Provider>
      </body>
    </html>
  );
}
