import React from "react";
import Layout from '../components/Layout'
import {Container, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import {container} from "../assets/globalStyle";
import {MclAppProps} from "../index";
import GridContainer from "../components/GridComponents/GridContainer";
import GridItem from "../components/GridComponents/GridItem";
// @ts-ignore
import ega from "src/assets/images/ega.jpg"

const useStyle = makeStyles((theme) => ({
    mainElement: {
        ...container,
        height: "70vh"
    },
    ega: {
        borderRadius: "0.3rem",
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(20)
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
                    <GridContainer>
                        <GridItem md={6}>
                            <Typography variant="h1" align={"left"} component={"h2"}>Our Mission</Typography>
                            <Typography variant="body1" align={"left"}>
                                The mission of the Marine Corps League is to promote the interest and to preserve traditions
                                of the United States Marine Corps; strengthen the fraternity of Marines and their families;
                                serve Marines, FMF Corpsmen, and FMF Chaplains who wear or who have worn the Eagle, Globe and
                                Anchor; and foster the ideals of Americanism and patriotic volunteerism.
                            </Typography>
                        </GridItem>
                        <GridItem>
                            <img src={ega} alt={"Eagle, Globe, and Anchor on an American Flag"} className={classes.ega}/>
                        </GridItem>
                    </GridContainer>
                </Container>
            </Layout>
        </React.Fragment>
    );
}

export default index;
