import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { Title } from "../../components/Title/Title";
import { useController } from "./SignUp.controller";
import "./SignUp.scss";

export function SignUp({}) {
  const { state, dispatch } = useController();
  return (
    <div className="sign-in">
      <div className="header-title-wrapper">
        <Link className="sign-up-link" to="/login">
          I have an account? <b>Sign In</b>
        </Link>
        <div style={{ width: "100%" }}>
          <Title align="left" text="Sign Up" />
        </div>
      </div>
      <div className="input-fields-wrapper">
        <InputText
          value={state.username}
          placeholder="Username"
          onChangeText={(username) => {
            dispatch({ username });
          }}
        />
        <InputText
          value={state.email}
          placeholder="Email"
          onChangeText={(email) => {
            dispatch({ email });
          }}
          topMargin={50}
          bottomMargin={30}
        />
        <InputText
          value={state.phone}
          placeholder="(+234) Phone Number"
          onChangeText={(phone) => {
            dispatch({ phone });
          }}
          topMargin={50}
          bottomMargin={30}
        />
        <InputText
          isPassword
          value={state.password}
          placeholder="Password"
          onChangeText={(password) => {
            dispatch({ password });
          }}
          topMargin={50}
          bottomMargin={30}
        />
        <InputText
          isPassword
          value={state.cPassword}
          placeholder="Confirm Password"
          onChangeText={(password) => {
            dispatch({ password });
          }}
          topMargin={50}
          bottomMargin={30}
        />
        <div style={{ height: 60 }} />
        <Button
          text="Register"
          horizontalInsetPadding={30}
          verticalInsetPadding={14}
        />
        <div style={{ height: 60 }} />
      </div>
    </div>
  );
}
