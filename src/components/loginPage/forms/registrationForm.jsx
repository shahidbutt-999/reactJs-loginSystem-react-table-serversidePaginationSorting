import React from 'react';
import { useForm } from "react-hook-form";
import loginPageConstants from '../../../constants/loginPage/loginPageConstants';
import { registrationFormConstants } from '../../../constants/loginPage/forms/registrationFormConstants';

function RegistrationForm({ setFromEnabler }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const userData = JSON.stringify({
            "name": data.name,
            "password": data.password
        })
        sessionStorage.setItem(loginPageConstants.USER_INFO_SS, userData);
        alert(registrationFormConstants.USER_REGISTERED_MSG);
        setFromEnabler(false);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="login-fom-con"
        >
            <h2 id="lf-title"> Hazel Soft </h2>
            <label
                htmlFor={registrationFormConstants.NAME}
            >
                User Name*
            </label>
            <input
                {...register('name', { required: true, maxLength: 30 })}
                type="text"
                id={registrationFormConstants.NAME}
                placeholder={"Enter " + registrationFormConstants.NAME}
                autoComplete="off"
            />
            {errors.name && errors.name.type === "required" && <span>This is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
            <label
                htmlFor={registrationFormConstants.PASSWORD}
            >
                Password*
            </label>
            <input
                {...register('password', { required: true, maxLength: 30 })}
                type="password"
                id={registrationFormConstants.PASSWORD}
                placeholder={"Enter " + registrationFormConstants.PASSWORD}
            />
            {errors.password && errors.password.type === "required" && <span>This is required</span>}
            {errors.password && errors.password.type === "maxLength" && <span>Max length exceeded</span>}
            <input
                type="submit"
                name="submit"
                id="submit"
                value={"Sign Up"}
            />
            <p> Already have an account ?</p>
        </form >
    )
}

export default RegistrationForm