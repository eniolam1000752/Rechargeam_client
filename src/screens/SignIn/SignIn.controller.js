import React from "react";
import { useReducer } from "react";
import { API } from "../../lib/api";
import { globals } from "../../lib/globals";

export function useController(history) {
  //@state
  let state = {
    email: "",
    password: "",
    isLoading: false,
    errorMsg: "",
    rememberMe: true,
  };

  const dispatch = (data) => {
    state = { ...state, ...data };
  };

  const onLogin = () => {
    state.isLoading = true;
    API.login({ email: state.email, password: state.password })
      .then((resp) => {
        state.errorMsg = "";
        localStorage.setItem("token", (globals.token = resp.token));
        localStorage.setItem("email", state.rememberMe ? state.email : "");
        history.push("/dashboard");
      })
      .catch((err) => {
        state.errorMsg = err.message;
      })
      .finally(() => {
        state.isLoading = false;
      });
  };

  return { state, dispatch, onLogin };
}
