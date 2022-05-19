import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../auth/login";
import Register from "../auth/register";
import HeroSec from "../layout-landing/heroSection";
import LayoutComp from "../layout-landing/layoutComp";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LayoutComp>
              <HeroSec />
            </LayoutComp>
          </Route>

          <Route exact path="/Home">
            <LayoutComp>
              <HeroSec />
            </LayoutComp>
          </Route>

          <Route exact path="/Login">
            <LayoutComp>
              <Login />
            </LayoutComp>
          </Route>

          <Route exact path="/Register">
            <LayoutComp>
              <Register />
            </LayoutComp>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
