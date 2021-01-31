import "./Title.scss";
import React from "react";

export function Title({ text, hasUnderline, align, children }) {
  return (
    <div className={`title ${align === "right" ? "right" : "left"}`}>
      {text ? <span>{text}</span> : children}
      <div
        className={
          align === "center"
            ? "underline-center"
            : align === "right"
            ? "underline-right"
            : null
        }
      />
    </div>
  );
}
