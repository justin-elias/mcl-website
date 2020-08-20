import {AppUser} from "../../index";
import firebase from "firebase/app";
import "firebase/firestore"

export default async function updateUser(formValues: { lastName: string; zipCode: string; city: string; firstName: string; phone: string; streetAddress: string; oath: boolean; dob: string; appType: string; eas: string; certified: boolean; state: string; memberType: string; felony: string; dateEnlistCommission: string }, user: AppUser | undefined){
    console.log("userId: " + user!.id)
    const userDocRef = firebase.firestore()
        .collection('members').doc(user!.id)

    // Add some initial data to it
    try {
        return await userDocRef.update(formValues)
    }
    catch (error){
        console.error(error)
    }

}
