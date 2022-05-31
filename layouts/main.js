import React from "react";
import Navbar from "../components/navbar";
export default function Main({ children, router }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
