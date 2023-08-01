/** PropTypes */
import PropTypes from "prop-types";

export default function DataTableHeaderRow({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          return (
            <th
              className={`border border-black bg-tertiary text-white py-2`}
              key={index}
            >
              {column.name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

DataTableHeaderRow.propTypes = {
  columns: PropTypes.array.isRequired,
};
