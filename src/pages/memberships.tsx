import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../components/Layout";
import {MclAppProps, formFieldProps, formRadioFieldProps, FormOptions} from "../index";
import {
    Button,
    Card,
    CardContent,
    Typography,
    Hidden,
    MobileStepper,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {card} from "../assets/globalStyle";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextComponent from "../components/ApplicationFormComponents/TextComponent";
import RadioComponent from "../components/ApplicationFormComponents/RadioComponent";
import CertComponent from "../components/ApplicationFormComponents/CertComponent";
import OathComponent from "../components/ApplicationFormComponents/OathComponent";
import SubmitComponent from "../components/ApplicationFormComponents/SubmitComponent";
import * as Sentry from "@sentry/node"
import sendForm from "../utils/auth/sendForm";

const useStyles =makeStyles((theme) => ({

    formCard: {
        ...card,
        width: "60%",
        margin: "2% 20%",
        [theme.breakpoints.down("sm")]: {

            width: "100%",
            margin: "1rem 0"

        },
    },
    inputField: {
        margin: theme.spacing(2)
    },
    submitButton: {
        margin: "1rem"
    },
    header: {
        marginTop: "-5rem",
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(1)
        }

    },
    root: {
        width: "30%",
        flexGrow: 1,
        margin: "0 35%"
    },
    appBar: {
        position: "relative",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        "&:hover": {
            color: "#fff",
            textDecoration: "none"
        }
    }
}))
const datePattern = RegExp("(((0[13578]|1[02])\\/(0[1-9]|1[0-9]|2[0-9]|3[01])|(0[469]|11)(0[1-9]|1[0-9]|2[0-9]|30)|(02)(0[1-9]|1[0-9]|2[0-8]))\\/(19|20)(\\d{2})|(0229)(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96))")
const metaDescription= "Join the Marine Corps League Detachment and support our mission in the Gallatin Valley"

const getSteps = (appType: string) => {

    return appType === "new" ? ['Application Type', 'Biographical Details', 'Contact Info', 'Certification', 'Oath', 'Submit'] : ['Application Type', 'Biographical Details', 'Contact Info', 'Submit'];
}
// @ts-ignore
const getStepContent: (step: number, appType: string) => formFieldProps[] = (step: number, appType) => {
    let adjustedStep = step;
    if (appType === "renew"){
        if (step === 3 || step === 4){
            adjustedStep = 5
        }
    }
    switch (adjustedStep) {
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
                        helperText: "",
                        hidden: false
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
                        helperText: "",
                        hidden: false
                    },
                    {
                        name: "dob",
                        label: "Date of Birth",
                        type: "date",
                        id: name,
                        variant: "filled",
                        inputRef: {required: true},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing bday",
                        autoFocus: false,
                        placeholder:"mm/dd/yyyy",
                        helperText: "Please use mm/dd/yyyy format",
                        hidden: false
                    },
                    {
                        name: "mclId",
                        label: "MCL ID # (If known)",
                        type: "text",
                        id: name,
                        variant: "filled",
                        inputRef: {},
                        margin: "normal",
                        required: false,
                        autoComplete: "",
                        autoFocus: false,
                        placeholder:"",
                        helperText: "",
                        hidden: false
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
                        helperText: "Please use mm/dd/yyyy format",
                        hidden: true
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
                        helperText: "Please use mm/dd/yyyy format",
                        hidden: true

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
                        helperText: "",
                        hidden: false
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
                        helperText: "",
                        hidden: false
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
                        helperText: "",
                        hidden: false
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
                        helperText: "Please use 12345-6789 format",
                        hidden: false
                    },
                    {
                        name: "email",
                        label: "Email",
                        type: "email",
                        id: name,
                        variant: "filled",
                        inputRef: {required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i},
                        margin: "normal",
                        required: true,
                        autoComplete: "billing email",
                        autoFocus: false,
                        placeholder:"me@example.com",
                        helperText: "We need a valid email address",
                        hidden: false
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
                        helperText: "Please use 555-555-5555 format",
                        hidden: false
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
                        hidden: true
                    },
                ]
            }];
    }
}

const defaultFormValues: FormOptions = {
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    appType: "renew",
    memberType: "regular",
    dateEnlistCommission: "",
    eas: "",
    felony: "",
    certified: false,
    oath: false,
    mclId: "",
    email: "",
    subscribe: true
}

export default function memberships(props:MclAppProps) {
    const classes = useStyles();
    const {user, ...rest} = props;
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState(defaultFormValues)
    const [steps, setSteps] = useState<string[]>(getSteps("renew"))
    const { register, handleSubmit, clearErrors} = useForm();

    const squareUrl: (choice: string) => string = (choice: string) => {
        switch (choice) {
            case "newregular":
                return "https://checkout.square.site/pay/73d22451755f4188ab0d17cc89a4f915"
            case "newassociate":
                return "https://checkout.square.site/pay/b11e5019b04c42ab876e862080cc9216"
            case "renewregular":
                return "https://checkout.square.site/pay/c3d508a2d5554584b72619cb6c9368ee"
            case "renewassociate":
                return "https://checkout.square.site/pay/a6f4f1c4ea3649f58d721660b12c691d"
            default:
                return ""
        }
    }

    const saveFormValues = (data: FormOptions) => {
        const keys: string[] = Object.keys(data)
        keys.map((key) => {
            // @ts-ignore
            formValues[key] = data[key];
        })
        setFormValues(formValues);
    }
    const submitForm: (data:FormOptions) => void = async (data) => {
        saveFormValues(data);
        try {
            await sendForm(formValues)
        } catch(error) {
            Sentry.captureException(error);
        }
        window.location.assign(squareUrl(formValues.appType + formValues.memberType))
    }
    const handleNext = async (data: FormOptions) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        if (formValues.appType === "renew"){
            if (activeStep === 3 || activeStep === 4){
                setActiveStep(5)
            }
        }
        await saveFormValues(data)
        console.log(formValues)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        if (formValues.appType === "renew"){
            if (activeStep === 3 || activeStep === 4){
                setActiveStep(2)
            }
        }
    };

    const handleReset = () => {
        clearErrors();
        setFormValues(defaultFormValues);
        setActiveStep(0);
    };

    useEffect(() => {
        if (formValues.appType === "new"){
            setSteps(getSteps("new"))
            formValues.oath = false;
            formValues.certified = false;
        }
        if (formValues.appType === "renew") {
            setSteps(getSteps("renew"))
            formValues.oath = true;
            formValues.certified = true;
        }
    }, [formValues.appType])
    return (
        <React.Fragment>
                <Layout title={"Join-Renew | Gallatin Valley MCL"} {...rest} metaDescription={metaDescription}>
                    <Typography variant={"h3"} component={"h1"} align={"center"} className={classes.header}>Marine Corps
                        League Membership Form</Typography>
                    <Card className={classes.formCard} variant={"elevation"}>
                        <Hidden lgUp>
                            <MobileStepper
                                variant="dots"
                                steps={steps.length}
                                position="static"
                                activeStep={activeStep}
                                className={classes.root}
                                backButton={null}
                                nextButton={null}
                            />
                        </Hidden>
                        <Hidden mdDown>
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
                        </Hidden>
                        <CardContent>
                            <div>
                                {activeStep === 7 ? (
                                    <div>
                                        <Typography variant={"body1"}>
                                            The payment window should have opened in a new window. If there are any questions,
                                            please email Justin @ <a href={"mailto:justin@gallatinvalleymcl.org"}>justin@gallatinvalleymcl.org</a>
                                            <br/>
                                            We hope to see you at our next meeting at 1900 hours on September 15th, 2020 at the Bozeman American Legion
                                        </Typography>
                                        <Typography variant={"h6"}>
                                            Meeting Location:
                                        </Typography>
                                        <Typography variant={"body1"}>
                                            American Legion
                                            225 E Main
                                            Bozeman, MT 59771
                                            United States
                                        </Typography>
                                        <Button onClick={handleReset}>
                                            Reset
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        {getStepContent(activeStep, formValues.appType)!.map((formFields: formFieldProps, index: number) => {
                                            if (formFields.type === "text") {
                                                return (
                                                    <TextComponent formFields={formFields} key={index} index={index}
                                                        // @ts-ignore*/}
                                                                   register={register} values={formValues}
                                                                   appType={formValues.appType}/>
                                                )
                                            }
                                            if (formFields.type === "radio") {
                                                // @ts-ignore
                                                return formFields.fields.map((field: formRadioFieldProps, index) => {
                                                    return (
                                                        <RadioComponent key={index} fields={field} register={register}
                                                            // @ts-ignore*/}
                                                                        currentValue={formValues[field.groupName]}/>
                                                    )
                                                })
                                            }
                                            if (formFields.type === "cert" && formValues.appType === "new") {
                                                return <CertComponent register={register} currentValue={""}
                                                                      certified={formValues.certified}
                                                                      radioFields={formFields.radio} key={index}/>
                                            }
                                            if (formFields.type === "oath" && formValues.appType === "new") {
                                                return <OathComponent key={index} register={register}
                                                                      affirmed={formValues.oath}
                                                                      memberName={formValues.firstName + " " + formValues.lastName}/>
                                            }
                                            if (formFields.type === "submit") {
                                                // @ts-ignore
                                                return <SubmitComponent formValues={formValues}
                                                                        title={formFields.title}
                                                                        key={index}
                                                                        register={register}/>
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
                                                    <React.Fragment>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            role={"submit"}
                                                            onClick={handleSubmit(submitForm)}
                                                        >Make Payment</Button>
                                                    </React.Fragment>
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
