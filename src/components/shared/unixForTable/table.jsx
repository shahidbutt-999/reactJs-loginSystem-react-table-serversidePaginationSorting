import React, { useEffect, useState } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
import { BiDownArrowAlt, BiUpArrowAlt, BiTransfer } from "react-icons/bi";
import GlobalFilter from './globalFilter';
// css of user table is used

function Table(props) {
    const [isSorted, setIsSorted] = useState(false);
    const [isSortedDesc, setIsSortedDesc] = useState(false);
    // console.log(props.tableData, "table state from prop sis rendered");
    const [canNextPage, setCanNextPage] = useState(true);
    const [canPrevPage, setCanPrevPage] = useState(true);
    const columns = props.Columns;
    const data = props.tableData;
    const total = props.total;
    const currentPage = props.currentPage;
    const numberOfPages = props.numberOfPages;
    const pageSize = props.pageSize;
    const itemCountInCurrentPage = props.itemCountInCurrentPage;
    // Destructuring set pagination parameter
    const setPageSize = props.setPageSize;
    const setCurrentPage = props.setCurrentPage;
    console.log("Table Component is rerendered with these:\nTotal = ", total, "  currentPage = ", currentPage, " numberOfPages = ", numberOfPages, " pageSize = ", pageSize, " itemCountCurrentPage = ", itemCountInCurrentPage);

    // Handle sorting functionality
    const handleSorting = (col, e) => {


        if (isSorted) {
            if (isSortedDesc) {
                setIsSorted(false);
                setIsSortedDesc(false);
                props.setOrderBy("");
            }
            else {
                setIsSortedDesc(true);
                props.setOrderBy(col.id + " desc");
            }
        }
        else {
            setIsSorted(true);
            props.setOrderBy(col.id);
        }

        console.log(e.target);
    }

    // Handle pagination setup
    useEffect(() => {
        if (numberOfPages > currentPage) {
            setCanNextPage(true);
        } else {
            setCanNextPage(false);
        }

        if (currentPage == 1) {
            setCanPrevPage(false);
        }
        else {
            setCanPrevPage(true);
        }
    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        pageOptions,
        state,
        setGlobalFilter,
        prepareRow
    } = useTable({
        columns: columns,
        data: data
    }, useGlobalFilter, useSortBy, usePagination)
    const { globalFilter } = state;

    return (
        <div className={props.className}>
            <GlobalFilter
                setGlobalFilter={setGlobalFilter}
                globalFilter={globalFilter}
            />
            <div className='overflow-auto table-con'>
                <table className="table users-table col-10 mx-auto" {...getTableProps()}>
                    <thead className="table-thead">{
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column, index) => (
                                        // index help will skip the checkbox icon from sorting functionality
                                        (index !== 0 && index !== 1) ? (
                                            <th {...column.getHeaderProps()}>
                                                {column.render("Header")}

                                                <span
                                                    onClick={(e) => handleSorting(column, e)}
                                                    key={123}
                                                >
                                                    {
                                                        isSorted ?
                                                            (isSortedDesc ?
                                                                <BiUpArrowAlt />
                                                                : <BiDownArrowAlt />)
                                                            : (<BiTransfer
                                                                style={{ rotate: "90deg" }}
                                                            />)
                                                    }

                                                </span>


                                            </th>
                                        ) :
                                            <th {...column.getHeaderProps()}>
                                                {column.render("Header")}
                                            </th>

                                    ))
                                }
                            </tr>)

                        )}
                    </thead>
                    {
                        pageOptions.length !== 0 ?
                            (<tbody {...getTableBodyProps()}>
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
                            </tbody>) :
                            <h1 className='p-4' style={{ "width": "75vw" }}>No Result Found</h1>
                    }
                </table>
            </div>
            <div className='table-pagination'>
                {/* <strong>Showing {Number(currentPage) + 1} of {pageOptions.length} | Go To Page: </strong> */}
                <strong>Showing {eval(((currentPage - 1) * (pageSize)) + 1)} to {eval((currentPage - 1) * pageSize + itemCountInCurrentPage)} of {total}</strong>


                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {
                        [5, 15, 45, 100, 150].map((elm) => {

                            return (
                                <option
                                    key={elm}
                                    value={elm}
                                >
                                    Show {elm}
                                </option>
                            )
                        }
                        )
                    }

                </select>
                <button
                    onClick={() => {
                        setCurrentPage(1);

                    }}
                    disabled={!canPrevPage}
                >
                    {"<<"}
                </button>
                <button
                    onClick={() => {
                        setCurrentPage(currentPage - 1);

                    }}
                    disabled={!canPrevPage}
                >
                    Previous
                </button>
                <button
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                    disabled={!canNextPage}
                >
                    Next
                </button>
                <button
                    onClick={() => {
                        setCurrentPage(numberOfPages);
                    }}
                    disabled={!canNextPage}
                >
                    {">>"}
                </button>
            </div>

        </div>
    )
}




// export default connect(mapStateToProps)(Table);
export default Table;