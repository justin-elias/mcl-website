import {AppProps} from "next/app";
import * as Sentry from "@sentry/node";
import {ReactNode} from "react";
import firebase from "firebase/app"

export interface MclAppProps extends AppProps {
    AppProps: AppProps;
    err: Sentry.Event;
    children?: ReactNode;
    user?: AppUser;
    logout?: firebase.auth.Auth;
    preview?: boolean;

}

export interface HandleClickParams{
    event: MouseEvent<HTMLDivElement, MouseEvent>;
}

export interface AppUser{
    id: string,
    token: string | undefined,
    email: string | null
}

export interface FirebaseUser extends firebase.User{
    xa?: string,
}

export interface LayoutProps extends MclAppProps {
    metaDescription: string;
    title: string;
    hero?: boolean
}
