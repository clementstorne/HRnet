/** PropTypes */
import PropTypes from "prop-types";

/** Assets */
import { BsExclamationTriangleFill } from "react-icons/bs";

export default function FormFieldDate({
  isRequired,
  id,
  label,
  errorMessage,
  value,
  event,
}) {
  return (
    <div className="flex flex-col flex-nowrap justify-start items-center pb-4">
      <label htmlFor={id} id={`${id}-label`} className="w-full font-semibold">
        {label}
      </label>
      <input
        type="date"
        autoComplete={id}
        id={id}
        aria-describedby={`${id}-label`}
        required={isRequired}
        aria-required={isRequired}
        spellCheck="false"
        className={`w-full h-12 text-center rounded-md shadow focus:shadow-md ${
          errorMessage ? "border-solid border-2 border-red" : ""
        }`}
        value={value}
        onChange={event}
      />
      <div
        className={
          !errorMessage
            ? "hidden"
            : "flex flex-row flex-nowrap items-center text-red mt-1 text-sm"
        }
      >
        <span
          className="pr-1"
          aria-hidden={`${!errorMessage ? "true" : "false"}`}
        >
          <BsExclamationTriangleFill />
        </span>
        {errorMessage}
      </div>
    </div>
  );
}

FormFieldDate.propTypes = {
  isRequired: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

FormFieldDate.defaultProps = {
  isRequired: false,
  errorMessage: "",
};
