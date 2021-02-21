import "./App.scss";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { ROUTES } from "./lib/routes";
import { createBrowserHistory } from "history";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { AppProvider } from "./components/AppProvider/AppProvider";
import { globals } from "./lib/globals";

function App() {
  const customHistory = createBrowserHistory();

  const appData = { isLoading: false, loginData: null };
  globals.token = localStorage.getItem("token");

  return (
    <AppProvider>
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
  );
}

export default App;
