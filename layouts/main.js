import React from "react";
import Navbar from "../components/navbar";
import NewNavbar from "../components/new-navbar";
import Footer from "../components/footer";
export default function Main({ children }) {
  return (
    <main className="container-none flex flex-col h-screen">
      {/* <Navbar /> */}
      <NewNavbar />
      <div className="flex flex-col items-center justify-start h-full py-5 ">
        {children}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
