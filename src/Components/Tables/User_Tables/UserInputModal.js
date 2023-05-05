import React from 'react'
import classes from './UserInputModal.module.css';
import UserInputForm from './UserInputForm';

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
            />

        </>
    )
}

export default UserInputModal