/** React */
import { useState } from "react";

/** PropTypes */
import PropTypes from "prop-types";

export default function DataTableFilter({ onChangeOfFilter }) {
  const [filter, setFilter] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setFilter(value);
    onChangeOfFilter(value);
  }

  return (
    <div>
      <label htmlFor="filter" id="filter-label" className="font-semibold mr-1">
        Search:
      </label>
      <input
        type="text"
        id="filter"
        aria-describedby="filter-label"
        spellCheck="false"
        className="px-3 py-1 rounded-md bg-white shadow hover:shadow-md focus:shadow-md"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

DataTableFilter.propTypes = {
  onChangeOfFilter: PropTypes.func.isRequired,
};
