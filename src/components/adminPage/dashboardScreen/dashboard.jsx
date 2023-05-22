import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../../../store/actions/actionTypes";
import Table from "../../shared/unixForTable/table";
import * as tableProps from "./dashboardTableData";
import { ToastContainer, toast } from 'react-toastify';



function Dashboard(props) {
    console.log("dashbaord rendering");


    React.useEffect(() => {
        console.log(props.pageSize, props.currentPage, "printint golden numbers")
        const temp = async () => {
            // fetch user data api call
            let res = await tableProps.fetchDashboardData(props.pageSize, props.currentPage);

            // setting users list to tableData props
            // console.log(res, "checing status", res.data.payload.items);
            if (res.status === 200) {
                console.log("response is\ntable Data = ", res.data.payload.items, "\n total = ", res.data.payload.total, "current page = ", res.data.payload.currentPage, " page size = ", res.data.payload.pageSize);
                props.setTableData(res.data.payload.items);
                props.setTotal(res.data.payload.total);
                props.setCurrentPage(res.data.payload.currentPage);
                props.setNumberOfPages(res.data.payload.numberOfPages);
                props.setPageSize(res.data.payload.pageSize);
                props.setItemCountInCurrentPage(res.data.payload.itemCountInCurrentPage);

            }
            else {
                (toast.error('server is not respondng!, try in moment', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: "",
                    theme: "light",
                }))
            }
        };
        temp();
    }, [props.pageSize, props.currentPage]);




    return (
        <div className='col-12 col-md-10 mx-auto'>
            <h1 className='mt-2'>Dashboard</h1>
            <div className="usersNav mt-md-5 px-lg-5">
                <button >Add New</button>

            </div>

            <Table
                className="px-lg-5"
                tableData={props.userTableData}
                Columns={tableProps.Columns}
                total={props.total}
                currentPage={props.currentPage}
                numberOfPages={props.numberOfPages}
                pageSize={props.pageSize}
                itemCountInCurrentPage={props.itemCountInCurrentPage}
                // passing the table pagination set functions
                setPageSize={props.setPageSize}
                setCurrentPage={props.setCurrentPage}
            />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}



// subscribing to redux store
const mapStateToProps = (state) => {
    return {
        userTableData: state.userTableRedUnixFor.userTableData,
        total: state.userTableRedUnixFor.total,
        currentPage: state.userTableRedUnixFor.currentPage,
        numberOfPages: state.userTableRedUnixFor.numberOfPages,
        pageSize: state.userTableRedUnixFor.pageSize,
        itemCountInCurrentPage: state.userTableRedUnixFor.itemCountInCurrentPage,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching actions returned by action creators
        setTableData: (userTableData) => dispatch({ type: actionTypes.SET_TABLE_DATA, userTableData: userTableData }),
        setTotal: (total) => dispatch({ type: actionTypes.SET_TOTAL, total: total }),
        setCurrentPage: (currentPage) => dispatch({ type: actionTypes.SET_CURRENT_PAGE, currentPage: currentPage }),
        setNumberOfPages: (numberOfPages) => dispatch({ type: actionTypes.SET_NUMBER_OF_PAGES, numberOfPages: numberOfPages }),
        setPageSize: (pageSize) => dispatch({ type: actionTypes.SET_PAGESIZE, pageSize: pageSize }),
        setItemCountInCurrentPage: (itemCountInCurrentPage) => dispatch({ type: actionTypes.SET_ITEM_COUNT_IN_CURRENT_PAGE, itemCountInCurrentPage: itemCountInCurrentPage }),


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default Dashboard
