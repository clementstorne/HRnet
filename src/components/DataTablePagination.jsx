/** PropTypes */
import PropTypes from "prop-types";

export default function DataTablePagination({
  numberOfEntriesPerPage,
  firstEntryOfPage,
  totalEntries,
}) {
  return (
    <div className="font-bold mx-3">
      {firstEntryOfPage}-
      {firstEntryOfPage + numberOfEntriesPerPage - 1 <= totalEntries
        ? firstEntryOfPage + numberOfEntriesPerPage - 1
        : totalEntries}{" "}
      of {totalEntries}
    </div>
  );
}

DataTablePagination.propTypes = {
  numberOfEntriesPerPage: PropTypes.number.isRequired,
  firstEntryOfPage: PropTypes.number.isRequired,
  totalEntries: PropTypes.number.isRequired,
};
