import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./signup/Signup";
import Login from "./login/Login";


export default function clientRoutes() {
  return (
    <div>
      <Router>
        <Switch>
         
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />

        </Switch>

        {/* {true ? (
                    
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile}/>
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                )} */}
      </Router>
    </div>
  );
}
