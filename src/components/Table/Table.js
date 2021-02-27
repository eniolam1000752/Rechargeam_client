import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import loader from "../../assets/svgs/loader.svg";

import "./Table.scss";
import { API } from "../../lib/api";

export function Table({
  data,
  onDataSelected,
  onBillsSelected,
  onAirtimeSelected,
  onAllSelected,
}) {
  //@state
  let selectedIndex = 0;
  //@state
  let isLoading = true;
  //@state
  let errMsg = null;
  //@state
  let transactions = [];
  //@state
  let renderedTransactions = [];
  //@state
  let shouldGetTransactions = true;

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

  useEffect(() => {
    if (shouldGetTransactions) {
      isLoading = true;
      API.getTransactions()
        .then(({ transactions: trans }) => {
          transactions = trans;
        })
        .catch((err) => {
          errMsg = err;
        })
        .finally(() => {
          shouldGetTransactions = isLoading = false;
        });
    }
  }, [shouldGetTransactions]);

  return isLoading ? (
    <div className="table-loader-fallback">
      <img src={loader} className="loader" />
      <span>Loading transactions</span>
    </div>
  ) : (
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
        {errMsg ? (
          <div className="error-msg-section">
            <span>'kjkjsdf'</span>
            <div className="retry-btn">
              <Button
                text="Retry"
                horizontalInsetPadding={25}
                onPress={() => (shouldGetTransactions = true)}
              />
            </div>
          </div>
        ) : transactions.length <= 0 ? (
          <div className="msg-section">
            <span>You don't have a transaction record at the moment.</span>
          </div>
        ) : (
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
            {transactions.fill("").map((item, index) => (
              <tr key={`row_${index}`}>
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
        )}
      </div>
    </div>
  );
}
