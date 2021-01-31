import React, { useState } from "react";
import "./Button.scss";

export function Button({
  children,
  text,
  bgColor,
  onPress,
  textColor,
  isRounded,
  insetPadding,
  horizontalInsetPadding,
  verticalInsetPadding,
}) {
  const [showTransparent, setShowTransparent] = useState(false);
  return (
    <div
      className="button"
      onClick={onPress || (() => {})}
      onMouseDown={() => setShowTransparent(true)}
      onMouseUp={() => setShowTransparent(false)}
    >
      <button
        className={`btn ${isRounded ? "rounded" : "flat"}`}
        style={{
          backgroundColor: bgColor || null,
          paddingLeft: insetPadding || horizontalInsetPadding,
          paddingRight: insetPadding || horizontalInsetPadding,
          paddingTop: insetPadding || verticalInsetPadding,
          paddingBottom: insetPadding || verticalInsetPadding,
          opacity: showTransparent && 0.4,
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
    </div>
  );
}
