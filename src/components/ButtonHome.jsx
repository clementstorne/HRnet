/** React Router */
import { Link } from "react-router-dom";

import { BsFillBuildingFill } from "react-icons/bs";

export default function ButtonHome() {
  return (
    <Link
      to={`/`}
      className="flex flex-row flex-nowrap justify-start items-center text-2xl m-0 text-white hover:drop-shadow"
    >
      <BsFillBuildingFill className="text-secondary" />
      <h1 className="ml-1.5 hover:drop-shadow">HRnet</h1>
    </Link>
  );
}
