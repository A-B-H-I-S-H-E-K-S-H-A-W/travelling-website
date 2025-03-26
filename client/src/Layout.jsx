import React from "react";
import Navbar from "./components/user/Navbar";
import Footer from "./components/user/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
