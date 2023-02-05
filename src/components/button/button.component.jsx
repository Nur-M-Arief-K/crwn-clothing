import { Component } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

class Button extends Component {
  BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
  };

  getButton = (buttonType = this.BUTTON_TYPE_CLASSES.base) =>
    ({
      [this.BUTTON_TYPE_CLASSES.base]: BaseButton,
      [this.BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [this.BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

  Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = this.getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
  };

  render() {
    const CustomButton = this.Button(this.props);
    return CustomButton;
  }
}

export default Button;
