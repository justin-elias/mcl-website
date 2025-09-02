import React from "react";
import Head from "next/head";
import { Button, Fab, Theme, useScrollTrigger, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// @ts-ignore
import FacebookIcon from "public/images/FindUs-FB-RGB-BRC-Site-500.svg";
import { container } from "../assets/globalStyle";
import Hero from "../../public/images/heroImg.jpg";
import { LayoutProps, MclAppProps } from "../@types";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Image from "next/image";
import Header from "./Header/Header";

const useStyle = makeStyles((theme: Theme) => ({
  main: {
    minHeight: "100vh",
  },
  rootContainer: {
    maxWidth: "1400px",
    margin: "auto",
    position: "relative",
  },
  fbIcon: {
    width: "10rem",
    margin: "auto",
  },
  footer: {
    width: "100%",
    margin: "auto",
    position: "absolute",
    bottom: "0",
  },
  hero: {
    marginTop: "-6.1rem",
    zIndex: -10,
  },
  scrollToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  container,
}));

const ScrollTop = (props: MclAppProps) => {
  const { children } = props;
  const classes = useStyle();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const anchor = (
      event.currentTarget.ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollToTop}
      >
        {children}
      </div>
    </Zoom>
  );
};

const Layout = (props: LayoutProps) => {
  const { children, title, metaDescription, hero, whiteLogo } = props;
  const classes = useStyle();

  // @ts-ignore
  const showHero = hero ? (
    <div className={classes.hero}>
      <Image
        src={Hero}
        alt={"Close up of Iwo Jima sculpture"}
        className={""}
        width={1400}
        height={417}
      />
    </div>
  ) : null;

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className={classes.rootContainer}>
        <Header whiteLogo={whiteLogo} />
        {showHero}
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}>
          <hr />
          <Button
            href={"https://www.facebook.com/RobertAEllerdDetachment"}
            className={classes.fbIcon}
          >
            <Image
              src={FacebookIcon}
              alt={"Facebook Button"}
              aria-label={"Facebook Button"}
              className={classes.fbIcon}
              width={160}
              height={30}
            />
          </Button>
        </footer>
      </div>
      <ScrollTop {...props}>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Layout;
