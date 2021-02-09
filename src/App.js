import "./App.scss";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { ROUTES } from "./lib/routes";
import { createBrowserHistory } from "history";
import { Dashboard } from "./screens/Dashboard/Dashboard";

function App() {
  const customHistory = createBrowserHistory();

  return (
    <div className="app lightTheme">
      <Router history={customHistory}>
        <Switch>
          <Route
            exact
            path={["/", "/home", "/signUp", "/login", "/forgotPassword"]}
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
  );
}

export default App;
