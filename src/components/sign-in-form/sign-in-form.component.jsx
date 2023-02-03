import { Component } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import { UserContext } from "../../contexts/user.context";

class SignInForm extends Component {
  defaultFormFields = {
    email: "",
    password: "",
  };

  constructor() {
    super();
    this.state = {
      formFields: this.defaultFormFields,
    };
  };

  resetFormFields = () => {
    this.setState({
      formFields: this.defaultFormFields,
    });
  };

  signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state.formFields;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      this.resetFormFields();
    } catch (error) {
        switch(error.code) {
            case "auth/user-not-found":
                alert("user not found");
                break;
            case "auth/wrong-password": 
                alert("incorrect password for email");
                break;
            default:
                console.log(error);
        }
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ formFields: {
      ...this.state.formFields, 
      [name]: value} });
  };

  render() {
    const { email, password } = this.state.formFields;
    return (
      <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            onChange={this.handleChange}
            name="email"
            value={email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            onChange={this.handleChange}
            name="password"
            value={password}
            required
          />
          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={this.signInWithGoogle} buttonType="google">
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    );
  }
};

SignInForm.contextType = UserContext;

export default SignInForm;
