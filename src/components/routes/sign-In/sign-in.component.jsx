import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const resp = await signInWithGooglePopup();
        console.log(resp);
    }
    return(
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </div>
    )
}
export default SignIn