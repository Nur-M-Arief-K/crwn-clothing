import { Component } from "react";
import { createContext } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
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
