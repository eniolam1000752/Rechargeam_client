import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ReferSection } from "../../components/ReferSection/ReferSection";
import { Table } from "../../components/Table/Table";
import { Wallet } from "../../components/Wallet/Wallet";
import { useController, useDashboardController } from "./Dashboard.controller";
import "./Dashboard.scss";
import loader from "../../assets/svgs/loader.svg";

export function DashbaordScreen({}) {
  const { state, dispatch, userData } = useDashboardController();
  return (
    <div className="dashboard-screen-wrapper">
      <div className="welcome-back-wrapper">
        <span>Welcome back</span>
        <div>
          <span>
            {state.isLoading
              ? ""
              : (userData || { customer: {} }).customer.username}
          </span>
        </div>
      </div>
      <div className="wallet-section">
        <div>
          <div className="my-wallet-text">
            <span>My Wallet</span>
          </div>
          <Wallet isLoading={state.isLoading} onFundWallet={() => {}} />
        </div>
        <div className="quick-service-selection">
          <Button
            bgColor="var(--grey5-color)"
            isRound
            horizontalInsetPadding={0}
            verticalInsetPadding={0}
          >
            <Link className="service-selection-btn" to="/dashboard/airtime">
              <i className="fa fa-sim-card" />
              <span>Airtime</span>
            </Link>
          </Button>
          <Button
            bgColor="var(--grey5-color)"
            isRound
            horizontalInsetPadding={0}
            verticalInsetPadding={0}
          >
            <Link className="service-selection-btn" to="/dashboard/data">
              <i className="fa fa-sim-card" />
              <span>Data</span>
            </Link>
          </Button>
          {/* <Button bgColor="var(--grey5-color)" isRound>
            <div className="service-selection-btn">
              <i className="fa fa-exchange-alt" />
              <span>Bills</span>
            </div>
          </Button> */}
        </div>
      </div>
      <ReferSection url={(userData || { customer: {} }).customer.referralUrl} />
      <div style={{ height: 60 }} />
      <Table
        data={[]}
        onDataSelected={() => {}}
        onBillsSelected={() => {}}
        onAirtimeSelected={() => {}}
        onAllSelected={() => {}}
      />
    </div>
  );
}
