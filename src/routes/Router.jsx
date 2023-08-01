/** React Router */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** Views */
import App from "./App";
import EmployeeList from "./EmployeeList";
import List from "./EmployeeList2";

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
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
