import React, { useState } from 'react';
import UserTable from './userTables/userTable';
import UserInputModal from './tableOperation/userAddModal';
import UserDeleteModal from './tableOperation/userDeleteModal';
import DummyData from "../../../data/userTableData.json";

function Users() {
    const [tableData, setTableData] = useState(DummyData);
    const [inputFormDisplay, setInputFormDisplay] = useState(false);
    const [deleteFormDisplay, setDeleteFormDisplay] = useState(false);
    const handleInputFormChange = () => {
        inputFormDisplay ? setInputFormDisplay(false) : setInputFormDisplay(true);
    }
    const handleDeleteFormChange = () => {
        deleteFormDisplay ? setDeleteFormDisplay(false) : setDeleteFormDisplay(true);
    }
    return (
        <div className='col-10'>
            <div className="usersNav">
                <button onClick={handleInputFormChange}>Add User</button>
                <button onClick={handleDeleteFormChange}>Delete User</button>

            </div>
            {inputFormDisplay ?
                <UserInputModal
                    handleInputFormChange={handleInputFormChange}
                    tableData={tableData}
                    setTableData={setTableData}
                /> :
                null
            }
            {deleteFormDisplay ?
                <UserDeleteModal
                    handleDeleteFormChange={handleDeleteFormChange}
                    tableData={tableData}
                    setTableData={setTableData}
                /> :
                null
            }
            <UserTable tableData={tableData} />
        </div>
    )
}

export default Users