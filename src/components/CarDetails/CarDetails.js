import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/context";

function CarDetails({ car }) {
  const { dispatch } = useContext(DataContext);

  return (
    <li>
      <div className="car-details">
        <div className="model">{car.model}</div>
        <div className="make">{car.make}</div>
        <div className="year">{car.year}</div>
      </div>
      <div className="update-delete-btn">
        <button className="update-btn">Update</button>
        <button className="delete-btn">Delete</button>
      </div>
    </li>
  );
}

export default CarDetails;
