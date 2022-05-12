import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";

function App() {
  const data = useSelector((state) => state.data);
  

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", 
      },
      {
        Header: "Status",
        accessor: "status", 
      },
      {
        Header: "Species",
        accessor: "species",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div>
      

    </div>
  );
}

export default App;
