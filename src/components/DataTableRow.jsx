/** PropTypes */
import PropTypes from "prop-types";

export default function DataTableRow({ data, columns }) {
  return (
    <tr className="border border-black bg-light">
      {columns.map((column) => {
        return (
          <td className="border border-black py-2" key={column.selector}>
            {data[column.selector]}
          </td>
        );
      })}
    </tr>
  );
}

DataTableRow.propTypes = {
  data: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
};
