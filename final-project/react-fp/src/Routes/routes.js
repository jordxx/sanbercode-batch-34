import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../auth/login";
import Register from "../auth/register";
import { RouteJobProvider } from "../data-job/jobContext";
import JobForm from "../data-job/jobForm";
import RouteJob from "../data-job/routeJob";
import Dashboard from "../layout-dashboard/dashboard";
import LayoutDashboard from "../layout-dashboard/layoutDashboard";
import SettingUser from "../layout-dashboard/settingDash";
import HeroSec from "../layout-landing/heroSection";
import LayoutComp from "../layout-landing/layoutComp";
import VacancyDetail from "../layout-landing/vacancyDetail";
import VacancySec from "../layout-landing/vacancySection";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./protectedRoute";

const Routes = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <RouteJobProvider>
                <LayoutComp>
                  <HeroSec />
                </LayoutComp>
              </RouteJobProvider>
            </Route>

            <Route exact path="/Home">
              <LayoutComp>
                <HeroSec />
              </LayoutComp>
            </Route>

            <Route exact path="/Vacancy">
              <RouteJobProvider>
                <VacancySec />
              </RouteJobProvider>
            </Route>

            <Route exact path="/Vacancy-detail/:slug">
              <RouteJobProvider>
                <VacancyDetail />
              </RouteJobProvider>
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

            <ProtectedRoute exact path="/Dashboard">
              <LayoutDashboard>
                <Dashboard />
              </LayoutDashboard>
            </ProtectedRoute>

            <ProtectedRoute exact path="/Setting">
              <LayoutDashboard>
                <SettingUser />
              </LayoutDashboard>
            </ProtectedRoute>

            <Route exact path="/Job">
              <LayoutDashboard>
                <RouteJob />
              </LayoutDashboard>
            </Route>

            <RouteJobProvider>
              <LayoutDashboard>
                <Route exact path="/Job-form" component={JobForm} />
              </LayoutDashboard>

              <LayoutDashboard>
                <Route exact path="/Job/edit/:Id" component={JobForm} />
              </LayoutDashboard>
            </RouteJobProvider>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default Routes;
