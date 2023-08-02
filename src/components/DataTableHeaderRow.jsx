/** React */
import { useState } from "react";

/** PropTypes */
import PropTypes from "prop-types";

/** Assets */
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

export default function DataTableHeaderRow({
  columns,
  onChangeOfSort,
  sortDirection,
}) {
  const [selectedKey, setSelectedKey] = useState("id");

  function handleClick(e) {
    setSelectedKey(e.target.id);
    onChangeOfSort(e.target.id);
  }

  return (
    <thead>
      <tr>
        {columns.map((column) => {
          return (
            <th
              className={`border border-black bg-tertiary text-white py-2`}
              id={column.selector}
              key={column.selector}
              onClick={handleClick}
            >
              {column.name}
              {column.selector === selectedKey ? (
                sortDirection === "ascending" ? (
                  <BsFillCaretUpFill className="inline-block ml-1" />
                ) : (
                  <BsFillCaretDownFill className="inline-block ml-1" />
                )
              ) : (
                ""
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

DataTableHeaderRow.propTypes = {
  columns: PropTypes.array.isRequired,
  onChangeOfSort: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
};
