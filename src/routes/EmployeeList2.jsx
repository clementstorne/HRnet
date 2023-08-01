/** Components */
import Navbar from "../components/Navbar";
import Title2 from "../components/Title2";
import ButtonLink from "../components/ButtonLink";

/** Store */
import { useSelector } from "react-redux";

import DataTable from "react-data-table-component";

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

        <div className="w-11/12 p-5 mb-5 bg-light rounded-md shadow">
          <DataTable columns={columns} data={data} pagination />
        </div>

        <ButtonLink title="Home" link="/" />
      </div>
    </>
  );
}