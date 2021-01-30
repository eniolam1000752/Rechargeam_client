import "./App.scss";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { ROUTES } from "./lib/routes";
import { createBrowserHistory } from "history";

function App() {
  const customHistory = createBrowserHistory();

  return (
    <div className="app lightTheme">
      <Router history={customHistory}>
        <Switch>
          <Route path={ROUTES.landingPage}>
            <LandingPage />
          </Route>
          <Redirect to={ROUTES.landingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
