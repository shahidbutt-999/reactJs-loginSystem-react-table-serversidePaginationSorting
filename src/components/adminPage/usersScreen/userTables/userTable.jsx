import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table'
import { Columns } from "./userColumn";
import { GiEruption, GiFallDown } from "react-icons/gi";

function UserTable(props) {
    const columns = useMemo(() => Columns, []);
    // const data = useMemo(() => props.tableData, []);
    const data = props.tableData;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow
    } = useTable({
        columns: columns,
        data: data
    }, useSortBy, usePagination)
    const { pageIndex } = state;

    return (
        <>
            <table className="userTable" {...getTableProps()}>
                <thead className="userTableThead">{
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render("Header")}
                                        <span>
                                            {column.isSorted ?
                                                (column.isSortedDesc ? <GiEruption /> : <GiFallDown />) :
                                                ""}
                                        </span>

                                    </th>
                                ))
                            }
                        </tr>)

                    )}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>
                                            {
                                                cell.render('Cell')
                                            }
                                        </td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <strong>Page {pageIndex + 1} of {pageOptions.length}</strong>
                <button onClick={() => { previousPage(); }} disabled={!canPreviousPage} > Previous </button>
                <button onClick={() => { nextPage(); }} disabled={!canNextPage}> Next </button>
            </div>
        </>
    )
}

export default UserTable