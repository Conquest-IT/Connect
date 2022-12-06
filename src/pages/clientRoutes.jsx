import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Home from "./home/home";
import ProfileLayout from "../layout/profileLayout/ProfileLayout.component";
import About from "./about/About";

export default function clientRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<ProfileLayout />}>
            <Route exact path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>

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
    </div>
  );
}
