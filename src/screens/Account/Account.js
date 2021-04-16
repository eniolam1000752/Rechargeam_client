import React from "react";
import { ReferSection } from "../../components/ReferSection/ReferSection";
import Tooltip from "../../components/Tooltip/Tooltip";
import { Wallet } from "../../components/Wallet/Wallet";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { useDashboardController } from "../Dashboard/Dashboard.controller";
import "./Account.scss";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

function Account() {
  const { userData } = useDashboardController();
  return (
    <div className="element-container">
      <div className="profile">
        <ProfilePicture />
      </div>

      <div class="toolandwallet">
        <div className="Tooltip2">
          <Tooltip />
        </div>
        <div className="my-wallet-section">
          <Wallet />
        </div>
      </div>
      <div>
        <ReferSection
          url={(userData || { customer: {} }).customer.referralUrl}
        />
      </div>
      <div className="hed">
        <h4>My Profile</h4>
      </div>

      <div className="input-continer">
        <div className="input1">
          <InputText topMargin={30} placeholder="Name" type="text" />
          <InputText topMargin={30} placeholder="Account Name" type="text" />
          <InputText topMargin={30} placeholder="Account Number" type="text" />
          <InputText topMargin={30} placeholder="Select bank" type="text" />
        </div>
        <div className="input2">
          <InputText
            topMargin={30}
            placeholder="Select Account Type"
            type="text"
          />
          <InputText
            topMargin={30}
            placeholder="Confirm password"
            type="password"
          />
          <div className="anckle">
            <a href="">Update password</a>
          </div>
        </div>
      </div>
      <div className="button">
        <Button text="update" horizontalInsetPadding={50}></Button>
      </div>
    </div>
  );
}

export default Account;
