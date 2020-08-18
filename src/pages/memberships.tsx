import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../components/Layout";
import {MclAppProps, formFieldProps, formRadioFieldProps, FormOptions} from "../index";
import {Button, Card, CardContent, Typography, Link} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {card} from "../assets/globalStyle";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import theme from "../assets/theme";
import TextComponent from "../components/ApplicationFormComponents/TextComponent";
import RadioComponent from "../components/ApplicationFormComponents/RadioComponent";
import CertComponent from "../components/ApplicationFormComponents/CertComponent";
import OathComponent from "../components/ApplicationFormComponents/OathComponent";
import SubmitComponent from "../components/ApplicationFormComponents/SubmitComponent";

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
const datePattern = RegExp("^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\\d|2[0-8])[- /.]02)[- /.]\\d{4}|29[- /.]02[- /.](\\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$")
const metaDescription= "Join the Marine Corps League Detachment and support our mission in the Gallatin Valley"

const getSteps = () => {
    return ['Application Type', 'Biographical Details', 'Contact Info', 'Certification', 'Oath', 'Submit'];
}
// @ts-ignore
const getStepContent: (step: number) => formFieldProps[] = (step: number) => {
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
                    {
                        formLabel: "Member Type",
                        groupName: "memberType",
                        value1: "regular",
                        label1: "Regular Member",
                        value2: "associate",
                        label2: "Associate Member"
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
                        placeholder:"",
                        helperText: ""
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
                        placeholder:"",
                        helperText: ""
                    },
                    {
                        name: "dob",
                        label: "Date of Birth",
                        type: "date",
                        id: name,
                        variant: "filled",
                        inputRef: {required: true, pattern: datePattern},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing bday",
                        autoFocus: false,
                        placeholder:"mm/dd/yyyy",
                        helperText: "Please use mm/dd/yyyy format"
                    },
                    {
                        name: "dateEnlistCommission",
                        label: "Enlisted/Commissioned",
                        type: "date",
                        id: name,
                        variant: "filled",
                        inputRef: {pattern: datePattern},
                        margin: "normal",
                        required: false,
                        autoComplete: "",
                        autoFocus: false,
                        placeholder:"mm/dd/yyyy",
                        helperText: "Please use mm/dd/yyyy format"
                    },
                    {
                        name: "eas",
                        label: "Discharge Date",
                        type: "date",
                        id: name,
                        variant: "filled",
                        inputRef: {pattern: datePattern},
                        margin: "normal",
                        required: false,
                        autoComplete: "",
                        autoFocus: false,
                        placeholder:"mm/dd/yyyy",
                        helperText: "Please use mm/dd/yyyy format"

                    }
                ]
            }];
        case 2:
            return [{
                type: "text",
                title: "Enter Contact Info",
                fields: [
                    {
                        name: "streetAddress",
                        label: "Street Address",
                        type: "text",
                        id: name,
                        variant: "filled",
                        inputRef: {required: true},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing street-address",
                        autoFocus: true,
                        placeholder:"",
                        helperText: ""
                    },
                    {
                        name: "city",
                        label: "City",
                        type: "text",
                        id: name,
                        variant: "filled",
                        inputRef: {required: true, maxLength: 80},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing address-level2",
                        autoFocus: false,
                        placeholder:"",
                        helperText: ""
                    },
                    {
                        name: "state",
                        label: "State",
                        type: "text",
                        id: name,
                        variant: "filled",
                        inputRef: {required: true, maxLength: 80},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing address-level1",
                        autoFocus: false,
                        placeholder:"",
                        helperText: ""
                    },
                    {
                        name: "zipCode",
                        label: "Zip Code",
                        type: "text",
                        id: name,
                        variant: "filled",
                        inputRef: {required: true, pattern: /^\d{5}(?:[-]\d{4})?$/i},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing postal-code",
                        autoFocus: false,
                        placeholder:"12345-6789",
                        helperText: "Please use 12345-6789 format"
                    },
                    {
                        name: "phone",
                        label: "Phone",
                        type: "tel",
                        id: name,
                        variant: "filled",
                        inputRef: {required: true, maxLength: 12, pattern: /\d?\s?-?\(?(\d){3}\)?\s?-?(\d){3}\s?-?(\d){4}/i},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing tel",
                        autoFocus: false,
                        placeholder:"",
                        helperText: "Please use 555-555-5555 format"
                    },
                ]
            }];
        case 3:
            return[{
                type: "cert",
                title: "Member Certification",
                fields: [
                    {
                        certified: false
                    },
                ],
                radio: {
                    formLabel: "Have you ever been convicted of a felony?",
                    groupName: "felony",
                    value1: "yes",
                    label1: "Yes",
                    value2: "no",
                    label2: "No",
                },
            }]
        case 4:
            return[{
                type: "oath",
                title: "Affirmation of Oath",
                fields: [
                    {
                        affirmed: false
                    }
                ]
            }]

        case 5:
            return [{
                type: "submit",
                title: "Submit Membership and open payment window",
                fields: [
                    {

                    },
                ]
            }]

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
        firstName: "",
        lastName: "",
        phone: "",
        dob: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        appType: "new",
        memberType: "regular",
        dateEnlistCommission: "",
        eas: "",
        felony: "",
        certified: false,
        oath: false
    })
    const steps = getSteps();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data: FormOptions) => {

        console.log(data)
    };

    const squareUrl = (choice: string) => {
        switch (choice) {
            case "newregular":
                return "https://checkout.square.site/pay/192bc66d7a504e958ba969b29a1c48fa"
            case "newassociate":
                return "https://checkout.square.site/pay/70ca90c66b67402ea2151cbde774bb4a"
            case "renewregular":
                return "https://checkout.square.site/pay/d5caee920b8b4679bab3164361a627d1"
            case "renewassociate":
                return "https://checkout.square.site/pay/7979afdf17f74cbaaad812887028d8a5"
        }
    }
    const handleNext = (data: FormOptions) => {
        if (activeStep === steps.length - 1) {
            handleSubmit(onSubmit);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // @ts-ignore
        const keys: Array<keyof FormOptions> = Object.keys(data)
        keys.map((key) => {
            // @ts-ignore
            formValues[key] = data[key];
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
                            {steps.map((label) => {
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
                                                    // @ts-ignore
                                                    <TextComponent formFields={formFields} key={index} index={index} register={register} values={formValues} errors={errors}/>
                                                )
                                            }
                                            if (formFields.type === "radio"){
                                                // @ts-ignore
                                                return formFields.fields.map((field: formRadioFieldProps, index) => {
                                                    return (
                                                        // @ts-ignore
                                                        <RadioComponent key={index}  fields={field} register={register} currentValue={formValues[field.groupName]}/>
                                                    )
                                            })}
                                            if (formFields.type === "cert"){
                                                return <CertComponent register={register} currentValue={""} certified={formValues.certified} radioFields={formFields.radio} key={index}/>
                                            }
                                            if (formFields.type === "oath"){
                                                return <OathComponent key={index} register={register} affirmed={formValues.oath} memberName={formValues.firstName + " " + formValues.lastName} />
                                            }
                                            if (formFields.type === "submit"){
                                                // @ts-ignore
                                                return <SubmitComponent formValues={formValues} title={formFields.title}/>
                                            }
                                            return null
                                        })}
                                        <div>
                                            <br/>
                                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                                Back
                                            </Button>
                                            {activeStep !== steps.length - 1 ?
                                            (<Button
                                                variant="contained"
                                                color="primary"
                                                role={"submit"}
                                                onClick={handleSubmit(handleNext)}
                                            >Next</Button>) : (
                                                <Button
                                                variant="contained"
                                                color="primary"
                                                role={"submit"}
                                                ><Link color={"inherit"} target={"_blank"} href={squareUrl(formValues.appType+formValues.memberType)}>Make Payment</Link></Button>
                                                )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
            </Layout>
        </React.Fragment>
    );
}
