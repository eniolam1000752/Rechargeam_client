import React from "react";

export function useController(history) {
  //@state
  let state = {
    selectedNetwork: {},
    selectedNetworkIndex: null,
    phone: "",
    amount: "",
    description: "",
  };

  const dispatch = (data) => {
    state = { ...state, ...data };
  };

  const buy = () => {};

  return { state, dispatch, buy };
}
