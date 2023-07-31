/** Redux Toolkit */
import { configureStore } from "@reduxjs/toolkit";

/** Slices */
import { employeesReducer } from "./employeesSlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
  devTools: true,
});
