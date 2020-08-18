import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@material-ui/core";
import {RadioComponentProps} from "../../index";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    inputField: {
        margin: theme.spacing(3)
    },
}));

export default function RadioComponent(props: RadioComponentProps) {
    const classes = useStyles();
    const {fields, register, currentValue} = props;
    const [value, setValue] = React.useState(currentValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <React.Fragment>
            <FormControl component="fieldset" className={classes.inputField} >
                <FormLabel component={"legend"}>{fields.formLabel}</FormLabel>
                <RadioGroup name={fields.groupName} aria-label={fields.groupName} value={value} onChange={handleChange} ref={register({required: true}) }>
                    <FormControlLabel value={fields!.value1} control={<Radio color="primary" inputRef={register({required: true})}/>} label={fields!.label1}/>
                    <FormControlLabel value={fields!.value2} control={<Radio  color="primary" inputRef={register({required: true})} />} label={fields!.label2}/>
                </RadioGroup>
                <br/>
            </FormControl>
        </React.Fragment>
    );
}
