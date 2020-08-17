import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../components/Layout";
import {MclAppProps} from "../index";
import {Button, Card, CardContent, TextField, CardHeader, Typography, TextFieldProps} from "@material-ui/core";
import {useForm, ArrayField} from "react-hook-form";
import {card} from "../assets/globalStyle";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import theme from "../assets/theme";
import TextComponent, {formFieldProps} from "../components/FormComponents/TextComponent";

const useStyles =makeStyles(() => ({

    formCard: {
        ...card,
        width: "60%",
        margin: "2% 20%"
    },
    inputField: {
        margin: theme.spacing(2)
    },
    submitButton: {
        margin: "1rem"
    },
    header: {
        marginTop: "-5rem"
    }
}))

export interface FormOptions {
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    dob?: string | null
    streetAddress?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null,
    appType?: "new" | "renew" | null
    memberType?: "regular" | "associate" | null
}


const metaDescription= "Join the Marine Corps League Detachment and support our mission in the Gallatin Valley"

const getSteps = () => {
    return ['Application Type', 'Biographical Details', 'Contact Info', 'Certification', 'Oath', 'Submit'];
}

const getStepContent: (step: number) => [formFieldProps] = (step: number) => {
    switch (step) {
        case 0:
            return [{
                type: "radio",
                title: "Choose Application type",
                fields: [
                    {
                        formLabel: "Application Type",
                        groupName: "appType",
                        value1: "new",
                        label1: "New Membership",
                        value2: "renew",
                        label2: "Renewal"
                    },
                ]
            }];
        case 1:
            return [{
                type: "text",
                title: "Please enter your info",
                fields: [
                    {
                        name: "firstName",
                        label: "First name",
                        variant: "filled",
                        inputRef: {required: true, maxLength: 80},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing given-name",
                        autoFocus: true,
                        placeholder:""
                    },
                    {
                        name: "lastName",
                        label: "Last name",
                        variant: "filled",
                        inputRef: {required: true, maxLength: 100},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing family-name",
                        autoFocus: false,
                        placeholder:""
                    },
                    {
                        name: "dob",
                        label: "Date of Birth",
                        variant: "filled",
                        inputRef: {required: true},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing bday",
                        autoFocus: false,
                        placeholder:""
                    },
                    {
                        name: "dateEnlistCommission",
                        label: "Enlisted/Commissioned",
                        variant: "filled",
                        inputRef: {},
                        margin: "normal",
                        required: false,
                        autoComplete: "",
                        autoFocus: false,
                        placeholder:"mm/dd/yyyy"
                    },
                    {
                        name: "eas",
                        label: "Discharge Date",
                        variant: "filled",
                        inputRef: {},
                        margin: "normal",
                        required: false,
                        autoComplete: "",
                        autoFocus: false,
                        placeholder:"mm/dd/yyyy"
                    }
                ]
            }];
        case 2:
            return [{
                type: "radio",
                title: "Choose Application type",
                fields: [
                    {
                        formLabel: "Application Type",
                        groupName: "appType",
                        value1: "new",
                        label1: "New Membership",
                        value2: "renew",
                        label2: "Renewal"
                    },
                ]
            }];
        // case 3:
        //     return (
        //         <React.Fragment>
        //             <Typography variant={"body1"}>Member Certification</Typography>
        //         </React.Fragment>
        //     )
        // case 4:
        //     return(
        //         <React.Fragment>
        //             <Typography variant={"body1"}>Affirmation of Oath</Typography>
        //         </React.Fragment>
        //     )
        // case 5:
        //     return (
        //         <React.Fragment>
        //             <Typography variant={"body1"}>Submit Membership and open payment window</Typography>
        //         </React.Fragment>
        //     )
        //
        default:
            return [{
                type: "default",
                title: "Unknown step selected",
                fields: [
                    {

                    },
                ]
            }];
    }
}

export default function memberships(props:MclAppProps) {
    const classes = useStyles();
    const {...rest} = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setFormValues] = useState({
        firstName: null,
        lastName: null,
        phone: null,
        dob: null,
        streetAddress: null,
        city: null,
        state: null,
        zipCode: null,
        appType: null,
        memberType: null

    })
    const steps = getSteps();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data: FormOptions) => console.log(data);


    const handleNext = (data: FormOptions) => {
        if (activeStep === steps.length - 1) {
            handleSubmit(onSubmit);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        const keys = Object.keys(data)
        keys.map((key) => {
            // @ts-ignore
            formValues[key] = data[key]
        })
        setFormValues(formValues);
        console.log(formValues)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <React.Fragment>
            <Layout title={"Join-Renew | Gallatin Valley MCL"} {...rest} metaDescription={metaDescription}>
                <Typography variant={"h3"} component={"h1"} align={"center"} className={classes.header}>Marine Corps League Membership Form</Typography>
                    <Card className={classes.formCard} variant={"elevation"}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps: { completed?: boolean } = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        <CardContent>
                            <div>
                                {activeStep === steps.length ? (
                                    <div>
                                        <Typography variant={"body1"}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Button onClick={handleReset}>
                                            Reset
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        {getStepContent(activeStep)!.map((formFields:formFieldProps, index: number) => {

                                            if (formFields.type === "text"){
                                                return (
                                                    <React.Fragment>
                                                        <TextComponent formFields={formFields} index={index} register={register} values={formValues}/>
                                                    </React.Fragment>
                                                )
                                            }
                                            if (formFields.type === "radio"){
                                                return null
                                            }
                                            if (formFields.type === "checkBox"){
                                                return null
                                            }
                                            return null
                                        })}
                                        <div>
                                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleSubmit(handleNext)}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                                {/*<br/>*/}
                                {/*<TextField name="phone" label="Phone" variant={"filled"} inputRef={register({required: true, maxLength: 12, pattern: /\d?\s?-?\(?(\d){3}\)?\s?-?(\d){3}\s?-?(\d){4}/i})} margin={"normal"} autoComplete={"billing tel"} className={classes.inputField} required/>*/}
                                {/*<br/>*/}
                                {/*<TextField name="streetAddress" label="Street Address" variant={"filled"} inputRef={register({required: true})} autoComplete={"billing street-address"} margin={"normal"} className={classNames(classes.inputField)} required/>*/}
                                {/*<TextField name="city" label="City" variant={"filled"} inputRef={register} autoComplete={"billing address-level2"} className={classes.inputField} margin={"normal"} required/>*/}
                                {/*<br/>*/}
                                {/*<TextField name="state" label="State" variant={"filled"} inputRef={register} autoComplete={"billing address-level1"} className={classes.inputField} margin={"normal"} required/>*/}
                                {/*<TextField name="zipCode" label="ZipCode" variant={"filled"} inputRef={register({required: true, pattern: /^\d{5}(?:[-]\d{4})?$/i})} margin={"normal"} autoComplete={"billing postal-code"} className={classes.inputField} required/>*/}
                                {/*<br/>*/}
                        </CardContent>
                    </Card>
            </Layout>
        </React.Fragment>
    );
}
