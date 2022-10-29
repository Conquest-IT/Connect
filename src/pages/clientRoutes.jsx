import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./signup/Signup";
import Login from "./login/Login";

export default function clientRoutes() {
    return (
        <div>
            <Router>
                {true ? (
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                )}
            </Router>
        </div>
    );
}
