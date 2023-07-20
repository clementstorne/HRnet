/** PropTypes */
import PropTypes from "prop-types";

export default function Title2(props) {
  return (
    <h2 className="w-11/12 text-2xl font-bold bg-black/[.6] text-white rounded-md my-5 py-3">
      {props.text}
    </h2>
  );
}

Title2.propTypes = {
  text: PropTypes.string.isRequired,
};
