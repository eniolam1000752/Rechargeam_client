import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export function Button({
  children,
  text,
  link,
  href,
  bgColor,
  onPress,
  textColor,
  isRounded,
  insetPadding,
  horizontalInsetPadding,
  verticalInsetPadding,
  horizontalMargin,
  noElevation,
  isLoading,
  isSubmit,
}) {
  const [showTransparent, setShowTransparent] = useState(false);

  try {
    return (
      <div
        className={`button ${noElevation ? "no-elevation" : ""}`}
        onClick={onPress || (() => {})}
        onMouseDown={() => setShowTransparent(true)}
        onMouseUp={() => setShowTransparent(false)}
        onMouseLeave={() => setShowTransparent(false)}
        onMouseOut={() => setShowTransparent(false)}
      >
        {link ? (
          <Link
            to={link}
            className={`btn ${isRounded ? "rounded" : "flat"}`}
            style={{
              backgroundColor: bgColor || null,
              paddingLeft: insetPadding || horizontalInsetPadding,
              paddingRight: insetPadding || horizontalInsetPadding,
              paddingTop: insetPadding || verticalInsetPadding,
              paddingBottom: insetPadding || verticalInsetPadding,
              opacity: showTransparent && 0.4,
              marginLeft: horizontalMargin,
              marginRight: horizontalMargin,
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            {isLoading ? (
              <i className="fa fa-spinner" />
            ) : text ? (
              <span style={{ color: textColor || "var(--white-color)" }}>
                {text}
              </span>
            ) : (
              children
            )}
          </Link>
        ) : href ? (
          <a
            href={href}
            className={`btn ${isRounded ? "rounded" : "flat"}`}
            style={{
              backgroundColor: bgColor || null,
              paddingLeft: insetPadding || horizontalInsetPadding,
              paddingRight: insetPadding || horizontalInsetPadding,
              paddingTop: insetPadding || verticalInsetPadding,
              paddingBottom: insetPadding || verticalInsetPadding,
              opacity: showTransparent && 0.4,
              marginLeft: horizontalMargin,
              marginRight: horizontalMargin,
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            {isLoading ? (
              <i className="fa fa-spinner" />
            ) : text ? (
              <span style={{ color: textColor || "var(--white-color)" }}>
                {text}
              </span>
            ) : (
              children
            )}
          </a>
        ) : (
          <button
            type={isSubmit ? "submit" : undefined}
            disabled={isLoading}
            className={`btn ${isRounded ? "rounded" : "flat"}`}
            style={{
              backgroundColor: bgColor || null,
              paddingLeft: insetPadding || horizontalInsetPadding,
              paddingRight: insetPadding || horizontalInsetPadding,
              paddingTop: insetPadding || verticalInsetPadding,
              paddingBottom: insetPadding || verticalInsetPadding,
              opacity: showTransparent && 0.4,
              marginLeft: horizontalMargin,
              marginRight: horizontalMargin,
            }}
          >
            {isLoading ? (
              <i className="fa fa-spinner" />
            ) : text ? (
              <span style={{ color: textColor || "var(--white-color)" }}>
                {text}
              </span>
            ) : (
              children
            )}
          </button>
        )}
      </div>
    );
  } catch (exp) {
    return <span>{JSON.stringify(exp)}</span>;
  }
}
