import React from "react";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { NetworkSelector } from "../../components/NetworkSelector/NetworkSelector";
import { Wallet } from "../../components/Wallet/Wallet";
import { useController } from "./Data.controller";
import "./Data.scss";

export function DataScreen({}) {
  const { state, dispatch, buy } = useController();

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

          <div style={{ height: 30 }} />
          <span className="error-msg">{state.errorMsg}</span>
          <div style={{ height: 10 }} />
          <Button text="Fund my line" />
        </div>
      </div>
    </div>
  );
}
