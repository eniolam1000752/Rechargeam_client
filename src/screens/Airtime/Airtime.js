import React from "react";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { NetworkSelector } from "../../components/NetworkSelector/NetworkSelector";
import { Wallet } from "../../components/Wallet/Wallet";
import { useController } from "./Airtime.controller";
import "./Airtime.scss";

export function AirtimeScreen({}) {
  const { state, dispatch, buy } = useController();

  return (
    <div className="airtime-screen-wrapper">
      <div className="my-wallet-section">
        <Wallet />
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
          <div style={{ margin: 60 }} />
          <Button text="Buy Airtime" onPress={buy} />
        </div>
      </div>
    </div>
  );
}
