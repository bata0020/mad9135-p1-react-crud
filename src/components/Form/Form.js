import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/context";
import "./form.css";

function Form() {
  const { dispatch } = useContext(DataContext);

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const goTo = useNavigate();

  function handleOnSubmit(ev) {
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

  return (
    <>
      <div className="title-bar">
        <h2>Add A Car</h2>
        <Link to="/">
          <button className="back-btn">Back</button>
        </Link>
      </div>
      <form onSubmit={handleOnSubmit}>
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
          <button className="save-btn">Add</button>
          <Link to="/">
            <button className="cancel-btn">Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Form;
