import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './forms/loginForm.jsx';
import RegistrationForm from './forms/registrationForm.jsx';
import loginPageConstants from '../../constants/loginPage/loginPageConstants.js';


function LoginScreen() {

    const [formEnabler, setFromEnabler] = useState(false);
    // deleting session storage just so user cannot access this once logged in and if he does, will have to relogin
    useEffect(() => {
        sessionStorage.clear();
    }, [])

    // to show toast on screen
    const showToast = (msg) => {
        toast(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

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
        <div className="row" style={{ "width": "100%", fontSize: "1.3rem" }}>
            <section id="form-con" className='col-11 col-lg-3 col-md-6 col-sm-8'>
                {formEnabler ?
                    (<RegistrationForm
                        setFromEnabler={setFromEnabler}
                        showToast={showToast}
                    />

                    ) :
                    (<LoginForm
                        showToast={showToast}
                    />)
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
export default LoginScreen