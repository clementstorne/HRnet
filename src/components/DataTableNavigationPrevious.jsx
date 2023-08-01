/** PropTypes */
import PropTypes from "prop-types";

/** Assets */
import { BsFillCaretLeftFill } from "react-icons/bs";

export default function DataTableNavigationPrevious({ onClick }) {
  return (
    <button
      className="p-2 rounded-full bg-white cursor-pointer shadow hover:shadow-md "
      onClick={onClick}
    >
      <BsFillCaretLeftFill />
    </button>
  );
}

DataTableNavigationPrevious.propTypes = {
  onClick: PropTypes.func.isRequired,
};
