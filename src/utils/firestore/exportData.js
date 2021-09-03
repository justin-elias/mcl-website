const admin = require("firebase-admin");
require("firebase/firestore");
const fastCSV = require("fast-csv");
const fs = require('fs');

const date_ob = new Date();
const date = date_ob.getDate();
const year = date_ob.getFullYear();
const month = date_ob.getMonth()+1;
const hours = date_ob.getHours();
const minutes = date_ob.getMinutes();
const timestamp = year + "-" + month + "-" + date + "_" + hours + ":" + minutes + "_"
const ws = fs.createWriteStream("../../../Output/" + timestamp + "membershipUpdates.csv");

const serviceAccount = require("../../../../GoogleKeys/mcl-det-1050-firebase-adminsdk-nlupy-7ca4390c79.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mcl-det-1050.firebaseio.com"
});

const exportData = async () => {
    const formsRef = admin.firestore().collection('forms');
    const data = []
    try {

        const lastExportTimestamp = (await formsRef.doc("lastExport").get()).data().timestamp;
        const snapshot = await formsRef.where("timestamp", ">", lastExportTimestamp).orderBy("timestamp", "desc").get();
        snapshot.docs.map((doc) => {
            data.push(doc.data())
        })

        if (data.length > 0) {
            try {
                fastCSV.write(data, {headers: ["appType", "memberType", "lastName", "firstName", "dateEnlistCommission", "eas", "felony", "dob", "phone", "email", "streetAddress", "city", "state", "zipCode"]}).pipe(ws);
            } catch (error) {
                return "CSV did not Write !!! " + error
            }
            try {
                await formsRef.doc("lastExport").update({timestamp: snapshot.readTime})
            } catch (error) {
                return "LastExport timestamp not updated !!! " + error
            }
        }
    }catch (error){
        return "Export operation failed " + error
    }
    return data.length + " new results in Output Directory"
}

exportData().then((result) => {console.log(result)});
