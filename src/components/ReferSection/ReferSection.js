import React from "react";
import { Button } from "../Button/Button";
import "./ReferSection.scss";

export function ReferSection() {
  return (
    <section className="refer-section-wrapper">
      <div className="section-content">
        <div className="title">
          <span>
            Refer and earn a one-time ₦ 500 when your down line transact on
            Rechargeam
          </span>
        </div>
        <div className="refer-content">
          <span>https://www.rechargeam.com/page/create/username/512639</span>
          <Button
            bgColor="var(--grey2-color)"
            text="copy to clipboard"
            horizontalInsetPadding={15}
          />
          <div className="vertical-line" />
          <span>or share on</span>
          <div className="social-button-wrapper">
            <Button
              isRounded
              link={"/fb"}
              horizontalInsetPadding={13}
              bgColor="rgba(255,255,255,1)"
            >
              <i className="fab fa-facebook-f" />
            </Button>
            <Button
              isRounded
              link={"/fb"}
              horizontalInsetPadding={11}
              bgColor="rgba(255,255,255,1)"
              horizontalMargin={10}
            >
              <i className="fab fa-instagram" />
            </Button>
            <Button
              isRounded
              link={"/fb"}
              horizontalInsetPadding={10}
              bgColor="rgba(255,255,255,1)"
            >
              <i className="fab fa-twitter" />
            </Button>
            <Button
              isRounded
              link={"/fb"}
              horizontalInsetPadding={11}
              bgColor="rgba(255,255,255,1)"
              horizontalMargin={10}
            >
              <i className="fab fa-linkedin-in" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
