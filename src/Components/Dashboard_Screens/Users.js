import React, { useState } from 'react';
import UserTable from '../Tables/User_Tables/UserTable';
import classes from "./Users.module.css";
import UserInputModal from '../Tables/User_Tables/UserInputModal';

function Users() {
    const [inputFormDisplay, setInputFormDisplay] = useState(false);
    const handleInputFormChange = () => {
        inputFormDisplay ? setInputFormDisplay(false) : setInputFormDisplay(true);
    }
    return (
        <div className='col-10'>
            <div className={classes.usersNav}>
                <button onClick={handleInputFormChange}>Add User</button>

            </div>
            {inputFormDisplay ? <UserInputModal handleInputFormChange={handleInputFormChange} /> : null}
            <UserTable />
        </div>
    )
}

export default Users