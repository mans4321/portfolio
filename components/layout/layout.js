import React from "react";
import "./layout.scss";
import Nav from "../nav/nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
