import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {OathComponentProps} from "../../index";
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography} from "@material-ui/core";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    redText: {
        color: theme.palette.primary.main
    }
}));

export default function OathComponent(props: OathComponentProps) {
    const classes = useStyles();
    const {register, affirmed, memberName} = props
    const [checked, setChecked] = useState(affirmed);
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
            <Typography variant={"body1"} align={"left"}>
                "I, <span className={classes.redText}>{memberName}</span>, In the Presence of Almighty God, do solemnly swear, that I will uphold and
                defend the Constitution and Laws of the United States of America and the Bylaws and Administrative Procedures of
                the Marine Corps League. That I take this obligation willingly and in good faith and that I will follow the directions
                and guidance of elected and appointed officers of the League. That I will participate and support the missions and
                activities of the Marine Corps League, and that I promise to govern my conduct in such a manner that I will never
                bring discredit upon myself, Members of the League, or the Marine Corps League, so help me God.
            </Typography>
            <FormControl component="fieldset" required error={error}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox color={"primary"} checked={checked} onChange={handleChange} name="oath" inputRef={register({required: true})}/>}
                                      label={"By checking this box, I agree to swear the above oath"}
                    />
                    <FormHelperText className={classes.redText}>You Must affirm the above to continue</FormHelperText>
                </FormGroup>
            </FormControl>
        </React.Fragment>
    );
}
