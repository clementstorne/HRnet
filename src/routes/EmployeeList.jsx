/** React Router */
import { Link } from "react-router-dom";

/** Components */
import Navbar from "../components/Navbar";
import Title2 from "../components/Title2";

/** Assets */

/**
 * Component for showing the main page.
 * @component
 */
export default function EmployeeList() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-5">
        <Title2 text="Current Employees" />

        <table id="employee-table" className="display"></table>
        <Link to={`/`} className="hover:drop-shadow">
          Home
        </Link>
      </div>
    </>
  );
}
