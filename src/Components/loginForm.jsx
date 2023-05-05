import React from 'react';
import { useNavigate } from "react-router-dom";
// import {Link} from 'react-router-dom';

function LoginForm({ nameP, passwordP, setNameP, setPasswordP }) {
    const navigate = useNavigate();
    const handleNameChange = (e) => {
        setNameP(e.target.value);
    }
    const handlePassowrdChange = (e) => {
        setPasswordP(e.target.value);
    }
    const submitLogin = (e) => {
        // confirm from sessiong storage pending 
        e.preventDefault();

        console.log("form submistion", nameP, passwordP);
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        if (userInfo && nameP === userInfo.name && passwordP === userInfo.password) {
            setNameP("");
            setPasswordP("");
            navigate("/homescreen");
        }
        else {
            if (userInfo == null) {
                alert("Please register login");
            }
            else {
                alert("Wrong User name and password");
            }

        }

    }
    return (
        <>
            <form onSubmit={(e) => submitLogin(e)} className="login-fom-con">
                <h2 id="lf-title"> Login Form </h2>
                <input
                    onChange={(e) => handleNameChange(e)}
                    type="text"
                    value={nameP}
                    id="name"
                    required
                    placeholder="Name.."
                    autoComplete="off"
                />
                <input
                    onChange={(e) => handlePassowrdChange(e)}
                    type="password"
                    value={passwordP}
                    id="password"
                    required
                    placeholder="Password"
                />
                <input
                    type="submit"
                    name="submit"
                    id="submit"
                    value={"Log In"}
                />
                <p> Don't have an account ?</p>
            </form>



        </>
    )
}

export default LoginForm