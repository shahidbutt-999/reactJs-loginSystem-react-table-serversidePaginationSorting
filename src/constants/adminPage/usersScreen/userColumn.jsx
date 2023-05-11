import React from 'react'
const Columns = [];
function userColumn() {

    return Columns = [
        {
            Header: "User ID",
            accessor: "id"

        },
        {
            Header: "First Name",
            accessor: "first_name"
        },
        {
            Header: "Last Name",
            accessor: "last_name",
            canSort: false
        },
        {
            Header: "Email",
            accessor: "email",
            canSort: false
        },
        {
            Header: "Gender",
            accessor: "gender",
            canSort: true

        },
        {
            Header: "Delete",
            id: "delete",
            accessor: "delete",

            Cell: (tableProps) => (
                <span
                    style={{
                        cursor: "pointer",
                        color: "blue",
                        textDecoration: "none"
                    }}
                    onClick={() => {
                        if (!window.confirm("Are You Sure ?")) {
                            window.console.log("whitihnf");
                            // tableData.splice(tableProps.row.index, 1);
                            console.log(tableProps.state.pageIndex);

                            setTableData([...tableData]);
                            tableProps.gotoPage(tableProps.state.pageIndex);

                        }
                        // window.alert("done with working");

                    }}
                >
                    <BiTrash />
                </span>
            )
        }
    ]

}

export default userColumn