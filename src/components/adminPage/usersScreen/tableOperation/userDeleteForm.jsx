import React, { useRef } from 'react'

const UserDeleteForm = ({ handleDeleteFormChange, tableData, setTableData }) => {
    const deleteIdRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // closing the modal
        handleDeleteFormChange();
        const deleteUserId = Number(deleteIdRef.current.value);
        // Deleting the user form table data
        let updatedTableData = tableData.filter((elm) => {
            if (elm.id === deleteUserId) {
                return false;
            }
            return true;
        });
        setTableData(updatedTableData);
        updatedTableData.length === tableData.length ?
            alert("User Id is Invalid") :
            alert("User is deleted");

    }
    return (
        <form
            onSubmit={(e) => { handleFormSubmit(e) }}
            className="userInputForm"
        >
            <label
                htmlFor="deleteId"
            >Enter User Id</label>
            <input
                ref={deleteIdRef}
                id="deleteId"
                type="number"
                required
            />
            <input type="submit" />
        </form>
    )
}

export default UserDeleteForm