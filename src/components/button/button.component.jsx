import { Component } from "react"; 

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

class Button extends Component {
  getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

  render() {
    const { children, buttonType, ...otherProps } = this.props;
    const CustomButton = this.getButton( buttonType );
    return <CustomButton { ...otherProps }>{ children }</CustomButton>;
  }
};

export default Button;
