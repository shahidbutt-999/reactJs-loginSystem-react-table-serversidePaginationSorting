import "./LoginForm.css"
import React from 'react'

function LoginForm({ nameP, passwordP, setNameP, setPasswordP }) {
    const handleNameChange = (e) => {
        setNameP(e.target.value);
    }
    const handlePassowrdChange = (e) => {
        setPasswordP(e.target.value);
    }
    const submitLogin = () => {
        // confirm from sessiong storage pending 
        console.log("form submistion", nameP, passwordP);
        if (nameP === "shahidbutt" && passwordP === "123") {
            setNameP("");
            setPasswordP("");
            alert("Login Succusfull");
        }
        else {
            alert("please enter corrent user name & password");
        }

    }
    return (
        <>
            <form onSubmit={submitLogin} className="login-fom-con">
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
                <a href="#"> Don't have an account ?</a>
            </form>



        </>
    )
}

export default LoginForm