import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Head from "next/head";
import {LayoutProps, MclAppProps} from "../index";
import FirebaseAuth from "../components/FirebaseAuth/FirebaseAuth";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */

}));

const metaDescription = "Sign in to your MCL Detachment 1050 member account"
export default function login(props: MclAppProps) {
    const classes = useStyles();
    const {...rest} = props
    return (
        <React.Fragment>
            <Layout title={"Login | Gallatin Valley MCL"} metaDescription={metaDescription} {...rest} >
                <FirebaseAuth />
            </Layout>
        </React.Fragment>
    );
}
