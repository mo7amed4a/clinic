import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        precedence="default"
        rel="stylesheet"
        precedence
      /> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
