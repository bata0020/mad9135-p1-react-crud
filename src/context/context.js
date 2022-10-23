import React, { createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/reducer";

const DataContext = createContext();

function DataProvider(props) {
  const [cars, dispatch] = useReducer(reducer, [], () => {
    const localStorageData = localStorage.getItem("carList");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("carList", JSON.stringify(cars));
  }, [cars]);

  //TODO: verify the value format of return statement below
  return <DataContext.Provider value={{ cars, dispatch }} {...props} />;
}

export { DataContext, DataProvider };
