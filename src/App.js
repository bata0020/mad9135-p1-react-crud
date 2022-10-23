import React from "react";
import Header from "./components/Header/Header";
import CarsList from "./components/CarsList/CarsList";
import Form from "./components/Form/Form";
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
          <Route path="/carsList" element={<CarsList />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
