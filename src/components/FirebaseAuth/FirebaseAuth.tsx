/* globals window */
import React, {useEffect, useState} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from 'src/utils/auth/initFirebase'
import {setUserCookie} from "../../utils/auth/userCookies";
import {mapUserData} from "../../utils/auth/mapUserData";

// Init the Firebase app.
initFirebase()


const firebaseAuthConfig = {
    signInFlow: 'redirect',
    // Auth providers
    // https://github.com/firebase/firebaseui-web#configure-oauth-providers
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
            forceSameDevice: false,
            // Used to define the optional firebase.auth.ActionCodeSettings if
            // additional state needs to be passed along request and whether to open
            // the link in a mobile app if it is installed.
            emailLinkSignIn: function() {
                return {
                    url: 'http://localhost:3000/login',
                    // Always true for email link sign-in.
                    handleCodeInApp: true,
                };
            }
        },
    ],
    signInSuccessUrl: "/account",
    credentialHelper: 'none',
    callbacks: {
        // @ts-ignore
        signInSuccessWithAuthResult: async ({ user }) => {
            const userData = mapUserData(user)
            setUserCookie(userData)
        },
    },
}
const FirebaseAuth = () => {
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const [renderAuth, setRenderAuth] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])

    return (
        <div>
            {renderAuth ? (
                <StyledFirebaseAuth
                    // @ts-ignore
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={firebase.auth()}
                />
            ) : null}
        </div>
    )
}

export default FirebaseAuth;
