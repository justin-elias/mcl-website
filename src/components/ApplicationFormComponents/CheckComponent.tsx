import React from "react";
import {Typography, FormLabel} from "@material-ui/core";
import {CheckBox} from "@material-ui/icons";


export default function CheckComponent(props: { text: any; fields: any; register: any; }) {
    const {text, register} = props

    return (
        <React.Fragment>
            <Typography variant={"body1"} align={"center"}>
                {text}
            </Typography>
            <FormLabel component={"legend"}>By checking this box, I certify the above to be true</FormLabel>
            {/*@ts-ignore*/}
            <CheckBox color={"primary"} onChange={handleChange} name="certified" check={certified} id={certified} ref={register({require: true})}/>
        </React.Fragment>
    );
}
