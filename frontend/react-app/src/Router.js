import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth.js";
import PageError from "./components/PageError.js";

const Router = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Auth}/>
                <Route path="*" component={PageError} />
            </Switch>
        </>
    )
}

export default Router;