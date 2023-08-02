/** React Router */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** Views */
import App from "./App";
import EmployeeList from "./EmployeeList";

/** Components */

/**
 * The router component.
 * @component
 */
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}
