import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useGlobalFilter, useRowSelect } from 'react-table'
import { BiDownArrowAlt, BiUpArrowAlt, BiTransfer } from "react-icons/bi";
import GlobalFilter from './globalFilter';
// css of user table is used

function Table(props) {
    const [isSorted, setIsSorted] = useState(false);
    const [isSortedDesc, setIsSortedDesc] = useState(false);
    const [canNextPage, setCanNextPage] = useState(true);
    const [canPrevPage, setCanPrevPage] = useState(true);

    const columns = props.Columns;
    const data = props.tableData;
    const total = props.total;
    const currentPage = props.currentPage;
    const numberOfPages = props.numberOfPages;
    const pageSize = props.pageSize;
    const itemCountInCurrentPage = props.itemCountInCurrentPage;
    const orderBy = props.orderBy;
    // Destructuring set pagination parameter
    const setPageSizeServerSide = props.setPageSize;
    const setCurrentPage = props.setCurrentPage;

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
        console.clear();
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

    // handle row selection
    const IndeterminateCheckbox = React.forwardRef(
        ({ indeterminate, ...rest }, ref) => {
            const defaultRef = React.useRef()
            const resolvedRef = ref || defaultRef

            React.useEffect(() => {
                resolvedRef.current.indeterminate = indeterminate
            }, [resolvedRef, indeterminate])

            return (
                <>
                    <input
                        type="checkbox"
                        ref={resolvedRef}
                        {...rest}
                    />
                </>
            )
        }
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow,
        selectedFlatRows,
    } = useTable({
        columns: columns,
        data: data
    }, useGlobalFilter, usePagination, useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                // Let's make a column for selection
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        })
    const { globalFilter, selectedRowIds } = state;

    return (
        <div className={props.className}>
            <div className="d-flex justify-content-between align-items-center">
                {/* table pagination */}
                <div className='table-pagination p-1 pb-2'>
                    <strong>Showing {eval(((currentPage - 1) * (pageSize)) + 1)} to {eval((currentPage - 1) * pageSize + itemCountInCurrentPage)} of {total}</strong>


                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSizeServerSide(Number(e.target.value));
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

                {/* table filter */}
                <GlobalFilter
                    setGlobalFilter={setGlobalFilter}
                    globalFilter={globalFilter}

                />
            </div>
            {/* table body */}
            <div className='overflow-auto table-con'>
                <table className="table users-table col-10 mx-auto" {...getTableProps()}>
                    <thead className="table-thead">{
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column, index) => (
                                        // index help will skip the checkbox icon from sorting functionality
                                        (index !== 0 && index !== 1)
                                            ? (
                                                <th {...column.getHeaderProps()}>
                                                    {column.render("Header")}

                                                    <span
                                                        onClick={(e) => handleSorting(column, e)}
                                                    >
                                                        {
                                                            orderBy.includes(column.id) ?
                                                                (orderBy.includes("desc") ?
                                                                    <BiUpArrowAlt />
                                                                    : <BiDownArrowAlt />)
                                                                : (<BiTransfer
                                                                    style={{ rotate: "90deg" }}
                                                                />)
                                                        }
                                                    </span>


                                                </th>
                                            )
                                            : <th {...column.getHeaderProps()}>
                                                {column.render("Header")}
                                            </th>

                                    ))
                                }
                            </tr>)

                        )}
                    </thead>
                    {
                        itemCountInCurrentPage !== 0
                            ? (<tbody {...getTableBodyProps()}>
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
                            </tbody>)
                            : <h1 className='p-4' style={{ "width": "75vw" }}>No Result Found</h1>
                    }
                </table>

            </div>


        </div>
    )
}




// export default connect(mapStateToProps)(Table);
export default Table;