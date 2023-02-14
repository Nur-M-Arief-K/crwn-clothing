import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password doesn't match");
            return;
        }
        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch (error) {
            console.log("user creation encountered an error", error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    };
    
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput id="displayName" label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required/>
                <FormInput id="email" label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
                <FormInput id="password" label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
                <FormInput id="confirmPassword" label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>

                <Button type="submit">Submit</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;