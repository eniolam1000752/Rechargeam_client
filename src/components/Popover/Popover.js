import "./Popover.scss";
import React, { useEffect } from "react";

export function Popover({ event, show, onDismiss, children }) {
  //@state
  let showStatus = show;
  //@state
  let delayedShow = false;

  useEffect(() => {
    showStatus = show;
    if (show) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style = {};
    }
  }, [show]);

  useEffect(() => {
    setTimeout(() => (delayedShow = showStatus), 100);
  }, [showStatus]);

  return (
    <div
      className="popover-wrapper"
      style={{
        display: showStatus || delayedShow ? "block" : "none",
      }}
    >
      <div
        onClick={() => {
          onDismiss();
          showStatus = false;
        }}
        className="popover-overlay"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`popover popover-for-header ${!delayedShow ? "hide" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
