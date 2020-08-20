import * as functions from 'firebase-functions';
import * as admin from "firebase-admin"
admin.initializeApp();
export const newAccountCreated = functions.auth.user().onCreate(user => {
    //Create a JSON document for the data
    const userDoc = {
        email: user.email,
        displayName: user.displayName
    }
    //Becuase we are hosting the cloud function against out firebase
    // project, we need to now use the admin SDK
    admin.firestore().collection('members').doc(user.uid)
        //we create a document the same way we do on client
        .set(userDoc).then(writeResult => {
        console.log('User Created result:', writeResult);
        return;
    }).catch(err => {
        console.log(err);
        return;
    });
});
