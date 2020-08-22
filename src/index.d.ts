import {AppProps} from "next/app";
import * as Sentry from "@sentry/node";
import {ReactNode} from "react";
import firebase from "firebase/app"
import {TextFieldProps} from "@material-ui/core";
import {formRadioFieldProps} from "./components/ApplicationFormComponents/RadioComponent";
import {CertComponentProps} from "./components/ApplicationFormComponents/CertComponent";

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

export interface FormOptions{
    firstName: string | ""
    lastName: string | ""
    phone: string | ""
    dob: string | ""
    streetAddress: string | ""
    city: string | ""
    state: string | ""
    zipCode: string | ""
    appType: "new" | "renew"
    memberType: "regular" | "associate"
    dateEnlistCommission: string | ""
    eas: string | ""
    certified: boolean
    oath: boolean
    felony: "yes" | "no" | "",
    email: string
    subscribe: boolean
    mclId: string | ""
}

export interface formFieldProps {
    fields: [TextFieldProps] | [formRadioFieldProps] | [CertComponentProps]
    title: string
    type: string
    radio?: formRadioFieldProps
}
export interface TextComponentProps  {
    formFields: formFieldProps
    index: number,
    register: any,
    values: Array<FormOptions>,
    appType: FormOptions.appType
}

export interface formRadioFieldProps {
    formLabel: string
    groupName: keyof FormOptions
    value1: string
    label1: string
    value2: string
    label2: string
}
export interface RadioComponentProps {
    fields: formRadioFieldProps
    register: any
    currentValue: string
}

export interface CertComponentProps {
    radioFields: RadioComponentProps
    register: any
    currentValue: string
    certified: boolean
}

export interface OathComponentProps {
    register: any
    affirmed: boolean
    memberName: string
}

export interface SubmitComponentProps {
    formValues: FormOptions
    title: string
    register: any
}
