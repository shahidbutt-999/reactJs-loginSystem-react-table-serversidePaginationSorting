import React, { useState, useMemo } from 'react';
import Table from '../../shared/table/table';
import { BiTrash } from "react-icons/bi";
import UserInputModal from './tableOperation/userAddModal';
import DummyData from "../../../data/userTableData.json";

function Users() {
    const [tableData, setTableData] = useState(DummyData);
    const [inputFormDisplay, setInputFormDisplay] = useState(false);
    const handleInputFormChange = () => {
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
        <div className='col-11 col-md-10 mx-auto'>
            <h1 className='mt-2'>Users</h1>
            <div className="usersNav mt-md-5 px-5">
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
                className="px-5"
                tableData={tableData}
                Columns={Columns}
                previousPageNum={previousPageNum}
            />

        </div>
    )
}

export default Users