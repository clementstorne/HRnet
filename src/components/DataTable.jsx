/** React */
import { useState, useEffect } from "react";

/** PropTypes */
import PropTypes from "prop-types";

/** Components */
import DataTableNumberOfEntries from "./DataTableNumberOfEntries";
import DataTableFilter from "./DataTableFilter";
import DataTableHeaderRow from "./DataTableHeaderRow";
import DataTableRow from "./DataTableRow";
import DataTablePagination from "./DataTablePagination";
import DataTableNavigationPrevious from "./DataTableNavigationPrevious";
import DataTableNavigationNext from "./DataTableNavigationNext";

export default function DataTable({ columns, data }) {
  const numberOfEntriesOptions = [10, 15, 20, 25, 30];

  const [numberOfEntries, setNumberOfEntries] = useState(
    numberOfEntriesOptions[0]
  );
  const [firstEntry, setFirstEntry] = useState(0);
  const lastEntry = firstEntry + numberOfEntries;
  const [entriesToShow, setEntriesToShow] = useState(
    data.slice(firstEntry, lastEntry)
  );

  const handleNumberOfEntriesChange = (number) => {
    setNumberOfEntries(parseInt(number));
  };

  const handleClickPrevious = () => {
    if (firstEntry - numberOfEntries < 0) {
      return;
    } else {
      setFirstEntry(firstEntry - numberOfEntries);
    }
  };

  const handleClickNext = () => {
    if (firstEntry + numberOfEntries > data.length) {
      return;
    } else {
      setFirstEntry(firstEntry + numberOfEntries);
    }
  };

  const [filter, setFilter] = useState("");

  const handleChangeOfFilter = (string) => {
    setFilter(string);
  };

  useEffect(() => {
    setEntriesToShow(data.slice(firstEntry, lastEntry));
  }, [firstEntry, numberOfEntries]);

  return (
    <>
      <div className="flex flex-row flex-nowrap justify-between">
        <DataTableNumberOfEntries
          options={numberOfEntriesOptions}
          onNumberOfEntriesChange={handleNumberOfEntriesChange}
        />
        <DataTableFilter onChangeOfFilter={handleChangeOfFilter} />
      </div>
      <table className="w-full my-3 table-auto border-collapse border border-black">
        <DataTableHeaderRow columns={columns} />
        <tbody>
          {entriesToShow.map((row) => {
            return <DataTableRow data={row} columns={columns} key={row.id} />;
          })}
        </tbody>
      </table>
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <DataTableNavigationPrevious onClick={handleClickPrevious} />
        <DataTablePagination
          numberOfEntriesPerPage={numberOfEntries}
          firstEntryOfPage={firstEntry + 1}
          totalEntries={data.length}
        />
        <DataTableNavigationNext onClick={handleClickNext} />
      </div>
    </>
  );
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
