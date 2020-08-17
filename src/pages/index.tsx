import React from "react";
import Layout from '../components/Layout'
import {Container, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import {container} from "../assets/globalStyle";
import {MclAppProps} from "../index";

const useStyle = makeStyles(() => ({
    mainElement: {
        ...container,
        height: "70vh"
    }
}))

const metaDescription = "Welcome to the Robert A. Ellerd Detachment of the Marine Corps League."
const index = (props: MclAppProps) => {
    const classes = useStyle();
    const { ...rest } = props

    return (
        <React.Fragment>
            <Layout title={"Home | Gallatin Valley MCL"} metaDescription={metaDescription} {...rest} hero>

                <Container className={classes.mainElement}>
                    <Typography variant="h1" align={"center"}>Excuse the Mess</Typography>
                    <Typography variant="body1" align={"center"}> We are setting up our new website. We should be back online
                        by August 17th, 2020</Typography>
                </Container>
            </Layout>
        </React.Fragment>
    );
}

export default index;
