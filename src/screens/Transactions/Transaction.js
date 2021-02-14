import React from "react";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { ReferSection } from "../../components/ReferSection/ReferSection";
import { Table } from "../../components/Table/Table";
import { Wallet } from "../../components/Wallet/Wallet";
import "./Transaction.scss";

export function TransactionScreen({}) {
  return (
    <div className="dashboard-screen-wrapper">
      <div style={{ height: 60 }} />
      <div className="row">
        <div className="col6">
          <div className="date-selection-wrapper">
            <Button bgColor="white">
              <div className="date-selector">
                <span>start date</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="col6">
          <div className="align-right">
            <div className="search-input">
              <InputText placeholder="search" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 20 }} />
      <Table />
    </div>
  );
}
