import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/context";
import CarDetails from "../CarDetails/CarDetails";
import Form from "../Form/Form";
import "./carsList.css";

function CarsList() {
  const { cars } = useContext(DataContext);

  const [editCarId, setEditCarId] = useState(null);

  function carToEdit(data) {
    setEditCarId(data.id);
  }

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
            // <Fragment key={car.id}>
            //   <CarDetails key={car.id} car={car} carToEdit={carToEdit} />
            // </Fragment>
            <Fragment key={car.id}>
              {editCarId === car.id ? (
                <Form key={car.id} car={car} />
              ) : (
                <CarDetails key={car.id} car={car} carToEdit={carToEdit} />
              )}
            </Fragment>
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
