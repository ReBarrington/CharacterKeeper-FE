import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Login.js";
import ForgotPassword from "./ForgotPassword.js";


const Auth = () => {
  return (
        <Switch>
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/" component={Login} />
        </Switch>

  );
};

export default Auth;
