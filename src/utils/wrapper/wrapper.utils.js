import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStripe, useElements } from '@stripe/react-stripe-js';
 
export const withUseNavigate = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()}></Component>;
};

export const withUseParams = (Component) => {
  return (props) => <Component {...props} params={useParams()}></Component>;
}

export const withUseStripe = (Component) => {
  return (props) => <Component {...props} stripe={useStripe()} elements={useElements()}></Component>;
}