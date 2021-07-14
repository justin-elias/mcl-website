import React from "react";
import RadioComponent from "./RadioComponent";
import {CertComponentProps} from "../../@types";
import {
    Typography,
} from "@material-ui/core";
import CheckComponent from "./CheckComponent";

export default function CertComponent(props: CertComponentProps) {
    const {register, currentValue, radioFields, certified } = props;

    return (
        <React.Fragment>
            <RadioComponent fields={radioFields} register={register} currentValue={currentValue}/>
            <Typography variant={"body1"} align={"left"}>
                <em>If yes is checked, I agree to waive my rights under the Privacy Act and disclose the nature of the felony conviction for consideration of membership in the Marine Corps League.</em>
            </Typography>
            <br/>
            <Typography variant={"body1"} align={"left"}>I hereby certify that I am currently serving or have served honorably in the United States Marine Corps,
                "<strong>ON ACTIVE DUTY</strong>," for not less than ninety (90) days and earned the Eagle, Globe and Anchor;* or have
                served or am currently serving in the United States Marine Corps Reserve and have earned no less than
                ninety (90) Reserve Retirement Credit Points; or that I have served or am currently serving as a U.S.
                Navy Corpsmen who has trained with Marine FMF Units in excess of ninety (90) days and earned the
                Marine Corps Device (clasp) or the Warfare Device worn on the Service Ribbon, authorized for FMF
                Corpsmen; or have served or are currently serving as a U. S. Navy Chaplain and have earned the FMF
                Badge serving with Marines; If discharged, I am in receipt of a DD Form 214 or a Certificate of Discharge
                indicating "Honorable Service". ("Honorable Service" will be defined by the last DD Form 214 or
                Certificate of Discharge that the applicant received). <em>General Discharge under Honorable Conditions is
                    acceptable</em>. By signature on this application, I hereby agree to provide proof of honorable
                service/discharge upon request. I understand the DD Form 214 may contain information such as
                military awards, training, and character of service.</Typography>

            <CheckComponent label={"By checking this box, I certify the above to be true"}
                            helperText={"You Must certify the above to be true to continue"}
                            register={register}
                            checked={certified}
                            name={"certified"}
                            required={true}
                            color={"primary"}/>
        </React.Fragment>
    );
}
