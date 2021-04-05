import React from "react";
import { useReducer } from "react";
import { API } from "../../lib/api";
import { globals } from "../../lib/globals";
import { SignUp } from "./SignUp";

export function useController(history) {
  //@state
  let state = {
    isLoading: false,
    email: "",
    password: "",
    cpassword: "",
    phoneNumber: "",
    username: "",
    errorMsg: "",
  };

  const dispatch = (data) => {
    state = { ...state, ...data };
  };

  const onSignUp = () => {
    state.isLoading = true;
    API.register({
      email: state.email,
      password: state.password,
      cpassword: state.cpassword,
      phoneNumber: state.phoneNumber,
      username: state.username,
    })
      .then((resp) => {
        state.errorMsg = "";
        history.push("/login");
      })
      .catch((err) => {
        state.errorMsg = err.message;
      })
      .finally(() => {
        state.isLoading = false;
      });
  };

  return { state, dispatch, onSignUp };
}
