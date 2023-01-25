import { Component } from "@firebase/component";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./sign-in.styles.scss";

class SignIn extends Component {
    async logGoogleUser() {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth( user );
    }

    render() {
        return (
            <div>
                <h1>SIGN IN PAGE</h1>
                <button onClick={this.logGoogleUser}>sign in with google popup</button>
                <SignUpForm />
            </div>
        )
    }
}

export default SignIn