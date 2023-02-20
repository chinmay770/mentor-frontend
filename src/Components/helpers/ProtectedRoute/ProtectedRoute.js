import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import allRoutes from "../../../data/routes";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);

  const data = JSON.parse(localStorage.getItem("user-details"));

  console.log(data);
  useEffect(() => {
    setUser(data);
  }, []);

  let auth = data != null ? { token: true } : { token: false };
  console.log(user);

  return (
    <>{auth.token ? <Outlet /> : <Navigate to={allRoutes.allLoginPage} />}</>
  );
};

export default ProtectedRoute;
