import React from 'react'
import UserInputForm from './userInputForm';

function UserInputModal(props) {
    return (
        <>
            <div
                className="backDrop"
            >
            </div>
            <UserInputForm
                setModalState={props.setModalState}
            />

        </>
    )
}

export default UserInputModal