import React from "react";
import NewNavbar from "../components/new-navbar";
import Footer from "../components/footer";
export default function Main({ children, router }) {
  return (
    <main className="container-none flex flex-col h-screen w-full">
      {/* <Navbar /> */}
      <NewNavbar path={router.asPath} />
      {children}
      {/* <Footer /> */}
    </main>
  );
}
