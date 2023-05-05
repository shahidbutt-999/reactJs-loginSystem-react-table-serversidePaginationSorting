import React, { useRef } from 'react';
import classes from "./UserInputForm.module.css";


function UserInputForm(props) {

    const handleFormSubmit = (e) => {
        e.preventDefault();

        props.handleInputFormChange();
        alert("User is added");

    }
    return (
        <form
            className={classes.userInputForm}
            onSubmit={(e) => handleFormSubmit(e)}
        >
            <input
                type="text"
                placeholder="First Name"
                required
            />
            <input
                type="text"
                placeholder="Lase Name"
                required
            />
            <input
                type="email"
                placeholder="Email"
                required
            />
            <div className={classes.genCon}>
                <input type="radio" required checked name='gender' id='Male' />
                <label htmlFor="Male">Male</label>
                <input type="radio" required name='gender' id='Female' />
                <label htmlFor="Female">Female</label>
            </div>
            <input type="submit" value={"Submit"} />

        </form >
    )
}

export default UserInputForm