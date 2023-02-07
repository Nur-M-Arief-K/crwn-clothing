import { Component } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

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
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = this.state.formFields;
      await signInAuthUserWithEmailAndPassword(email, password);
      this.resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("user not found");
          break;
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        default:
          console.log(error);
      };
    };
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ formFields: { ...this.state.formFields, [name]: value } });
  };

  render() {
    const { email, password } = this.state.formFields;
    return (
      <SignInContainer>
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
          <ButtonsContainer>
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              onClick={this.signInWithGoogle}
              buttonType={BUTTON_TYPE_CLASSES.google}
            >
              Google Sign In
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignInForm;
