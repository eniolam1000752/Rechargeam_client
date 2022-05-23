import React, { useContext, useCallback, useEffect } from "react";

export const AppContext = React.createContext({
  dimension: {},
  dispatch: () => {},
});

export function AppProvider({ initValues, children }) {
  const [state, dispatch] = React.useReducer(
    (state, data) => ({ ...state, ...data }),
    initValues
  );

  const onResize = useCallback((event) => {
    console.log("resized", event.target.screen.width);
    dispatch({
      dimension: {
        width: event.target.screen.width,
        height: event.target.screen.width,
      },
    });
  });

  useEffect(() => {
    window.addEventListener("resize", onResize);
    window.addEventListener("resize", (event) => {
      console.log(event.target.screen);
    });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
