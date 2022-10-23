import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { DataContext } from "../../context/context";
import "./confirmDelete.css";

function ConfirmDelete({ open, carId, close }) {
  const { dispatch } = useContext(DataContext);
  if (!open) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="overlay">
        <div className="dialog">
          <h3>Delete</h3>
          <p>Delete car from the list?</p>
          <div className="delete-yes-no">
            <button
              className="yes-btn"
              onClick={() => {
                dispatch({ type: "REMOVE_CAR", id: carId });
                close();
              }}
            >
              Yes
            </button>
            <button className="no-btn" onClick={close}>
              Cancel
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("portal")
    );
  }
}

export default ConfirmDelete;
