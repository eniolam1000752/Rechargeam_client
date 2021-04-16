import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./Tooltip.scss";

const Tooltip = () => {
  const [state, setState] = useState(true);

  console.log(state);
  return (
    <div className="toolcontainer" style={{ display: state ? "flex" : "none" }}>
      <div className="tooltip">
        <span>
          you are on normal user account. Kindly upgrade to reseller account
          with ₦ 1,000, to enjoy great benefits.
        </span>
        <div>
          <a href="">
            <b>Make payments here</b>
          </a>
        </div>
      </div>
      <Button
        bgColor="transparent"
        text="×"
        textColor="var(--black-color)"
        onPress={() => {
          console.log("pressed");
          setState(!state);
        }}
      />
    </div>
  );
};

export default Tooltip;
