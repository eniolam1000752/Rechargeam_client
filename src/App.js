import "./App.scss";
import React, { useEffect } from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { ROUTES } from "./lib/routes";
import { createBrowserHistory } from "history";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { AppProvider } from "./components/AppProvider/AppProvider";
import { globals } from "./lib/globals";
import { AlertUI } from "./components/Alert/Alert";

function App() {
  const customHistory = createBrowserHistory();

  const appData = { isLoading: false, userData: null };
  globals.token = localStorage.getItem("token");

  return (
    <>
      <AlertUI />
      <AppProvider initValues={appData}>
        <div className="app lightTheme">
          <Router history={customHistory}>
            <Switch>
              <Route
                exact
                path={[
                  "/",
                  "/home",
                  "/signUp",
                  "/login",
                  "/forgotPassword",
                  "/reviews",
                  "/aboutus",
                ]}
              >
                <LandingPage />
              </Route>
              <Route
                exact
                path={[
                  "/dashboard",
                  "/dashboard/airtime",
                  "/dashboard/data",
                  "/dashboard/transactions",
                  "/dashboard/Account",
                ]}
              >
                <Dashboard />
              </Route>
              <Redirect to={ROUTES.landingPage} />
            </Switch>
          </Router>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
