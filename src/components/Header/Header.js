import "./Header.scss";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Button/Button";
import { Popover } from "../Popover/Popover";

import eniola from "../../assets/images/eni 2.png";
import { AppContext } from "../AppProvider/AppProvider";

export function Header({ logo, hasAuth, shouldStick, actions, forDashboard }) {
  const { userData } = useContext(AppContext);
  const location = useLocation();

  //@state
  let isFixed = false;
  //@state
  let showPopover = false;

  //@init()
  const onMount = () => {
    document.querySelector("body").onscroll = (event) => {
      isFixed = document.querySelector("html").scrollTop >= 2;
    };
  };

  return (
    <>
      <Popover
        show={showPopover}
        onDismiss={() => {
          showPopover = false;
        }}
      >
        <div className="popover-menu-wrapper">
          {!forDashboard
            ? actions.map((item, index) => (
                <div
                  key={`header-action-${index}`}
                  className="popover-menu-items"
                  onClick={() => (showPopover = false)}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="action-link"
                      style={{
                        fontWeight:
                          location.pathname === item.path ? "600" : "300",
                      }}
                    >
                      <span
                        style={{
                          fontWeight:
                            location.pathname === item.path ? "600" : "300",
                          color:
                            location.pathname === item.path &&
                            "var(--primary-color)",
                        }}
                      >
                        {item.title}
                      </span>
                    </a>
                  ) : (
                    <Link
                      className="action-link"
                      to={item.path}
                      style={{
                        fontWeight:
                          location.pathname === item.path ? "600" : "300",
                      }}
                    >
                      <span
                        style={{
                          fontWeight:
                            location.pathname === item.path ? "600" : "300",
                          color:
                            location.pathname === item.path &&
                            "var(--primary-color)",
                        }}
                      >
                        {item.title}
                      </span>
                    </Link>
                  )}
                </div>
              ))
            : null}

          <div
            key={`header-action-login`}
            className="popover-menu-items"
            onClick={() => (showPopover = false)}
          >
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
          <div
            key={`header-action-signup`}
            className="popover-menu-items"
            onClick={() => (showPopover = false)}
          >
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
      </Popover>
      {isFixed ? <div className="fake-header" /> : null}
      <div
        className={`header ${isFixed ? "fixed" : ""}`}
        style={{
          height: forDashboard ? 40 : undefined,
          boxShadow: forDashboard
            ? "0px 3px 30px rgba(0, 0, 0, 0.12)"
            : undefined,
        }}
      >
        <Link className="header-logo" to="/">
          <img src={logo} className="logo" />
        </Link>
        <span style={{ marginTop: 6 }}> echargeam</span>
        <div>
          <div
            className={`header-menu-button ${
              forDashboard ? "no-dashbaord" : ""
            }`}
          >
            <Button
              isRounded
              horizontalInsetPadding={11}
              bgColor="white"
              onPress={() => (showPopover = true)}
            >
              <i className="fa fa-bars" />
            </Button>
          </div>
          <div
            className={`header-actions ${forDashboard ? "no-dashbaord" : ""}`}
          >
            {!forDashboard
              ? actions.map((item, index) => (
                  <div key={`header-action-${index}`} className="action">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="action-link"
                        style={{
                          fontWeight:
                            location.pathname === item.path ? "600" : "300",
                        }}
                      >
                        <span
                          style={{
                            fontWeight:
                              location.pathname === item.path ? "600" : "300",
                            color:
                              location.pathname === item.path &&
                              "var(--primary-color)",
                          }}
                        >
                          {item.title}
                        </span>
                      </a>
                    ) : (
                      <Link
                        className="action-link"
                        to={item.path}
                        style={{
                          fontWeight:
                            location.pathname === item.path ? "600" : "300",
                        }}
                      >
                        <span
                          style={{
                            fontWeight:
                              location.pathname === item.path ? "600" : "300",
                            color:
                              location.pathname === item.path &&
                              "var(--primary-color)",
                          }}
                        >
                          {item.title}
                        </span>
                      </Link>
                    )}
                  </div>
                ))
              : null}
            {!forDashboard ? (
              <>
                <div className="divider-wrapper">
                  <div className="v-divider" />
                </div>
                <div key={`header-action-login`} className="auth-action">
                  <Link
                    className="action-link"
                    to={`/login`}
                    style={{
                      fontWeight:
                        location.pathname === "/login" ? "600" : "300",
                    }}
                  >
                    <span
                      style={{
                        fontWeight:
                          location.pathname === "/login" ? "600" : "300",
                        color:
                          location.pathname === "/login" &&
                          "var(--primary-color)",
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
                        fontWeight:
                          location.pathname === "/signUp" ? "600" : "300",
                      }}
                    >
                      <span
                        style={{
                          fontWeight:
                            location.pathname === "/signUp" ? "600" : "300",
                          color:
                            location.pathname === "/signUp" &&
                            "var(--white-color)",
                        }}
                      >
                        Sign up
                      </span>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="profile-avatar-wrapper">
                <div className="profile-text-wrapper">
                  <span>
                    {(userData || { customer: {} }).customer.username}
                  </span>
                  <div>
                    <span>{(userData || { customer: {} }).customer.email}</span>
                  </div>
                </div>
                <img src={eniola} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
