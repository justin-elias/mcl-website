import firebase from "firebase/app";
import "firebase/firestore"
import * as Sentry from "@sentry/node"

const FieldValue = firebase.firestore.FieldValue;



export default async function sendForm(formValues: { lastName: string; zipCode: string; city: string; firstName: string; phone: string; streetAddress: string; oath: boolean; dob: string; appType: string; eas: string; certified: boolean; state: string; memberType: string; felony: string; dateEnlistCommission: string; timestamp?: any }){

    Object.keys(formValues).map((key) => {
        // @ts-ignore
        if (formValues[key] === ""){
            // @ts-ignore
            delete formValues[key]
        }
    })
    formValues["timestamp"] = FieldValue.serverTimestamp();
    try {

        await firebase.firestore()
            .collection('forms').add(formValues)
    }
    catch (error){
        Sentry.captureException(error)
    }
}
