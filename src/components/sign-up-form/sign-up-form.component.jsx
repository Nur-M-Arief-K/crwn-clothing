import { Component } from "@firebase/component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";

class SignUpForm extends Component {
    defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    constructor() {
        super();
        this.state = {
            formFields: this.defaultFormFields
        }
    }

    resetFormFields() {
        this.setState({
            formFields: this.defaultFormFields
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state.formFields;
        if(password !== confirmPassword) {
            alert("password doesn't match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            this.resetFormFields();
        } catch (error) {
            console.log("user creation encountered an error", error);
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            formFields: {...this.state.formFields, [name]: value}
        })
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state.formFields;
        
        return (
            <div>
                <h1>Sign up with your email and password</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Display Name</label>
                    <input type="text" onChange={this.handleChange} name="displayName" value={displayName} required/>
                    <label>Email</label>
                    <input type="email" onChange={this.handleChange} name="email" value={email} required/>
                    <label>Password</label>
                    <input type="password" onChange={this.handleChange} name="password" value={password} required/>
                    <label>Confirm Password</label>
                    <input type="password" onChange={this.handleChange} name="confirmPassword" value={confirmPassword} required/>
    
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;