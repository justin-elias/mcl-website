import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {StandardTextFieldProps, TextField, Typography} from "@material-ui/core";
import {FormOptions} from "../../pages/memberships";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    inputField: {
        margin: theme.spacing(2)
    },
}));

export interface formFieldProps {
    fields: [StandardTextFieldProps | undefined]
    title: string
    type: string
}
interface TextComponentProps {
    formFields: formFieldProps
    index: number,
    register: any,
    values: FormOptions
}
export default function TextComponent(props: TextComponentProps) {
    const classes = useStyles();
    const {formFields, index, register, values} = props
    return (
        <React.Fragment>
            <Typography variant={"body1"} key={index}>{formFields.title}</Typography>
            {formFields.fields!.map((field, index) => {

                return (
                    <TextField name={field!.name}
                               label={field!.label}
                               variant={field!.variant}
                               inputRef={register(field!.inputRef)}
                               margin={field!.margin}
                               required={field!.required}
                               autoComplete={field!.autoComplete}
                               className={classes.inputField}
                               autoFocus={field!.autoFocus}
                               key={index}
                               value={values[field!.name]}
                    />
                )
            })}
        </React.Fragment>
    );
}
