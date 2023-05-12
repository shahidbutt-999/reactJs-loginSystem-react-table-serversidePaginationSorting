import React, { useState } from 'react';
import Table from '../../shared/table/table';
import { BiTrash } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserInputModal from './tableOperation/userAddModal';
import DummyData from "../../../data/UserTableData.json";

function Users() {
    const [tableData, setTableData] = useState(DummyData);
    const [inputFormDisplay, setInputFormDisplay] = useState(false);
    function handleInputFormChange(elm = false) {
        if (elm) {
            // console.log(elm);
            toast.success('User is Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: "",
                theme: "light",
            });
        }
        setInputFormDisplay(!inputFormDisplay);
    }
    const [previousPageNum, setPreviousPageNum] = useState(0);


    // defining table columns
    const Columns = [
        {
            Header: "User ID",
            accessor: "id",

        },
        {
            Header: "First Name",
            accessor: "first_name"
        },
        {
            Header: "Last Name",
            accessor: "last_name",
            canSort: false
        },
        {
            Header: "Email",
            accessor: "email",
            canSort: false
        },
        {
            Header: "Gender",
            accessor: "gender",
            canSort: true

        },
        {
            Header: "Delete",
            id: "delete",
            accessor: "delete",

            Cell: (tableProps) => (
                <span
                    style={{
                        cursor: "pointer",
                        color: "blue",
                        textDecoration: "none"
                    }}
                    onClick={() => {
                        if (window.confirm("Are You Sure ?")) {
                            tableData.splice(tableProps.row.index, 1);
                            setPreviousPageNum(tableProps.state.pageIndex);
                            setTableData([...tableData]);
                            // tableProps.gotoPage(previousPageNum);

                            console.log(previousPageNum);
                        }

                    }}
                >
                    <BiTrash />
                </span>
            )
        }
    ];




    return (
        <div className='col-12 col-md-10 mx-auto'>
            <h1 className='mt-2'>Users</h1>
            <div className="usersNav mt-md-5 px-lg-5">
                <button onClick={() => { setInputFormDisplay(!inputFormDisplay) }}>Add User</button>

            </div>



            {inputFormDisplay &&
                <UserInputModal
                    handleInputFormChange={handleInputFormChange}
                    tableData={tableData}
                    setTableData={setTableData}
                />
            }


            <Table
                className="px-lg-5"
                tableData={tableData}
                Columns={Columns}
                previousPageNum={previousPageNum}
            />
            {/* Toast on Adding new user */}
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
            {/* Same as */}
            <ToastContainer />

        </div>
    )
}

export default Users