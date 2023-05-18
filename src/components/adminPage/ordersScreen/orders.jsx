import React, { useState, useEffect } from "react";
import { getData, columns, formatRowData } from "../../../data/appTableData";
import Table from "../../shared/serverTable/table";
import Pagination from "../../shared/serverTable/pagination";

function Orders() {
    const [pageData, setPageData] = useState({
        rowData: [],
        isLoading: false,
        totalPages: 0,
        totalPassengers: 150,
    });
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        setPageData((prevState) => ({
            ...prevState,
            rowData: [],
            isLoading: true,
        }));
        getData(currentPage).then((info) => {
            const { totalPages, totalPassengers, data } = info;
            setPageData({
                isLoading: false,
                rowData: formatRowData(data),
                totalPages,
                totalPassengers: 150,
            });
        });
    }, [currentPage]);
    return (
        <>
            <div className='col-12 col-md-10' style={{ border: "5px solid blue" }}>
                <div><h1>Orders</h1></div>
                <p>Total Passengers: {pageData.totalPassengers || "Loading..."}</p>
                <button onClick={() => setCurrentPage(1)}>Reset</button>
                <div style={{ height: "600px", border: "2px solid yellow" }}>
                    <Table
                        columns={columns}
                        data={pageData.rowData}
                        isLoading={pageData.isLoading}
                    />
                </div>
                <Pagination
                    totalRows={pageData.totalPassengers}
                    pageChangeHandler={setCurrentPage}
                    rowsPerPage={15}
                    currentPage={currentPage}
                />
            </div>


        </>
    )
}

export default Orders