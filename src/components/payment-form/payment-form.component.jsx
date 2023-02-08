import { Component } from "react";
import { connect } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { withUseStripe } from "../../utils/wrapper/wrapper.utils";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { FormContainer } from "./payment-form.styles";
import { PaymentButton, PaymentFormContainer } from "./payment-form.styles";

class PaymentForm extends Component {  
  constructor() {
    super();
    this.state = {
      isProcessingPayment: false,
    };
  }

  paymentHandler = async (e) => {
    e.preventDefault();
    if (!this.props.stripe || !this.props.elements) {
      return;
    }
    this.setState({isProcessingPayment: true});
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: this.amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await this.props.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.props.elements.getElement(CardElement),
        billing_details: {
          name: this.currentUser ? this.currentUser.displayName : "Guest",
        },
      },
    });

    this.setState({isProcessingPayment: false});

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  render() {
    this.amount = this.props.selectCartTotal;
    this.currentUser = this.props.selectCurrentUser;
    return (
      <PaymentFormContainer>
        <FormContainer onSubmit={this.paymentHandler}>
          <h2>Credit Card Payment:</h2>
          <CardElement />
          <PaymentButton
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            isLoading={this.isProcessingPayment}
          >
            Pay Now
          </PaymentButton>
        </FormContainer>
      </PaymentFormContainer>
    );
  }
}
export default connect((state) => ({
  selectCartTotal: selectCartTotal(state),
  selectCurrentUser: selectCurrentUser(state),
}))(withUseStripe(PaymentForm));
