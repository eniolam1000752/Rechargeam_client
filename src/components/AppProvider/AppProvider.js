import React from "react";

export const AppContext = React.createContext({ dispatch: () => {} });

export function AppProvider({ initValues, children }) {
  const [state, dispatch] = React.useReducer(
    (state, data) => ({ ...state, ...data }),
    initValues
  );

  return (
    <AppContext.Provider value={{ ...initValues }}>
      {children}
    </AppContext.Provider>
  );
}
