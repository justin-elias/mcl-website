import React from "react";
import Layout from '../components/Layout'
import {Container, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import {container} from "../assets/globalStyle";
import {MclAppProps} from "../index";
import Member from "../components/Member/Member";

const useStyle = makeStyles(() => ({
    mainElement: {
        ...container,
        height: "70vh"
    }
}))

const metaDataDescription = "View your MCL Detachment 1050 member account";
const account = (props: MclAppProps) => {
    const classes = useStyle();
    const {user, ...rest} = props

    return (
        <React.Fragment>
            <Layout title={"Account | Gallatin Valley MCL"} metaDescription={metaDataDescription} {...rest} >
                <Container className={classes.mainElement}>
                    <Member {...props} />
                </Container>
            </Layout>
        </React.Fragment>
    )
}

export default account;
