import React from 'react'
import UserInputForm from './userInputForm';
import classes from './../../../assets/css/adminPage/usersScreen/userInputModal.module.css';

function UserInputModal(props) {
    return (
        <>
            <div
                className={classes.backDrop}
                onClick={props.handleInputFormChange}
            >
            </div>
            <UserInputForm
                handleInputFormChange={props.handleInputFormChange}
                tableData={props.tableData}
                setTableData={props.setTableData}
            />

        </>
    )
}

export default UserInputModal