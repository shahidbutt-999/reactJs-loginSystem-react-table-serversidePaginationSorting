import React from 'react'
import UserInputForm from './userAddForm';

function UserInputModal({ handleInputFormChange, tableData, setTableData }) {
    return (
        <>
            <div
                className="backDrop"
            // onClick={handleInputFormChange}
            >
            </div>
            <UserInputForm
                handleInputFormChange={handleInputFormChange}
                tableData={tableData}
                setTableData={setTableData}
            />

        </>
    )
}

export default UserInputModal