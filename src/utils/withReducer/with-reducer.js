import { useReducer } from "react";

const withUseReducer =
  (...useReducerArgs) =>
  (Component) =>
  (props) => {
    const [state, dispatch] = useReducer(...useReducerArgs);

    return <Component {...props} {...{ state, dispatch }} />;
  };

export default withUseReducer;
