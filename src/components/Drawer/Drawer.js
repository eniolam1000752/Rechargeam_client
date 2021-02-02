import React from "react";
import "./Drawer.scss";

export function Drawer({ show, isLeft }) {
  return (
    <div className={`drawer-wrapper ${show ? "show" : ""}`}>
      <div className="drawer"></div>
    </div>
  );
}
