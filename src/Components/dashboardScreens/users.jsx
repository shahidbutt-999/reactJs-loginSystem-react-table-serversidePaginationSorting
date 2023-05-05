import React, { useState } from 'react';
import UserTable from '../Tables/userTables/userTable';
import classes from "./users.module.css";
import UserInputModal from '../Tables/userTables/userInputModal';
import DummyData from "../../data/userTableData.json";

function Users() {
    const [tableData, setTableData] = useState(DummyData);
    const [inputFormDisplay, setInputFormDisplay] = useState(false);
    const handleInputFormChange = () => {
        inputFormDisplay ? setInputFormDisplay(false) : setInputFormDisplay(true);
    }
    return (
        <div className='col-10'>
            <div className={classes.usersNav}>
                <button onClick={handleInputFormChange}>Add User</button>

            </div>
            {inputFormDisplay ?
                <UserInputModal
                    handleInputFormChange={handleInputFormChange}
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