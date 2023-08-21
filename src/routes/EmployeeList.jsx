/** Components */
import Navbar from "../components/Navbar";
import Title2 from "../components/Title2";
import ButtonLink from "../components/ButtonLink";
import DataTable from "data-table-component";

/** Store */
import { useSelector } from "react-redux";

/** Assets */

export default function EmployeeList() {
  const data = useSelector((state) => state.employees.list);

  const columns = [
    {
      name: "First Name",
      selector: "firstName",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "lastName",
      sortable: true,
    },
    {
      name: "Start Date",
      selector: "startDate",
      sortable: true,
    },
    {
      name: "Department",
      selector: "department",
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: "dateOfBirth",
      sortable: true,
    },
    {
      name: "Street",
      selector: "street",
      sortable: true,
    },
    {
      name: "City",
      selector: "city",
      sortable: true,
    },
    {
      name: "State",
      selector: "state",
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: "zipCode",
      sortable: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-5">
        <Title2 text="Current Employees" />

        <div className="w-11/12 p-5 mb-5 bg-light rounded-md shadow">
          <DataTable
            columns={columns}
            data={data}
            headerColor={"#446404"}
            rowColor={"#eef1e6"}
            alternateRowColor={"#94ac1b"}
            hoverRowColor={"#687f11"}
          />
        </div>

        <ButtonLink title="Home" link="/" />
      </div>
    </>
  );
}
