import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    StandardTextFieldProps,
    TextField,
    Typography,
    FormControlLabel,
    Radio
} from "@material-ui/core";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    inputField: {
        margin: theme.spacing(2)
    },
}));

interface formRadioFieldProps {
    fields: [{
        formLabel: string
        groupName: string
        value1: string
        label1: string
        value2: string
        label2: string
    }]
    title: string
    type: string
}
interface RadioComponentProps {
    formFields: formRadioFieldProps
    index: number
    register: any
}
export default function TextComponent(props: RadioComponentProps) {
    const {formFields, index, register} = props
    return (
        <React.Fragment>
            <Typography variant={"body1"} key={index}>{formFields.title}</Typography>
            {formFields.fields!.map((field, index) => {
                return (
                    <FormControl component="fieldset" key={index}>
                        <FormLabel component="legend">{field!.formLabel}</FormLabel>
                        <RadioGroup aria-label="applicationType" name={field!.groupName} value={field!.groupName}>
                            <FormControlLabel value={field!.value1} control={<Radio/>} label={field!.label1}/>
                            <FormControlLabel value={field!.value2} control={<Radio/>} label={field!.label2}/>
                        </RadioGroup>
                    </FormControl>
                );
            })}
        </React.Fragment>
    );
}
