import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { Title } from "../../components/Title/Title";
import { useController } from "./SignIn.controller";
import "./SignIn.scss";

export function SignIn({}) {
  const history = useHistory();
  const { state, dispatch, onLogin } = useController(history);

  return (
    <div className="sign-in">
      <div className="header-title-wrapper">
        <Link className="sign-up-link" to="/signUp">
          Don't have an account? <b>Sign up</b>
        </Link>
        <div style={{ width: "100%" }}>
          <Title align="left" text="Sign In" />
        </div>
      </div>
      <div className="input-fields-wrapper">
        <InputText
          value={state.email}
          placeholder="Email"
          onChangeText={(email) => {
            dispatch({ email });
          }}
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
        <Link className="forget-password-link" to="forgotPassword">
          <b>Forgot Password</b>
        </Link>
        <div style={{ height: 30 }} />
        <span className="error-msg">{state.errorMsg}</span>
        <div style={{ height: 10 }} />
        <Button
          text={"Login"}
          isLoading={state.isLoading}
          horizontalInsetPadding={30}
          verticalInsetPadding={14}
          onPress={onLogin}
        />
        <div style={{ height: 60 }} />
      </div>
    </div>
  );
}
