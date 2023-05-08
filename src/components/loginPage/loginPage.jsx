import React from 'react';
import { useState } from 'react';
import LoginForm from './forms/loginForm.jsx';
import RegistrationForm from './forms/registrationForm.jsx'

function LoginScreen() {
    const [formEnabler, setFromEnabler] = useState(0);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // setting form switch should work or not
    const handleFormChange = (e) => {
        if (e === "sign-up" && formEnabler === 0) {
            setFromEnabler(1);
        }
        if (e === "log-in" && formEnabler === 1) {
            setFromEnabler(0);
        }
    }
    return (
        <section id="form-con">
            {formEnabler ?
                (<RegistrationForm
                    setForm={setFromEnabler}
                />

                ) :
                (<LoginForm
                    nameP={name}
                    passwordP={password}
                    setNameP={setName}
                    setPasswordP={setPassword}
                />)
            }
            <span>
                <input
                    onClick={(e) => handleFormChange(e.target.name)}
                    className={formEnabler ? 'd-none' : ''}
                    type="button"
                    name="sign-up"
                    id="sign-up"
                    value={"Sign Up"}
                />

                <input
                    onClick={(e) => handleFormChange(e.target.name)}
                    className={formEnabler ? '' : 'd-none'}
                    type="button"
                    name="log-in"
                    id="log-in"
                    value={"Log In"}
                />
            </span>
        </section>
    )
}
export default LoginScreen