import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {TextField, Typography} from "@material-ui/core";
import {TextComponentProps} from "../../@types";

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
    const {formFields, index, register, values, appType} = props

    return (
        <React.Fragment>
            <Typography variant={"body1"} key={index}>{formFields.title}</Typography>
            {/*@ts-ignore*/}
            {formFields.fields.map((field, index) => {
                if (field.hidden && appType === "renew"){
                    return null
                }
                if (appType === "new" && field.name === "mclId"){
                    return null
                }
                let defaultValue: string;
                let shrink: boolean | undefined = undefined;
                if (field!.type === "date"){
                    // shrink = true;
                }

                const fieldName = field?.name ? field.name : false;
                defaultValue = fieldName ? values[fieldName] : field.placeholder;
                return (
                    <React.Fragment key={index}>
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
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    );
}
