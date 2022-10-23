import React from "react";
import Header from "./components/Header/Header";
import { DataProvider } from "./context/context";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/carsList" />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
