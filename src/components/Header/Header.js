import "./Header.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../lib/routes";

export function Header({ logo, hasAuth, shouldStick, actions }) {
  const location = useLocation();
  console.log(location);
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} className="logo" />
      </div>
      <div>
        <div className="header-actions">
          {actions.map((item, index) => (
            <div key={`header-action-${index}`} className="action">
              <Link
                className="action-link"
                to={item.path}
                style={{
                  fontWeight: location.pathname === item.path ? "600" : "300",
                }}
              >
                <span
                  style={{
                    fontWeight: location.pathname === item.path ? "600" : "300",
                    color:
                      location.pathname === item.path && "var(--primary-color)",
                  }}
                >
                  {item.title}
                </span>
              </Link>
            </div>
          ))}
          <div className="divider-wrapper">
            <div className="v-divider" />
          </div>
          <div key={`header-action-login`} className="auth-action">
            <Link
              className="action-link"
              to={`/login`}
              style={{
                fontWeight: location.pathname === "/login" ? "600" : "300",
              }}
            >
              <span
                style={{
                  fontWeight: location.pathname === "/login" ? "600" : "300",
                  color:
                    location.pathname === "/login" && "var(--primary-color)",
                }}
              >
                Login
              </span>
            </Link>
          </div>
          <div key={`header-action-signup`} className="auth-action">
            <div className="rounded-wrapper">
              <Link
                className="action-link"
                to={`/signUp`}
                style={{
                  fontWeight: location.pathname === "/signUp" ? "600" : "300",
                }}
              >
                <span
                  style={{
                    fontWeight: location.pathname === "/signUp" ? "600" : "300",
                    color:
                      location.pathname === "/signUp" && "var(--white-color)",
                  }}
                >
                  Sign up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
