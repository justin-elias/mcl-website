/* globals window */
import React, {useEffect, useState} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from 'src/utils/auth/initFirebase'
import {setUserCookie} from "../../utils/auth/userCookies";
import {mapUserData} from "../../utils/auth/mapUserData";
import {Typography} from "@material-ui/core";

// Init the Firebase app.
initFirebase()



interface AuthProps {
    returnPath: string
}

const FirebaseAuth = (props: AuthProps) => {
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const [renderAuth, setRenderAuth] = useState(false)
    const {returnPath} = props;
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])

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
        signInSuccessUrl: returnPath,
        credentialHelper: 'none',
        callbacks: {
            // @ts-ignore
            signInSuccessWithAuthResult: async ({ user }) => {
                const userData = mapUserData(user)
                setUserCookie(userData)
            },
        },
    }
    return (
        <div>
            {renderAuth ? (
                <React.Fragment>
                    <Typography variant={"h6"} component={"h1"} align={"center"}>
                        Enter your email to create an account or login
                    </Typography>
                    <br/>
                    <StyledFirebaseAuth
                        // @ts-ignore
                        uiConfig={firebaseAuthConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </React.Fragment>
            ) : null}
        </div>
    )
}

export default FirebaseAuth;
