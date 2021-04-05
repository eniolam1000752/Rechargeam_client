import React from "react";
import { Alert } from "../../components/Alert/Alert";
import { API } from "../../lib/api";

export function useController(history) {
  //@state
  let state = {
    selectedNetwork: {},
    selectedNetworkIndex: null,
    phone: "",
    amount: "",
    description: "",
    isLoading: false,
    errorMsg: "",
  };

  const dispatch = (data) => {
    state = { ...state, ...data };
  };

  const buy = () => {
    if (state.phone.length === 0) {
      Alert.alert("Error", "Phone number cannot be empty");
      return;
    }
    if (state.phone.length < 11) {
      Alert.alert("Error", "Invalid phone number provided");
      return;
    }
    if (state.amount.length <= 0) {
      Alert.alert("Error", "Amount cannot be empty");
      return;
    }
    if (!state.selectedNetwork.name) {
      Alert.alert("Error", "Select a network provider to continue");
      return;
    }

    state.isLoading = true;
    API.requestAirtime({
      amount: state.amount,
      debitOperation: "AIRTIME",
      phoneNumber: state.phone,
      processor: state.selectedNetwork.name,
    })
      .then((resp) => {
        Alert.alert(
          "Success",
          "Your airtime purchase was successful. \nYou would be credited on your mobile between 5 to 10mins",
          [],
          true
        );
      })
      .catch((err) => {
        Alert.alert("Error", err, [], true);
      })
      .finally(() => {
        state.isLoading = false;
      });
  };

  return { state, dispatch, buy };
}
