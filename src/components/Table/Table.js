import React from "react";
import { Button } from "../Button/Button";

import "./Table.scss";

export function Table({ data }) {
  //@state
  let selectedIndex = 0;

  const tabActions = [
    {
      text: "All",
      onPress: () => {
        selectedIndex = 0;
      },
    },
    {
      text: "Airtime",
      onPress: () => {
        selectedIndex = 1;
      },
    },
    {
      text: "Data",
      onPress: () => {
        selectedIndex = 2;
      },
    },
    {
      text: "Bills",
      onPress: () => {
        selectedIndex = 3;
      },
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="table-container">
        <div className="row table-header-text-wrapper">
          <div className="col6">
            <span className="table-header-text">Transactions</span>
          </div>
          <div className="col6 ">
            <div className="action-tab-container">
              {tabActions.map((item, index) => (
                <Button
                  noElevation
                  bgColor="transparent"
                  onPress={item.onPress}
                >
                  <div className="tab-btn">
                    <span className={selectedIndex === index ? "selected" : ""}>
                      {item.text}
                    </span>
                    {selectedIndex === index && <div className="tab-tint" />}
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <table className="table">
          <tr className="table-head">
            <th>kjsdkf</th>
            <th>kjsdkf</th>
            <th>kjsdkf</th>
            <th>kjsdkf</th>
            <th>kjsdkf</th>
            <th>kjsdkf</th>
            <th>kjsdkf</th>
            <th>kjsdkf</th>
          </tr>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1].map((item) => (
            <tr>
              <td>kjsdkf</td>
              <td>kjsdkf</td>
              <td>kjsdkf</td>
              <td>kjsdkf</td>
              <td>kjsdkf</td>
              <td>kjsdkf</td>
              <td>kjsdkf</td>
              <td>kjsdkf</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
