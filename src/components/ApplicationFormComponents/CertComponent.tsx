import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import RadioComponent from "./RadioComponent";
import {CertComponentProps} from "../../index";
import {
    Typography,
    FormControl,
    FormControlLabel,
    FormGroup,
    Checkbox,
    FormHelperText
} from "@material-ui/core";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    helperText: {
        color: theme.palette.primary.main
    }
}));

export default function CertComponent(props: CertComponentProps) {
    const classes = useStyles();
    const {register, currentValue, radioFields, certified } = props;
    const [checked, setChecked] = useState(certified);
    const [error, setError] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        if (!isChecked) {
            setError(true)
        }
    };
    return (
        <React.Fragment>
            <RadioComponent fields={radioFields} register={register} currentValue={currentValue}/>
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

            <FormControl component="fieldset" required error={error}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox color={"primary"} checked={checked} onChange={handleChange} name="certified" inputRef={register({required: true})}/>}
                                      label={"By checking this box, I certify the above to be true"}
                    />
                    <FormHelperText className={classes.helperText}>You Must certify the above to be true to continue</FormHelperText>
                </FormGroup>
            </FormControl>
        </React.Fragment>
    );
}
