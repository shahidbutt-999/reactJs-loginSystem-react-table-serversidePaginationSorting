import axios from "axios";
import React from "react";
import { TOKEN } from "../../../constants/shared/loginTokenConstants";

// fetch function to get table data
export const fetchUsersData = async (pageSize, currentPage, orderBy = "") => {
    const token = window.localStorage.getItem(TOKEN);
    try {
        const res = await axios({
            method: 'get',
            // url: `https://unixforapi.hazelsoft.net/api/v1/user/users?PageSize=${pageSize}&PageNumber=${currentPage}`,
            url: `https://unixforapi.hazelsoft.net/api/v1/user/users?PageSize=${pageSize}&PageNumber=${currentPage}&OrderBy=${orderBy}`,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return res;
    }
    catch (err) {

        return err
    }
}

// Defining Table Header and Binding Data
export const Columns = [
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

