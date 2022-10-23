import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/context";
import CarDetails from "../CarDetails/CarDetails";
import "./carsList.css";

function CarsList() {
  const { cars } = useContext(DataContext);

  return cars.length ? (
    <>
      <div className="title-bar">
        <h2>Cars List</h2>
        <Link to="/form">
          <button className="add-car-btn">Add Car</button>
        </Link>
      </div>
      <div className="list">
        <ul>
          {cars.map((car) => (
            <CarDetails key={car.id} car={car} />
          ))}
        </ul>
      </div>
    </>
  ) : (
    <>
      <div className="title-bar">
        <h2>Cars List</h2>
        <Link to="/form">
          <button className="add-car-btn">Add Car</button>
        </Link>
      </div>
      <div className="empty">List is empty</div>
    </>
  );
}

export default CarsList;
