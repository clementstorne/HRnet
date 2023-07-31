/** PropTypes */
import PropTypes from "prop-types";

/** Assets */
import { BsExclamationTriangleFill } from "react-icons/bs";

export default function FormSelect({
  isRequired,
  id,
  options,
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
      <select
        name={id}
        id={id}
        aria-describedby={`${id}-label`}
        required={isRequired}
        aria-required={isRequired}
        className={`w-full h-12 text-center rounded-md bg-white shadow focus:shadow-md ${
          errorMessage ? "border-solid border-2 border-red" : ""
        }`}
        value={value}
        onChange={event}
      >
        <option value="" disabled>
          --Choose an option--
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.abbreviation}>
              {option.name}
            </option>
          );
        })}
      </select>
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

FormSelect.propTypes = {
  isRequired: PropTypes.bool,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

FormSelect.defaultProps = {
  isRequired: false,
  errorMessage: "",
};
