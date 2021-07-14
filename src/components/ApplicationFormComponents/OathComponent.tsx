import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {OathComponentProps} from "../../@types";
import {Typography} from "@material-ui/core";
import CheckComponent from "./CheckComponent";

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
            <CheckComponent helperText={"You Must affirm the above to continue"}
                            register={register}
                            checked={affirmed}
                            name={"oath"}
                            required={true}
                            color={"primary"}
                            label={"By checking this box, I agree to swear the above oath"}/>
        </React.Fragment>
    );
}
