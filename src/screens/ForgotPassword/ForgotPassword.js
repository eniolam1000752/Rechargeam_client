import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { Title } from "../../components/Title/Title";
import { useController } from "./ForgotPassword.controller";
import "./SignUp.scss";

export function ForgotPassword({}) {
  const { state, dispatch } = useController();
  return (
    <div className="sign-in">
      <div className="header-title-wrapper">
        <Link className="sign-up-link" to="/login">
          Back to Login
        </Link>
        <div style={{ width: "100%" }}>
          <Title align="left" text="Forgot Password" />
        </div>
      </div>
      <div className="input-fields-wrapper">
        <InputText
          value={state.email}
          placeholder="Email"
          onChangeText={(email) => {
            dispatch({ email });
          }}
          topMargin={50}
          bottomMargin={30}
        />
        <div style={{ height: 60 }} />{" "}
        <Button
          text="Reset Password"
          horizontalInsetPadding={30}
          verticalInsetPadding={14}
        />
        <div style={{ height: 60 }} />
      </div>
    </div>
  );
}
