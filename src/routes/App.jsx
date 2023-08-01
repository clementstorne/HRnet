/** Components */
import Navbar from "../components/Navbar";
import FormEmployee from "../components/FormEmployee";
import ButtonLink from "../components/ButtonLink";
import Title2 from "../components/Title2";
import Modal from "../components/Modal";

export default function App() {
  return (
    <>
      <Navbar />

      <Modal />

      <div className="flex flex-col items-center justify-center p-5">
        <ButtonLink title="View Current Employees" link="/employee-list" />
        <ButtonLink title="View List" link="/list" />

        <Title2 text="Create Employee" />

        <FormEmployee />
      </div>
    </>
  );
}
