import { Component, createContext } from "react";
import { createAction } from "../utils/reducer/create-action.utils";
import withUseReducer from "../utils/withReducer/with-reducer";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

class UserProvider extends Component {
  setCurrentUser = (user) =>
    this.props.dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  unsubscribe = onAuthStateChangedListener((user) => {
    if (user) {
      createUserDocumentFromAuth(user);
    }
    this.setCurrentUser(user);
  });

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <UserContext.Provider value={this.props.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default withUseReducer(userReducer, INITIAL_STATE)(UserProvider);
