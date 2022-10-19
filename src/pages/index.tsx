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
    },
    gridItem: {
        marginTop: theme.spacing(5)
    }
}))
const gKey = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuZCKzltERVMRTCZ7l1uTG_8&key=" + process.env.NEXT_PUBLIC_MAPS_API;
const metaDescription = "Welcome to the Robert A. Ellerd Detachment of the Marine Corps League."
const Index = (props: MclAppProps) => {
    const classes = useStyle();
    const { ...rest } = props

    return (
        <React.Fragment>
                    <Layout title={"Home | Gallatin Valley MCL"} metaDescription={metaDescription} {...rest} hero whiteLogo>
                    <Container className={classes.mainElement}>
                        <GridContainer justifyContent={"space-between"}>
                            <GridItem md={12} className={classes.gridItem}>
                                <Typography variant="h2" align={"left"} component={"h2"}>2022 Marine Corps Ball</Typography>
                                <Typography variant="body1" align={"left"}>
                                    Join the Robert A. Ellerd Detachment of the Marine Corps League in celebrating the 247th Marine Corps Birthday on Nov 12, 2022 at the Best Western Grand Tree Hotel
                                </Typography>
                                <br/>
                                <Typography variant="body1" align={"left"}><strong>When:</strong> November 12, 2022 @ 1500</Typography>
                                <Typography variant="body1" align={"left"}><strong>Where:</strong> <a href={"https://www.bwpbozeman.com"} rel={"noopener"}>Best Western Grantree</a><br/>    1325 North 7th Avenue<br/>  Bozeman, Mt 59715</Typography>
                                <br/>
                                <Button color={"primary"} href={"https://www.eventbrite.com/e/2022-marine-corps-ball-tickets-441369075787"} size={"large"} variant={"contained"}>Buy Tickets</Button>
                                <br/>
                            </GridItem>
                            <Hidden smDown>
                                <GridItem className={classes.gridItem}>
                                    <Image src={ega} width={450} height={337} alt={"Eagle, Globe, and Anchor on an American Flag"} className={classes.ega} placeholder={"blur"}/>
                                </GridItem>
                            </Hidden>
                            <GridItem md={6} className={classes.gridItem}>
                                <Typography variant="h2" align={"left"} component={"h2"}>Our Mission</Typography>
                                <Typography variant="body1" align={"left"}>
                                    The mission of the Marine Corps League is to promote the interest and to preserve traditions
                                    of the United States Marine Corps; strengthen the fraternity of Marines and their families;
                                    serve Marines, FMF Corpsmen, and FMF Chaplains who wear or who have worn the Eagle, Globe and
                                    Anchor; and foster the ideals of Americanism and patriotic volunteerism.
                                </Typography>
                                <br/>
                                <Button color={"primary"} href={"/memberships"} size={"large"} variant={"contained"}>Join Us</Button>
                            </GridItem>
                        </GridContainer>
                        <br/>
                        <GridContainer justifyContent={"center"} spacing={6}>
                            <GridItem className={classes.gridItem}>
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
                            <GridItem className={classes.gridItem}>
                                <iframe width="450" height="450" frameBorder="0" style={{border:0}}
                                        src={gKey}
                                        allowFullScreen/>
                            </GridItem>
                        </GridContainer>
                    </Container>
                </Layout>
        </React.Fragment>
    );
}

export default Index;
