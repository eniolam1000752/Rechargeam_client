import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { Title } from "../../components/Title/Title";
import { useController } from "./SignUp.controller";
import "./SignUp.scss";

export function SignUp({}) {
  const history = useHistory();
  const { state, dispatch, onSignUp } = useController(history);

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
      <form
        method="get"
        action="javascript:void(0)"
        className="input-fields-wrapper"
      >
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
          value={state.phoneNumber}
          placeholder="(+234) Phone Number"
          onChangeText={(phoneNumber) => {
            dispatch({ phoneNumber });
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
          value={state.cpassword}
          placeholder="Confirm Password"
          onChangeText={(cpassword) => {
            dispatch({ cpassword });
          }}
          topMargin={50}
          bottomMargin={30}
        />
        <span className="error-msg">{state.errorMsg}</span>
        <div style={{ height: 10 }} />
        <Button
          text="Register"
          horizontalInsetPadding={30}
          verticalInsetPadding={14}
          isLoading={state.isLoading}
          onPress={onSignUp}
          isSubmit
        />
        <div style={{ height: 60 }} />
      </form>
    </div>
  );
}
