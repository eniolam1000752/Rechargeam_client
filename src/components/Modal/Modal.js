import React, { useEffect } from "react";

import "./Modal.scss";

export function Modal({ show, translucent, onDismiss, children }) {
  //@state
  let innerShow = show;

  useEffect(() => {
    innerShow = show;
  }, [show]);

  const handleToggleModal = () => {
    innerShow = !innerShow;
    onDismiss();
  };

  return (
    <div
      onClick={handleToggleModal}
      className={`modal ${translucent ? "translucent" : ""}`}
      style={{ display: innerShow ? "block" : "none" }}
    >
      {children}
    </div>
  );
}
