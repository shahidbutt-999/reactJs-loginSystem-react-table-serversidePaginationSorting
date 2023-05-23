import React from 'react'
import UserInputForm from './userAddForm';

function UserInputModal({ handleInputFormChange }) {
    return (
        <>
            <div
                className="backDrop"
            >
            </div>
            <UserInputForm
                handleInputFormChange={handleInputFormChange}
            />

        </>
    )
}

export default UserInputModal