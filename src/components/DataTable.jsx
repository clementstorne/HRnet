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

  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    const sortedData = () => {
      if (sortConfig.key) {
        return [...data].sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return data;
    };

    const sortedDataArray = sortedData();

    const filterFirstName = () => {
      return sortedDataArray.filter((item) => {
        return item.firstName.toLowerCase().includes(filter.toLowerCase());
      });
    };

    const filterLastName = () => {
      return sortedDataArray.filter((item) => {
        return item.lastName.toLowerCase().includes(filter.toLowerCase());
      });
    };

    const filterGlobal = () => {
      const result = filterFirstName().concat(filterLastName());
      return [...new Set(result)];
    };

    const filteredDataArray = filterGlobal();

    setEntriesToShow(filteredDataArray.slice(firstEntry, lastEntry));
  }, [firstEntry, lastEntry, numberOfEntries, sortConfig, filter, data]);

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
        <DataTableHeaderRow
          columns={columns}
          onChangeOfSort={handleSort}
          sortDirection={sortConfig.direction}
        />
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
