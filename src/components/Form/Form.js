import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/context";
import "./form.css";

function Form({ car }) {
  const { dispatch } = useContext(DataContext);

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const goTo = useNavigate();

  const [editCarInfo, setEditCarInfo] = useState({
    id: null,
    make: "",
    model: "",
    year: "",
  });

  useEffect(() => {
    if (car) {
      setEditCarInfo(car);
    }
  }, [car]);

  function handleOnChange(key, newValue) {
    setEditCarInfo({ ...editCarInfo, [key]: newValue });
  }

  function handleEditOnSubmit(ev) {
    ev.preventDefault();
    dispatch({
      type: "EDIT_CAR",
      car: editCarInfo,
    });
    setEditCarInfo({});
    goTo("/");
  }

  function handleAddOnSubmit(ev) {
    ev.preventDefault();
    dispatch({
      type: "ADD_CAR",
      car: {
        make,
        model,
        year,
      },
    });
    setModel("");
    setMake("");
    setYear("");
    goTo("/");
  }

  return car ? (
    <>
      <form className="update-form" onSubmit={handleEditOnSubmit}>
        <div className="add-car-make">
          <label>Make</label>
          <input
            type="text"
            value={editCarInfo.make}
            onChange={(ev) => handleOnChange("make", ev.target.value)}
            required
          />
        </div>
        <div className="add-car-model">
          <label>Model</label>
          <input
            type="text"
            value={editCarInfo.model}
            onChange={(ev) => handleOnChange("model", ev.target.value)}
            required
          />
        </div>
        <div className="add-car-year">
          <label>Year</label>
          <input
            type="number"
            value={editCarInfo.year}
            onChange={(ev) => handleOnChange("year", ev.target.value)}
            required
          />
        </div>
        <div className="buttons-save-cancel">
          <button className="save-edit">Save</button>
          <Link to="/">
            <button className="cancel-edit">Cancel</button>
          </Link>
        </div>
      </form>
    </>
  ) : (
    <>
      <div className="title-bar">
        <h2>Add A Car</h2>
        <Link to="/">
          <button className="back-btn">Back</button>
        </Link>
      </div>
      <form className="add-form" onSubmit={handleAddOnSubmit}>
        <div className="add-car-make">
          <label>Make</label>
          <input
            type="text"
            value={make}
            onChange={(ev) => setMake(ev.target.value)}
            required
          />
        </div>
        <div className="add-car-model">
          <label>Model</label>
          <input
            type="text"
            value={model}
            onChange={(ev) => setModel(ev.target.value)}
            required
          />
        </div>
        <div className="add-car-year">
          <label>Year</label>
          <input
            type="number"
            value={year}
            onChange={(ev) => setYear(ev.target.value)}
            required
          />
        </div>
        <div className="buttons-add-cancel">
          <button className="add-btn">Add</button>
          <Link to="/">
            <button className="cancel-btn">Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Form;
