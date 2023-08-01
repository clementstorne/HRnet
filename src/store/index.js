/** Redux Toolkit */
import { configureStore } from "@reduxjs/toolkit";

/** Slices */
import employeesReducer from "./employeesSlice";
import modalReducer from "./modalSlice.js";

export default configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
  },
  devTools: true,
});
