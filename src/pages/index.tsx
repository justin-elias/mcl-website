import React from "react";
import Layout from '../components/Layout'
import {Button, Container, Hidden, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import {container} from "../assets/globalStyle";
import {MclAppProps} from "../@types";
import GridContainer from "../components/GridComponents/GridContainer";
import GridItem from "../components/GridComponents/GridItem";
import ega from "../../public/images/ega.jpg"
import Image from "next/image";

const useStyle = makeStyles((theme) => ({
    mainElement: {
        ...container,
        height: "auto"
    },
    ega: {
        borderRadius: "0.3rem",
        marginTop: theme.spacing(5),
    }
}))
const gKey = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuZCKzltERVMRTCZ7l1uTG_8&key=" + process.env.NEXT_PUBLIC_MAPS_API;
const metaDescription = "Welcome to the Robert A. Ellerd Detachment of the Marine Corps League."
const index = (props: MclAppProps) => {
    const classes = useStyle();
    const { ...rest } = props

    return (
        <React.Fragment>
            <Hidden xsDown>
                    <Layout title={"Home | Gallatin Valley MCL"} metaDescription={metaDescription} {...rest} hero whiteLogo>
                    <Container className={classes.mainElement}>
                        <GridContainer justifyContent={"space-between"}>
                            <GridItem md={6}>
                                <Typography variant="h1" align={"left"} component={"h2"}>Our Mission</Typography>
                                <Typography variant="body1" align={"left"}>
                                    The mission of the Marine Corps League is to promote the interest and to preserve traditions
                                    of the United States Marine Corps; strengthen the fraternity of Marines and their families;
                                    serve Marines, FMF Corpsmen, and FMF Chaplains who wear or who have worn the Eagle, Globe and
                                    Anchor; and foster the ideals of Americanism and patriotic volunteerism.
                                </Typography>
                                <br/>
                                <Button color={"primary"} href={"/memberships"} size={"large"} variant={"contained"}>Join Us</Button>
                            </GridItem>
                            <Hidden smDown>
                                <GridItem>
                                    <Image src={ega} width={450} height={337} alt={"Eagle, Globe, and Anchor on an American Flag"} className={classes.ega} placeholder={"blur"}/>
                                </GridItem>
                            </Hidden>
                        </GridContainer>
                        <br/>
                        <GridContainer justifyContent={"center"} spacing={6}>
                            <GridItem>
                                <Typography variant={"h3"}>Meeting Info</Typography>
                                <br/>
                                <Typography variant={"body1"}>
                                    1900 hours on the 3rd Tuesday of Every Month <br/> <br/>
                                    <strong>Location:</strong> <br/>
                                    2nd Floor of the Bozeman American Legion <br/>
                                    225 E. Main St <br/>
                                    Bozeman, Mt 59715
                                </Typography>
                            </GridItem>
                            <GridItem>
                                <iframe width="450" height="450" frameBorder="0" style={{border:0}}
                                        src={gKey}
                                        allowFullScreen/>
                            </GridItem>
                        </GridContainer>
                    </Container>
                </Layout>
            </Hidden>
            <Hidden smUp>
                <Layout title={"Home | Gallatin Valley MCL"} metaDescription={metaDescription} {...rest}>
                    <Container className={classes.mainElement}>
                        <GridContainer justifyContent={"space-between"}>
                            <GridItem md={6}>
                                <Typography variant="h1" align={"left"} component={"h2"}>Our Mission</Typography>
                                <Typography variant="body1" align={"left"}>
                                    The mission of the Marine Corps League is to promote the interest and to preserve traditions
                                    of the United States Marine Corps; strengthen the fraternity of Marines and their families;
                                    serve Marines, FMF Corpsmen, and FMF Chaplains who wear or who have worn the Eagle, Globe and
                                    Anchor; and foster the ideals of Americanism and patriotic volunteerism.
                                </Typography>
                                <br/>
                                <Button color={"primary"} href={"/memberships"} size={"large"} variant={"contained"}>Join Us</Button>
                            </GridItem>
                            <Hidden smDown>
                                <GridItem>
                                    <Image src={ega} width={450} height={337} alt={"Eagle, Globe, and Anchor on an American Flag"} className={classes.ega} placeholder={"blur"}/>
                                </GridItem>
                            </Hidden>
                        </GridContainer>
                        <br/>
                        <GridContainer justifyContent={"center"} spacing={6}>
                            <GridItem>
                                <Typography variant={"h3"}>Meeting Info</Typography>
                                <br/>
                                <Typography variant={"body1"}>
                                    1900 hours on the 3rd Tuesday of Every Month <br/> <br/>
                                    <strong>Location:</strong> <br/>
                                    2nd Floor of the Bozeman American Legion <br/>
                                    225 E. Main St <br/>
                                    Bozeman, Mt 59715
                                </Typography>
                            </GridItem>
                            <GridItem>
                                <iframe width="450" height="450" frameBorder="0" style={{border:0}}
                                        src={gKey}
                                        allowFullScreen/>
                            </GridItem>
                        </GridContainer>
                    </Container>
                </Layout>
            </Hidden>
        </React.Fragment>
    );
}

export default index;
