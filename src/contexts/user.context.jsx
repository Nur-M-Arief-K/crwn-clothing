import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = (props) => {
    const { children } = props;
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        console.log(unsubscribe);
        return unsubscribe; //a function to do a cleanup work for unsubscribing
    }, []); // runs once when this component get mounted

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}