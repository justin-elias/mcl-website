import React from "react";
import Layout from "../components/Layout";
import { Button, Container, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { container } from "../assets/globalStyle";
import { MclAppProps } from "../@types";
import GridContainer from "../components/GridComponents/GridContainer";
import GridItem from "../components/GridComponents/GridItem";
import ega from "../../public/images/ega.jpg";
import Image from "next/image";

const useStyle = makeStyles((theme) => ({
  mainElement: {
    ...container,
    height: "auto",
  },
  ega: {
    borderRadius: "0.3rem",
    marginTop: theme.spacing(5),
  },
  gridItem: {
    marginTop: theme.spacing(5),
  },
}));
const gKey =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuZCKzltERVMRTCZ7l1uTG_8&key=" +
  process.env.NEXT_PUBLIC_MAPS_API;
const metaDescription =
  "Welcome to the Robert A. Ellerd Detachment of the Marine Corps League.";
const Index = (props: MclAppProps) => {
  const classes = useStyle();
  const { ...rest } = props;

  return (
    <React.Fragment>
      <Layout
        title={"Home | Gallatin Valley MCL"}
        metaDescription={metaDescription}
        {...rest}
        hero
        whiteLogo
      >
        <Container className={classes.mainElement}>
          <GridContainer justifyContent={"space-between"}>
            <GridItem md={12} className={classes.gridItem}>
              <Typography variant="h2" align={"left"} component={"h2"}>
                Advertise in State Convention Program{" "}
              </Typography>
              <Typography variant="body1" align={"left"}>
                <strong>Program Book Dimensions:</strong> 8 1/2" x 11"
                <br /> The 2023 Marine Corps League State Convention Program
                Booklet will be published by the Marine Corps League Detachment
                #1050 in concert with the Bozeman, Montana Local Convention
                Committee. Your support for this publication will help
                commemorate this years' Montana State Convention and will also
                help support our Marines helping Marines & Scholarship Programs.
              </Typography>
              <br />
              <Typography variant="body1" align={"left"}>
                <strong>Deadline for Advertisements:</strong> May 5, 2022
              </Typography>
              <Typography variant="body1" align={"left"}>
                <strong>Date of Printing:</strong> May 16, 2022
              </Typography>
              <br />
              <Button
                color={"primary"}
                href={
                  "https://checkout.square.site/merchant/KRF232MEQVYWF/checkout/MOYQM23KLZ6BIAFOBLNLXAZP"
                }
                target={"_blank"}
                size={"large"}
                variant={"contained"}
              >
                Buy Ad
              </Button>
              <br />
            </GridItem>
            <Hidden smDown>
              <GridItem className={classes.gridItem}>
                <Image
                  src={ega}
                  width={450}
                  height={337}
                  alt={"Eagle, Globe, and Anchor on an American Flag"}
                  className={classes.ega}
                  placeholder={"blur"}
                />
              </GridItem>
            </Hidden>
            <GridItem md={6} className={classes.gridItem}>
              <Typography variant="h2" align={"left"} component={"h2"}>
                Our Mission
              </Typography>
              <Typography variant="body1" align={"left"}>
                The mission of the Marine Corps League is to promote the
                interest and to preserve traditions of the United States Marine
                Corps; strengthen the fraternity of Marines and their families;
                serve Marines, FMF Corpsmen, and FMF Chaplains who wear or who
                have worn the Eagle, Globe and Anchor; and foster the ideals of
                Americanism and patriotic volunteerism.
              </Typography>
              <br />
              <Button
                color={"primary"}
                href={"/memberships"}
                size={"large"}
                variant={"contained"}
              >
                Join Us
              </Button>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer justifyContent={"center"} spacing={6}>
            <GridItem className={classes.gridItem}>
              <Typography variant={"h3"}>Meeting Info</Typography>
              <br />
              <Typography variant={"body1"}>
                1900 hours on the 3rd Tuesday of Every Month <br /> <br />
                <strong>Location:</strong> <br />
                2nd Floor of the Bozeman American Legion <br />
                225 E. Main St <br />
                Bozeman, Mt 59715
              </Typography>
            </GridItem>
            <GridItem className={classes.gridItem}>
              <iframe
                width="450"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src={gKey}
                allowFullScreen
              />
            </GridItem>
          </GridContainer>
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default Index;
