import React, { useState } from 'react';
import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const handleSignUp = (e) => {
        console.log(name, password);

        // add user into sesssion storage

        sessionStorage.setItem('userInfo', JSON.stringify({ "name": name, "password": password }));
        alert("user Registered");

    }
    return (
        <form onSubmit={(e) => { handleSignUp(e) }} className="login-fom-con">
            <h2 id="lf-title"> Registration Form </h2>
            <input
                onChange={(e) => nameHandler(e)}
                value={name}
                type="text"
                id="name"
                required
                placeholder="Enter name"
                autoComplete="off"
            />
            <input
                onChange={(e) => passwordHandler(e)}
                value={password}
                type="password"
                id="password"
                required
                placeholder="Enter password"
            />
            <input
                type="submit"
                name="submit"
                id="submit"
                value={"Sign Up"}
            />
            <a href="#"> Already have an account ?</a>
        </form>
    )
}

export default RegistrationForm