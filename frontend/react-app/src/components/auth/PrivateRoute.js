import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  const isAuthenticated = !!localStorage.getItem("idToken");


  return isAuthenticated ? (
    <Route component={Component} {...rest} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
