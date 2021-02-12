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
}) {
  const [showTransparent, setShowTransparent] = useState(false);
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
          {text ? (
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
          {text ? (
            <span style={{ color: textColor || "var(--white-color)" }}>
              {text}
            </span>
          ) : (
            children
          )}
        </a>
      ) : (
        <button
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
          {text ? (
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
}
