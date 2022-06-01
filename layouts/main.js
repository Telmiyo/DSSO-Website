import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Main({ children, router }) {
  return (
    <main >
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
}
