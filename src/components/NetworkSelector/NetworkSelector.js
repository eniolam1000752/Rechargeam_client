import React from "react";
import { Button } from "../Button/Button";
import mtn from "../../assets/images/mtn.png";

import "./NetworkSelector.scss";

export function NetworkSelector({ selectedIndex, onSelected, onInitSelect }) {
  return (
    <div className="network-selector">
      <div>
        <span>Select Mobile operator</span>
      </div>
      <div className="network-selector-wrapper">
        {[1, 2, 3, 4].map((item, index) => (
          <div className="network">
            <Button bgColor="transparent" noElevation>
              <div className="network-image">
                <img src={mtn} />
              </div>
            </Button>

            <div className="network-title">
              <span>MTN</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
