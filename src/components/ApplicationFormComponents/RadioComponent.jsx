import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    inputField: {
        margin: theme.spacing(3)
    },
}));

export default function RadioComponent(props) {
    const classes = useStyles();
    const {fields, register, currentValue} = props;
    const [value, setValue] = React.useState(currentValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <React.Fragment>
            <FormControl component="fieldset" className={classes.inputField} >
                <FormLabel component={"legend"}>{fields.formLabel}</FormLabel>
                <RadioGroup name={fields.groupName} aria-label={fields.groupName} value={value} onChange={handleChange}>
                    <FormControlLabel value={fields.value1} control={<Radio color="primary" inputRef={register({required: true})}/>} label={fields.label1}/>
                    <FormControlLabel value={fields.value2} control={<Radio  color="primary" inputRef={register({required: true})} />} label={fields.label2}/>
                </RadioGroup>
                <br/>
            </FormControl>
        </React.Fragment>
    );
}
