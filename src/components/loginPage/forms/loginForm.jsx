import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginFormConstants } from '../../../constants/loginPage/forms/loginFormConstants';
import loginPageConstants from '../../../constants/loginPage/loginPageConstants';
import { registrationFormConstants } from '../../../constants/loginPage/forms/registrationFormConstants';

function LoginForm({ showToast }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data.name, data.password);
        let userInfo = JSON.parse(sessionStorage.getItem(loginPageConstants.USER_INFO_SS));
        if (userInfo && data.name === userInfo.name && data.password === userInfo.password) {
            navigate("/adminpage");
        }
        else {
            if (userInfo == null) {
                showToast(loginFormConstants.REGISTER_USER_ERROR);
            }
            else {
                showToast(loginFormConstants.WRONG_USER_ERROR);
            }
        }
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
                <p> Don't have an account ?</p>
            </form>
        </>
    )
}

export default LoginForm