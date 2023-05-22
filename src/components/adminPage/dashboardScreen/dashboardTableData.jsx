import axios from "axios";
import React from "react";
import { TOKEN } from "../../../constants/shared/loginTokenConstants";

// Defining Table Header and Binding Data
export const Columns = [
    {
        Header:
            <input
                type="checkbox"
                onChange={(tableProps) => {
                    // console.log("header is checked", tableProps);
                    // get the table rows and set the checkbox to checked, pending
                }}
            >
            </input >,
        id: "checkbox",
        accessor: "checkbox",
        Cell: (tableProps) => (
            <input
                type="checkbox"
                style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "none"
                }}
                onChange={(e) => {
                    // console.log("i am clicked", tableProps);
                    // perform action on individual row in table
                }}
            >

            </input>
        )
    },
    {
        Header: "Actions",
        id: "actions",
        accessor: "actions",

        Cell: (tableProps) => (
            <span
                style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "none"
                }}
                onClick={(e) => {
                    if (window.confirm("Are You Sure ?")) {
                        // console.log(tableProps.row.original.id, tableProps.state.pageIndex);
                        // props.onDeleteUser(tableProps.row.original.id, tableProps.state.pageIndex);

                    }

                }}
            >
                Delete
            </span>
        )
    },
    {
        Header: "User Name",
        accessor: "userName"
    },
    {
        Header: "Telephone",
        accessor: "telephone",
    },
    {
        Header: "User Types",
        accessor: "userTypeName"
    },
    {
        Header: "Organizations",
        accessor: "organizationName",
    },
    {
        Header: "Active Directory",
        accessor: "activeDirectory",
    },
    {
        Header: "Is Active Directory",
        accessor: "isActiveDirectory",
    },
    {
        Header: "Account Locked",
        accessor: "isLocked",

    },
    {
        Header: "Email",
        accessor: "email",
    },
];

// fetch function to get table data
export const fetchDashboardData = async (pageSize, currentPage) => {
    console.log("backend call to get user data and the call will be ", pageSize, currentPage);
    const token = window.localStorage.getItem(TOKEN);
    try {
        const res = await axios({
            method: 'get',
            url: `https://unixforapi.hazelsoft.net/api/v1/user/users?PageSize=${pageSize}&PageNumber=${currentPage}`,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        // console.log(res.data.payload, "from fetch functions");
        return res;
    }
    catch (err) {

        return err
    }
}