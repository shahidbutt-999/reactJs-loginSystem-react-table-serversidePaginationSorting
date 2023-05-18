import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../shared/clientTable/table';
import { BiTrash } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserInputModal from './tableOperation/userAddModal';
import * as actionTypes from "../../../store/actions/actionTypes";

function Users(props) {
    const [inputFormDisplay, setInputFormDisplay] = useState(false);
    function handleInputFormChange(elm = false) {
        if (elm) {
            toast.success('User is Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: "",
                theme: "light",
            });
        }
        setInputFormDisplay(!inputFormDisplay);
    }



    // defining table columns
    const Columns = [
        {
            Header: "User ID",
            accessor: "id",

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
                    onClick={(e) => {
                        if (window.confirm("Are You Sure ?")) {
                            // console.log(tableProps.row.original.id, tableProps.state.pageIndex);
                            props.onDeleteUser(tableProps.row.original.id, tableProps.state.pageIndex);

                        }

                    }}
                >
                    <BiTrash />
                </span>
            )
        }
    ];




    return (
        <div className='col-12 col-md-10 mx-auto'>
            <h1 className='mt-2'>Users</h1>
            <div className="usersNav mt-md-5 px-lg-5">
                <button onClick={() => { setInputFormDisplay(!inputFormDisplay) }}>Add New</button>

            </div>



            {inputFormDisplay &&
                <UserInputModal
                    handleInputFormChange={handleInputFormChange}
                />
            }


            <Table
                className="px-lg-5"
                Columns={Columns}

            />
            {/* Toast on Adding new user */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />

        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        userData: state.auth.userData,
        pageNumber: state.auth.pageNumber

    };

}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching actions returned by action creators
        onDeleteUser: (userId, pageNumber) => dispatch({ type: actionTypes.DELETE_USER, userId: userId, pageNumber: pageNumber }),
        onAddUser: () => dispatch({ type: actionTypes.ADD_USER }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);