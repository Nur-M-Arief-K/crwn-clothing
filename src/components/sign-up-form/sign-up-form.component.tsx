import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signUpStart } from "../../store/user/user.action";

import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password doesn't match");
            return;
        };
        try {
            dispatch(signUpStart({email, password, displayName}));
            resetFormFields();
        } catch (error) {
            if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert("can't create user, email has already been used");
            } else {
                alert("user creation encountered an error");
            };
        };
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    };
    
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required/>
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
                <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>

                <Button type="submit">Submit</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;