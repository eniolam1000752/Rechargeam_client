import React from "react";

import walletBackground from "../../assets/svgs/wallet-background.svg";
import loader from "../../assets/svgs/loader.svg";
import { Button } from "../Button/Button";

import "./Wallet.scss";
import piggy from "../../assets/svgs/piggy-bank.svg";

export function Wallet({
  onFundWallet,
  commision,
  balance,
  totalBalance,
  userType,
  isLoading,
}) {
  return (
    <div className="wallet-wrapper">
      {isLoading ? (
        <div>
          <img src={loader} className="loader" />
        </div>
      ) : (
        <>
          <img className="wallet-background" src={walletBackground} />
          <div className="row">
            <div className="col6">
              <div className="col-content">
                <div className="title-text-wrapper">
                  <span>Funded balance</span>
                  <div>
                    <span>₦ {balance || "0.00"}</span>
                  </div>
                </div>
                <div style={{ marginTop: 10 }} />
                <div className="title-text-wrapper">
                  <span>Comission</span>
                  <div>
                    <span>₦ {commision || "0.00"}</span>
                  </div>
                </div>
                <div className="total-wallet-amount">
                  <span>₦ {totalBalance || "0.00"}</span>
                </div>
              </div>
            </div>
            <div className="col6">
              <div className="col-content">
                <div className="user-type">
                  <span>normal user</span>
                </div>
                <div className="fund-wallet-btn-wrapper">
                  <Button
                    bgColor="var(--primary-color)"
                    onPress={() => {}}
                    isRounded
                  >
                    <img src={piggy} />
                  </Button>
                  <span>Fund</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
