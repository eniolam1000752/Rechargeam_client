import React from "react";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { NetworkSelector } from "../../components/NetworkSelector/NetworkSelector";
import { Wallet } from "../../components/Wallet/Wallet";
import "./Data.scss";

export function DataScreen({}) {
  return (
    <div className="airtime-screen-wrapper">
      <div className="my-wallet-section">
        <Wallet />
      </div>
      <div className="form-section">
        <NetworkSelector />
        <div className="input-section">
          <InputText placeholder="Enter phone number" />
          <div style={{ margin: 40 }} />
          <div style={{ margin: 40 }} />
          <InputText placeholder="Enter description" />
          <div style={{ margin: 60 }} />
          <Button text="Fund my line" />
        </div>
      </div>
    </div>
  );
}