import React from 'react';
import { useState, useRef } from 'react';
import LoginForm from './LoginForm.js';
import RegistrationForm from './RegistrationForm.js'
import './LoginScreen.css';


function LoginScreen() {
    const [formEnabler, setFromEnabler] = useState(0);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // setting form switch should work or not
    const handleFormChange = (e) => {
        // console.log("CAll from Handle Form Enabler", formEnabler, e);
        if (e == "sign-up" && formEnabler == 0) {
            setFromEnabler(1);
        }
        if (e == "log-in" && formEnabler == 1) {
            setFromEnabler(0);
        }
    }

    return (
        <section id="form-con">
            {formEnabler ?
                (<RegistrationForm />) :
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