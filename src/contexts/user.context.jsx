import { Component } from "react";
import { createContext } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export class UserProvider extends Component {
  unsubscribe = null;
  
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
          createUserDocumentFromAuth(user);
      }
      this.setState({
        currentUser : user
      });
  });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const currentUser = this.state.currentUser;
    const setCurrentUser = (newUser) => {
      this.setState({
        currentUser: newUser,
      });
    };

    const value = { currentUser, setCurrentUser };
    const { children } = this.props;
    return (
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
  }
}