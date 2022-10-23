import React, { createContext, useReducer, useEffect } from "react";

const DataContext = createContext();

function DataProvider(props) {
  return <DataContext.Provider value={[]} {...props} />;
}

export { DataContext, DataProvider };
