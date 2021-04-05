import React, { useEffect } from "react";

import "./Drawer.scss";

export function Drawer({ onShow, show, onDismiss, children }) {
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
    setTimeout(() => (delayedShow = showStatus), 400);
  }, [showStatus]);

  return (
    <div
      className="drawer-wrapper"
      onClick={() => {
        onDismiss();
        showStatus = false;
      }}
      onScroll={(event) => event.stopPropagation()}
      style={{
        display: showStatus || delayedShow ? "block" : "none",
        opacity: !showStatus ? 0 : null,
      }}
    >
      <div
        className={`view-port ${!delayedShow ? "hide" : ""}`}
        onClick={(event) => event.stopPropagation()}
        style={{
          transform: !showStatus ? "translateX(350px)" : null,
        }}
      >
        <div className="inner-view-port-content">{children}</div>
      </div>
    </div>
  );
}
