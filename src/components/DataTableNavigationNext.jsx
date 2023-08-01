/** PropTypes */
import PropTypes from "prop-types";

/** Assets */
import { BsFillCaretRightFill } from "react-icons/bs";

export default function DataTableNavigationNext({ onClick }) {
  return (
    <button
      className="p-2 rounded-full bg-white cursor-pointer shadow hover:shadow-md "
      onClick={onClick}
    >
      <BsFillCaretRightFill />
    </button>
  );
}

DataTableNavigationNext.propTypes = {
  onClick: PropTypes.func.isRequired,
};
