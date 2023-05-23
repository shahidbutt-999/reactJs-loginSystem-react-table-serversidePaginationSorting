import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionTypes from "../../../store/actions/actionTypes.js";
import { loginFormConstants } from '../../../constants/loginPage/forms/loginFormConstants';
import { registrationFormConstants } from '../../../constants/loginPage/forms/registrationFormConstants';
import { TOKEN } from "../../../constants/shared/loginTokenConstants.js";
import img from "../../../assets/images/6-dots-scale.svg";

function LoginForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [isSpinning, setIsSpinning] = useState(false);
    // Handle form submission
    const onSubmit = async (data) => {
        setIsSpinning(() => true);
        axios.post("https://unixforapi.hazelsoft.net/api/v1/login", {
            "userName": data.name,
            "password": data.password
        })
            .then((response) => {
                props.showToast("welcome to unixfor");

                // storing token in local storage
                window.localStorage.setItem(TOKEN, response.data.payload.token);

                navigate("/adminpage");
                props.onLogIn();
            })
            .finally((err) => {
                setIsSpinning(() => false);
                console.log(err);
                props.showToast(loginFormConstants.WRONG_USER_ERROR);
            });
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="login-fom-con"
            >
                <h2 id="lf-title"> Hazel Soft </h2>
                <label
                    htmlFor={loginFormConstants.NAME}
                >
                    User Name*
                </label>
                <input
                    id={loginFormConstants.NAME}
                    placeholder={loginFormConstants.NAME}
                    {...register('name', { required: true, maxLength: 30 })}
                    type="text"
                    autoComplete="off"
                />
                {errors.name && errors.name.type === "required" && (
                    <span role="alert">This is required</span>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                    <span role="alert">Max length exceeded</span>
                )}
                <label
                    htmlFor={registrationFormConstants.PASSWORD}
                >
                    Password*
                </label>
                <input
                    id={loginFormConstants.PASSWORD}
                    placeholder={loginFormConstants.PASSWORD}
                    {...register('password', { required: true, maxLength: 20 })}
                    type="password"
                />
                {errors.password && errors.password.type === "required" && (
                    <span role="alert">This is required</span>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                    <span role="alert">Max length exceeded</span>
                )}
                <input
                    name={loginFormConstants.SUBMIT_LOGIN}
                    id={loginFormConstants.SUBMIT_LOGIN}
                    value={loginFormConstants.SUBMIT_LOGIN}
                    type="submit"
                />
                {isSpinning ? <img src={img} alt="spinner" style={{ width: "20px", alignSelf: "center" }} /> : null}
                <p> Don't have an account ?</p>


            </form>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isAuthorize.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching actions returned by action creators
        onLogIn: () => dispatch({ type: actionTypes.LOG_IN }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);