import React from "react";
import Layout from "../components/Layout";
import {MclAppProps} from "../index";
import FirebaseAuth from "../components/FirebaseAuth/FirebaseAuth";

const metaDescription = "Sign in to your MCL Detachment 1050 member account"
export default function login(props: MclAppProps) {
    const {...rest} = props
    return (
        <React.Fragment>
            <Layout title={"Login | Gallatin Valley MCL"} metaDescription={metaDescription} {...rest} >
                <FirebaseAuth returnPath={"/account"}/>
            </Layout>
        </React.Fragment>
    );
}
