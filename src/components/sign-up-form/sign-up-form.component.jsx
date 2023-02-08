import { Component } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from './sign-up-form.styles';


class SignUpForm extends Component {
    defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    constructor() {
        super();
        this.state = {
            formFields: this.defaultFormFields
        };
    };    

    resetFormFields = () => {
        this.setState({formFields: this.defaultFormFields});
    };

    handleSubmit = async (event) => {
        const { displayName, email, password, confirmPassword } = this.state.formFields;
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password doesn't match");
            return;
        }
        try {
            this.props.signUpStart(email, password, displayName)
            this.resetFormFields();
        } catch (error) {
            console.log("user creation encountered an error", error);
        };
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({formFields: {...this.state.formFields, [name]: value}});
    };
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state.formFields;
        return (
            <SignUpContainer>
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Display Name" type="text" onChange={this.handleChange} name="displayName" value={displayName} required/>
                    <FormInput label="Email" type="email" onChange={this.handleChange} name="email" value={email} required/>
                    <FormInput label="Password" type="password" onChange={this.handleChange} name="password" value={password} required/>
                    <FormInput label="Confirm Password" type="password" onChange={this.handleChange} name="confirmPassword" value={confirmPassword} required/>
                    <Button type="submit">Submit</Button>
                </form>
            </SignUpContainer>
        );
    };
};

export default connect(null, { signUpStart })(SignUpForm);