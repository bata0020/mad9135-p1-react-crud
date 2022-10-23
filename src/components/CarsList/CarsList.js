import React, { useContext, useState } from "react";
import { DataContext } from "../../context/context";

function CarsList() {
  const { cars } = useContext(DataContext);

  if (cars.length) {
    return (
      <div className="list">
        <ul>{cars.map((car) => ({ car }))}</ul>
      </div>
    );
  } else {
    return <div className="empty">List is empty</div>;
  }
}

export default CarsList;
