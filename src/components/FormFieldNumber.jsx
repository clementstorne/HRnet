/** PropTypes */
import PropTypes from "prop-types";

/** Assets */
import { BsExclamationTriangleFill } from "react-icons/bs";

export default function FormFieldNumber({
  isRequired,
  id,
  label,
  min,
  max,
  step,
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
        type="number"
        id={id}
        aria-describedby={`${id}-label`}
        required={isRequired}
        aria-required={isRequired}
        min={min}
        max={max}
        step={step}
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

FormFieldNumber.propTypes = {
  isRequired: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  errorMessage: PropTypes.string,
  value: PropTypes.number.isRequired,
  event: PropTypes.func.isRequired,
};

FormFieldNumber.defaultProps = {
  isRequired: false,
  errorMessage: "",
};
