// Layout.js
import React from "react";
import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current path is not "/"
  const showSideNav = location.pathname !== "/";

  return (
    <div className="flex w-screen  h-full  ">
    {showSideNav && <Dashboard />}
    <div className="flex-grow-1 h-full w-screen">{children}</div>
  </div>
  );
};

export default Layout;
