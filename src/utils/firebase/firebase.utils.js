import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Web App Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB-2lWM018nwU03fN2hmRrVeiHosINXeg",
  authDomain: "crwn-clothing-db-c07e5.firebaseapp.com",
  projectId: "crwn-clothing-db-c07e5",
  storageBucket: "crwn-clothing-db-c07e5.appspot.com",
  messagingSenderId: "520405279104",
  appId: "1:520405279104:web:f7b26e74ce967f702e2165",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createedAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createedAt,
                ...additionalInformation,
            })
        } catch (error) {
            if(error.code === "auth/email-already-in-use") {
                alert("cannot create user, email has been used")
            } else {
                console.log("error creating the user", error.message);
            }
        }
    }

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}