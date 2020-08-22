import React, {useState} from "react";
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormHelperText,
    FormControl
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    helperText: {
        color: theme.palette.primary.main
    }
}));

export default function CheckComponent(props: { helperText?: string; register: any; checked: boolean | undefined; name: string; required: boolean | undefined; color: "default" | "primary" | "secondary" | undefined; label: string}) {
    const classes = useStyles();
    const {helperText, register, name, required, color, label} = props;
    const [checked, setChecked] = useState(props.checked);
    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        if (!isChecked && required) {
            setError(true)
        }
    };
    return (
        <React.Fragment>
            <FormControl component="fieldset" required={required} error={error}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox color={color} checked={checked} onChange={handleChange} name={name} inputRef={register({required: required})}/>}
                                      label={label}
                    />
                    <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>
                </FormGroup>
            </FormControl>
        </React.Fragment>
    );
}
