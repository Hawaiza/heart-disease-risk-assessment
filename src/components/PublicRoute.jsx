import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (sessionStorage.getItem("token")) {
  //     navigate("/home");
  //   }
  // });

  return <div>{children}</div>;
};

export default PublicRoute;
