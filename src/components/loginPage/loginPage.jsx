import React, { useState } from 'react';
import LoginForm from './forms/loginForm.jsx';
import RegistrationForm from './forms/registrationForm.jsx';
import loginPageConstants from '../../constants/loginPage/loginPageConstants.js';

function LoginScreen() {
    const [formEnabler, setFromEnabler] = useState(false);


    // setting form switch should work or not
    const handleFormChange = (e) => {
        if (e === loginPageConstants.SIGN_UP && !formEnabler) {
            setFromEnabler(true);
        }
        if (e === loginPageConstants.LOG_IN && formEnabler) {
            setFromEnabler(false);
        }
    }
    return (
        <div className="row" style={{ "width": "100%" }}>
            <section id="form-con" className='col-11 col-lg-3 col-md-6 col-sm-8'>
                {formEnabler ?
                    (<RegistrationForm
                        setFromEnabler={setFromEnabler}
                    />

                    ) :
                    (<LoginForm />)
                }
                <span>
                    <input
                        onClick={(e) => handleFormChange(e.target.name)}
                        className={formEnabler ? 'd-none' : ''}
                        type="button"
                        name={loginPageConstants.SIGN_UP}
                        id={loginPageConstants.SIGN_UP}
                        value={loginPageConstants.SIGN_UP}
                    />

                    <input
                        onClick={(e) => handleFormChange(e.target.name)}
                        className={formEnabler ? '' : 'd-none'}
                        type="button"
                        name={loginPageConstants.LOG_IN}
                        id={loginPageConstants.LOG_IN}
                        value={loginPageConstants.LOG_IN}
                    />
                </span>
            </section>
        </div>
    )
}
export default LoginScreen