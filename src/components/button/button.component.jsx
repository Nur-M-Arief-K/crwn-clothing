import { Component } from "react"; 

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingSpinner
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
    const { children, buttonType, isLoading = false, ...otherProps } = this.props;
    const CustomButton = this.getButton( buttonType );
    return <CustomButton disabled={isLoading} { ...otherProps }>{isLoading ? <LoadingSpinner /> : children}</CustomButton>;
  }
};

export default Button;
