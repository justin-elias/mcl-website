import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {TextField, Typography} from "@material-ui/core";
import {TextComponentProps} from "../../index";

const useStyles = makeStyles((theme: Theme) => ({
    inputField: {
        margin: theme.spacing(2)
    },
    helperText: {
        color: theme.palette.error.main
    }
}));

export default function TextComponent(props: TextComponentProps) {
    const classes = useStyles();
    const {formFields, index, register, values} = props

    return (
        <React.Fragment>
            <Typography variant={"body1"} key={index}>{formFields.title}</Typography>
            {/*@ts-ignore*/}
            {formFields.fields.map((field) => {
                let defaultValue: string;
                let shrink: boolean | undefined = undefined;
                if (field!.type === "date"){
                    shrink = true;
                }

                const fieldName = field?.name ? field.name : false;
                defaultValue = fieldName ? values[fieldName] : field.placeholder;
                return (
                    <TextField name={field!.name}
                               label={field!.label}
                               type={field!.type}
                               id={field!.name}
                               variant={field!.variant}
                               inputRef={register(field!.inputRef)}
                               margin={field!.margin}
                               required={field!.required}
                               autoComplete={field!.autoComplete}
                               className={classes.inputField}
                               autoFocus={field!.autoFocus}
                               key={field!.name}
                               defaultValue={defaultValue}
                               placeholder={field.placeholder}
                               InputLabelProps={{shrink: shrink}}
                    />
                )
            })}
        </React.Fragment>
    );
}
