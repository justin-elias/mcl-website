import React from "react";
import {SubmitComponentProps} from "../../index";
import {Typography} from "@material-ui/core";


export default function SubmitComponent(props: SubmitComponentProps) {
    const {formValues, title} = props

    const isNew = formValues.appType === "new" ?
        <React.Fragment>
            <strong>Enlistment/Commissioning Date:</strong> {formValues.dateEnlistCommission} <br/>
            <strong>Discharge Date:</strong> {formValues.eas} <br/>
        </React.Fragment> : null;
    return (
        <React.Fragment>
            <Typography variant={"h4"} component={"h6"}>
                {title}
            </Typography>
            <hr/>
            <Typography variant={"body1"}>
                <strong>Membership Type:</strong> {formValues.appType.toLocaleUpperCase()} <br/>
                <strong>Application Type:</strong> {formValues.memberType.toLocaleUpperCase()} <br/>
            </Typography>
                <hr/>
            <Typography variant={"body1"}>
                <strong>Name:</strong> {formValues.firstName.toLocaleUpperCase() + " " + formValues.lastName.toLocaleUpperCase()} <br/>
                <strong>DOB:</strong> {formValues.dob} <br/>
                {isNew}
            </Typography>
                <hr/>
            <Typography variant={"body1"}>
                <strong>Street Address:</strong> {formValues.streetAddress} <br/>
                <strong>City:</strong> {formValues.city} <br/>
                <strong>State:</strong> {formValues.state} <br/>
                <strong>Zipcode:</strong> {formValues.zipCode} <br/>
                <strong>Phone:</strong> {formValues.phone} <br/>
            </Typography>
                <hr/>
        </React.Fragment>
    );
}
