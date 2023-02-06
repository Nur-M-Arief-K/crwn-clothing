import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/create-action.utils";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

const userReducer = ( state, action ) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`Unhandled type of ${type} in userReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

export const UserProvider = (props) => {
    const { children } = props;

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;
    const setCurrentUser = (user) => {
      dispatch(createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user) );
    };

    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe; //a function to do a cleanup work for unsubscribing
    }, []); // runs once when this component get mounted

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}