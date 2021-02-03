import { useReducer } from "react";

export function useController() {
  const initState = { email: "", password: "" };

  const [state, dispatch] = useReducer(
    (state, value) => ({ ...state, ...value }),
    initState
  );

  return { state, dispatch };
}
