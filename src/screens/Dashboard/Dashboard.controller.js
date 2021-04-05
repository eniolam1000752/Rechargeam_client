import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import { Alert } from "../../components/Alert/Alert";
import { AppContext } from "../../components/AppProvider/AppProvider";
import { API } from "../../lib/api";
import { globals } from "../../lib/globals";

export function useController(history) {
  const { isLoading, dispatch: appDispatch } = useContext(AppContext);

  //@state
  let state = {};

  const dispatch = (data) => {
    state = { ...state, ...data };
  };

  //@init()
  function onAddEventListener() {
    globals.historyInstance.addListener("logout", () => {
      Alert.alert(
        "Session Timeout",
        "Your session has timed out. Login to continue",
        [],
        true
      );
      globals.token = null;
      localStorage.removeItem("token");
      history.replace("/login");
    });
  }

  //@init()
  function onMount() {
    appDispatch({ isLoading: true });
    API.getUser()
      .then((resp) => {
        appDispatch({ userData: resp });
      })
      .catch((err) => {
        Alert.alert("Error", "Unable to get user data");
      })
      .finally(() => appDispatch({ isLoading: false }));
  }

  return { state, dispatch, isLoading };
}

export function useDashboardController(history) {
  const { userData } = useContext(AppContext);

  //@state
  let state = {};

  const dispatch = (data) => {
    state = { ...state, ...data };
  };

  return { state, dispatch, userData };
}
