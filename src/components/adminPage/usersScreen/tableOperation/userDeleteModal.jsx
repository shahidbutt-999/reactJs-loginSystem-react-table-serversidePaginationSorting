import React from 'react'
import UserDeleteForm from './userDeleteForm';

const userDeleteModal = ({ handleDeleteFormChange, tableData, setTableData }) => {
    return (
        <>
            <div
                className="backDrop"
                onClick={handleDeleteFormChange}
            >
            </div>
            <UserDeleteForm
                handleDeleteFormChange={handleDeleteFormChange}
                tableData={tableData}
                setTableData={setTableData}
            />

        </>
    )
}

export default userDeleteModal