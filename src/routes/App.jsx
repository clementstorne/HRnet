/** Components */
import Navbar from "../components/Navbar";
import FormEmployee from "../components/FormEmployee";
import ButtonLink from "../components/ButtonLink";
import Title2 from "../components/Title2";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center p-5">
        <ButtonLink title="View Current Employees" link="/employee-list" />

        <Title2 text="Create Employee" />

        <FormEmployee />
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
      </div>
    </>
  );
}
