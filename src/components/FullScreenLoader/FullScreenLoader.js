import React from "react";
import { Button } from "../Button/Button";
import "./FullScreenLoader.scss";

import loader from "../../assets/svgs/loader.svg";

export function FullScreenLoader({ show, text }) {
  return show ? (
    <div className="full-screen-loader">
      <img src={loader} />
      <span>{text}</span>
    </div>
  ) : null;
}
