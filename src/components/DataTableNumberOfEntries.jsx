/** React */
import { useState } from "react";

/** PropTypes */
import PropTypes from "prop-types";

export default function DataTableNumberOfEntries({
  options,
  onNumberOfEntriesChange,
}) {
  const [numberOfEntries, setNumberOfEntries] = useState(options[0]);

  function handleChange(e) {
    const { value } = e.target;
    setNumberOfEntries(value);
    onNumberOfEntriesChange(value);
  }

  return (
    <div>
      <label
        htmlFor="entries"
        id="entries-label"
        className="font-semibold mr-1"
      >
        Rows per page:
      </label>
      <select
        name="entries"
        id="entries"
        className="px-3 py-1 rounded-md bg-white shadow hover:shadow-md"
        aria-describedby="entries-label"
        value={numberOfEntries}
        onChange={handleChange}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

DataTableNumberOfEntries.propTypes = {
  options: PropTypes.array.isRequired,
  onNumberOfEntriesChange: PropTypes.func.isRequired,
};
