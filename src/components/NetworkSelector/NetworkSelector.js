import React from "react";
import { Button } from "../Button/Button";
import mtn from "../../assets/images/mtn.png";
import airtel from "../../assets/images/airtel.jpg";
import dstv from "../../assets/images/dstv.png";
import glo from "../../assets/images/glo-logo.jpg";
import gotv from "../../assets/images/gotv.png";
import phcn from "../../assets/images/phcn.jpeg";
import airtimeImage from "../../assets/svgs/airtime_data_image.svg";
import billsImage from "../../assets/svgs/billspayment_image.svg";
import exchangeImage from "../../assets/svgs/exchange_image.svg";

import "./NetworkSelector.scss";

export function NetworkSelector({ selectedIndex, onSelected, onInitSelect }) {
  //@state

  let networdProviders = [
    { id: 1, name: "MTN" },
    { id: 2, name: "GLO" },
    { id: 3, name: "AIRTEL" },
  ];

  return (
    <div className="network-selector">
      <div>
        <span>Select Mobile operator</span>
      </div>
      <div className="network-selector-wrapper">
        {networdProviders.map((item, index) => (
          <div className="network">
            <Button
              bgColor="transparent"
              noElevation
              onPress={() => {
                onSelected({ index, network: item });
              }}
            >
              <div
                className={`network-image ${
                  selectedIndex === index ? "selected" : ""
                }`}
              >
                <img
                  alt={item.name}
                  src={
                    item.name === "MTN"
                      ? mtn
                      : item.name === "GLO"
                      ? glo
                      : airtel
                  }
                />
              </div>
            </Button>

            <div className="network-title">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
