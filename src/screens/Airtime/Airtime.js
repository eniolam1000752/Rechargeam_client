import React from "react";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { NetworkSelector } from "../../components/NetworkSelector/NetworkSelector";
import { Wallet } from "../../components/Wallet/Wallet";
import { useController } from "./Airtime.controller";
import "./Airtime.scss";
import Tooltip from "../../components/Tooltip/Tooltip";

export function AirtimeScreen({}) {
  const { state, dispatch, buy } = useController();

  return (
    <div className="airtime-screen-wrapper">
      <div className="t">
        <div className="Tooltip-section">
          <Tooltip />
        </div>
        <div className="my-wallet-section">
          <Wallet />
        </div>
      </div>

      <div className="form-section">
        <NetworkSelector
          onSelected={(item) => {
            dispatch({ selectedNetwork: item.network });
            dispatch({ selectedNetworkIndex: item.index });
          }}
          selectedIndex={state.selectedNetworkIndex}
        />
        <div className="input-section">
          <InputText
            placeholder="Enter phone number"
            value={state.phone}
            onChangeText={(phone) => dispatch({ phone })}
            type="number"
          />
          <div style={{ margin: 40 }} />
          <InputText
            placeholder="Enter amount here"
            value={state.amount}
            onChangeText={(amount) => dispatch({ amount })}
            type="number"
          />
          <div style={{ margin: 40 }} />
          <InputText
            placeholder="Enter description"
            value={state.description}
            onChangeText={(description) => dispatch({ description })}
          />
          <div style={{ height: 30 }} />
          <span className="error-msg">{state.errorMsg}</span>
          <div style={{ height: 10 }} />
          <Button
            text="Buy Airtime"
            onPress={buy}
            isLoading={state.isLoading}
          />
        </div>
      </div>
    </div>
  );
}
