import React, { useState } from "react";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import "./carDetails.css";

function CarDetails({ car }) {
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  function handleOnDeleteClick(ev) {
    ev.preventDefault();
    setDeleteConfirm(true);
  }

  function close() {
    setDeleteConfirm(false);
  }

  return (
    <>
      <li>
        <div className="car-details">
          <div className="make">{car.make}</div>
          <div className="model">{car.model}</div>
          <div className="year">{car.year}</div>
        </div>
        <div className="update-delete-btn">
          <button className="update-btn">Update</button>
          <button className="delete-btn" onClick={handleOnDeleteClick}>
            Delete
          </button>
        </div>
      </li>
      <ConfirmDelete open={deleteConfirm} close={close} carId={car.id} />
    </>
  );
}

export default CarDetails;
