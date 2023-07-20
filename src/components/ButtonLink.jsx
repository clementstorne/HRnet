/** PropTypes */
import PropTypes from "prop-types";

/** React Router */
import { Link } from "react-router-dom";

export default function ButtonLink(props) {
  return (
    <Link
      to={props.link}
      className="bg-light text-dark rounded-md px-2.5 py-1.5 font-bold shadow hover:shadow-md"
    >
      {props.title}
    </Link>
  );
}

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
