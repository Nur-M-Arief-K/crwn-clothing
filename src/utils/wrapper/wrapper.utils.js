import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const withUseNavigate = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()}></Component>;
};

export const withUseParams = (Component) => {
  return (props) => <Component {...props} params={useParams()}></Component>;
}