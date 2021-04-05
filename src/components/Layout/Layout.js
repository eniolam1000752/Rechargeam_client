import React from "react";
import { Header } from "../Header/Header";
import "./Layout.scss";

import logo from "../../assets/svgs/logo.svg";
import { Button } from "../Button/Button";
import { Link, Route, Router, Switch, useLocation } from "react-router-dom";

export function Layout({ routes }) {
  //@state
  let collapseLeftPane = false;

  const location = useLocation();

  return (
    <div className="layout">
      <Header forDashboard logo={logo} />
      <div className="layout-body">
        <div
          className="left-pane"
          style={{ width: collapseLeftPane ? 60 : undefined }}
        >
          <div className="view-mode-btn-wrapper">
            <Button
              verticalInsetPadding={11.5}
              horizontalInsetPadding={12.45}
              isRounded
              bgColor={"var(--white-color)"}
              onPress={() => {
                collapseLeftPane = !collapseLeftPane;
              }}
            >
              <i
                className={`fa ${
                  collapseLeftPane
                    ? "fa-angle-double-right"
                    : "fa-angle-double-left"
                }`}
              />
            </Button>
          </div>
          <div className="content-wrapper">
            {routes.map((item, index) =>
              item.onClick ? (
                <div
                  key={`links_${index}`}
                  className={`link ${
                    location.pathname === item.path ? "visited" : ""
                  } ${collapseLeftPane ? "only-icon" : ""}`}
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    borderWidth: 0,
                  }}
                  onClick={item.onClick}
                >
                  <div className="link-icon">
                    <i className={item.icon} />
                  </div>
                  {!collapseLeftPane && <span to="#">{item.text}</span>}
                </div>
              ) : (
                <Link
                  key={`links_${index}`}
                  className={`link ${
                    location.pathname === item.path ? "visited" : ""
                  } ${collapseLeftPane ? "only-icon" : ""}`}
                  to={item.path}
                >
                  <div className="link-icon">
                    <i className={item.icon} />
                  </div>
                  {!collapseLeftPane && <span to="#">{item.text}</span>}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="right-pane">
          <Switch>
            {routes.map((item, key) => (
              <Route key={`route_${key}`} exact path={item.path}>
                {item.component}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
}
