import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
import { BiDownArrowAlt, BiUpArrowAlt, BiTransfer } from "react-icons/bi";
import GlobalFilter from './globalFilter';
import * as actionTypes from "../../../store/actions/actionTypes";

function Table(props) {
    // console.log(props.userData, "table is rendered")
    const data = useMemo(() => {
        return props.userData;
    }, [props.userData]);


    const columns = props.Columns;
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
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow
    } = useTable({
        columns: columns,
        data: data,
        initialState: { pageIndex: props.pageNumber }
    }, useGlobalFilter, useSortBy, usePagination)
    const { pageIndex, pageSize, globalFilter } = state;

    return (
        <div className={props.className}>
            <GlobalFilter
                setGlobalFilter={setGlobalFilter}
                globalFilter={globalFilter}
            />
            <div className='overflow-auto table-con'>
                <table className="table col-10" {...getTableProps()}>
                    <thead className="table-thead">{
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render("Header")}
                                            <span>
                                                {
                                                    column.isSorted ?
                                                        (column.isSortedDesc ?
                                                            <BiUpArrowAlt /> :
                                                            <BiDownArrowAlt />) :
                                                        <BiTransfer
                                                            style={{ rotate: "90deg" }}
                                                        />
                                                }
                                            </span>

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
                <strong>Page {Number(pageIndex) + 1} of {pageOptions.length} | Go To Page: </strong>
                <span>
                    <input
                        id='pagination-input'
                        type="number"
                        defaultValue={Number(pageIndex) + 1}
                        onChange={(e) => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber);
                        }
                        }
                    />
                </span>
                <button
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                >
                    {"<<"}
                </button>
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {
                        [10, 25, 50].map((pageSize) => {

                            return (
                                <option
                                    key={pageSize}
                                    value={pageSize}
                                >
                                    Show {pageSize}
                                </option>
                            )
                        }
                        )
                    }

                </select>
                <button
                    onClick={() => { previousPage(); }}
                    disabled={!canPreviousPage}
                >
                    Previous
                </button>
                <button
                    onClick={() => { nextPage(); }}
                    disabled={!canNextPage}
                >
                    Next
                </button>
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {">>"}
                </button>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        userData: state.auth.userData,
        pageNumber: state.auth.pageNumber
    };

}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching actions returned by action creators
        onDeleteUser: () => dispatch({ type: actionTypes.DELETE_USER }),
        onAddUser: () => dispatch({ type: actionTypes.ADD_USER }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);
// export default Table;