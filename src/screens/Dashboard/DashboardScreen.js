import React from "react";
import { Button } from "../../components/Button/Button";
import { ReferSection } from "../../components/ReferSection/ReferSection";
import { Table } from "../../components/Table/Table";
import { Wallet } from "../../components/Wallet/Wallet";
import "./Dashboard.scss";

export function DashbaordScreen({}) {
  return (
    <div className="dashboard-screen-wrapper">
      <div className="welcome-back-wrapper">
        <span>Welcome back</span>
        <div>
          <span>Eniola</span>
        </div>
      </div>
      <div className="wallet-section">
        <div>
          <div className="my-wallet-text">
            <span>My Wallet</span>
          </div>
          <Wallet onFundWallet={() => {}} />
        </div>
        <div className="quick-service-selection">
          <Button bgColor="var(--grey5-color)" isRound>
            <div className="service-selection-btn">
              <i className="fa fa-mobile" />
              <span>Airtime</span>
            </div>
          </Button>
          <Button bgColor="var(--grey5-color)" isRound>
            <div className="service-selection-btn">
              <i className="fa fa-sim-card" />
              <span>Data</span>
            </div>
          </Button>
          <Button bgColor="var(--grey5-color)" isRound>
            <div className="service-selection-btn">
              <i className="fa fa-exchange-alt" />
              <span>Bills</span>
            </div>
          </Button>
        </div>
      </div>
      <ReferSection />
      <div style={{ height: 60 }} />
      <Table />
    </div>
  );
}
