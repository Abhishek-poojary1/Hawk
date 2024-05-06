// PrivateRoute.jsx
import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = localStorage.getItem("cred") === "true";

  return isAuthenticated ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
