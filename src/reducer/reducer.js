import { v4 as uuid } from "uuid";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CAR":
      return [
        ...state,
        {
          model: action.car.model,
          make: action.car.make,
          year: action.car.year,
          id: uuid(),
        },
      ];

    case "REMOVE_CAR":
      return state.filter((car) => car.id !== action.id);

    case "EDIT_CAR":
      const editedCar = action.car;
      const updatedInfo = state.map((car) =>
        car.id === editedCar.id ? editedCar : car
      );
      return updatedInfo;

    default:
      return state;
  }
}

export default reducer;
