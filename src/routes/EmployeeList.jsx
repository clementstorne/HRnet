/** React Router */
import { Link } from "react-router-dom";

/** Components */
import Navbar from "../components/Navbar";
import Title2 from "../components/Title2";

/** Store */
import { useSelector } from "react-redux";

import DataTable from "react-data-table-component";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";

/** Assets */

export default function EmployeeList() {
  const data = useSelector((state) => state.employees.list);
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-5">
        <Title2 text="Current Employees" />

        <DataTable columns={columns} data={data} pagination />

        <Link to={`/`} className="hover:drop-shadow">
          Home
        </Link>
      </div>
    </>
  );
}
