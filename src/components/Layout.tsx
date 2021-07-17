import React from 'react'
import Head from 'next/head'
import {AppBar, Button, Container, Fab, Hidden, Theme, Toolbar, useScrollTrigger, Zoom} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// @ts-ignore
import FacebookIcon from "public/images/FindUs-FB-RGB-BRC-Site-500.svg"
import {container} from "../assets/globalStyle";
import WhiteLogo from "../../public/images/mclLogoWt.png";
import BlkLogo from "../../public/images/mclLogoBlK.png"
import Hero from "../../public/images/heroImg.jpg"
import {LayoutProps, MclAppProps} from "../@types";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import GridContainer from "./GridComponents/GridContainer";
import GridItem from "./GridComponents/GridItem";
import Link from "next/link";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Typography from "@material-ui/core/Typography";
import Image from 'next/image'

const useStyle = makeStyles((theme: Theme) => ({
    main: {
        ...container,
        position: "absolute"
    },
    rootContainer: {
        maxWidth: "1400px",
        margin: "auto"
    },
    appBar: {
        display: "flex",
        border: "0",
        borderRadius: "0px",
        padding: "0 0",
        marginBottom: "20px",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: "unset",
        height: "5.625rem"
    },
    fbIcon: {
        width: "10rem",
        margin: "auto"
    },
    footer: {
        ...container,
        width: "100%",
        margin: "auto",
        position:"absolute",
        bottom:"0",
        left:"0",
    },
    logoButton: {
        marginTop: "-6.85rem",
        zIndex: 10,
        [theme.breakpoints.down("sm")]: {
            marginTop: "-7rem",
        }
    },
    logo: {
        [theme.breakpoints.down("sm")]: {
            width: "4.5rem",
        }
    },

    hero: {
        ...container,
        marginTop: "-6.1rem",
        zIndex: -10
    },
    scrollToTop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    grid: {
        ...container,
        width: "100%"
    },
    navLink: {
        fontWeight: 700,
        color: "#fff",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        }
    },
    container,
}))


const ScrollTop = (props: MclAppProps) =>{
    const { children } = props;
    const classes = useStyle();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const anchor = (event.currentTarget.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.scrollToTop}>
                {children}
            </div>
        </Zoom>
    );
}

const Layout = (props : LayoutProps) => {
    const { children, title, metaDescription, hero, whiteLogo } = props
    const classes = useStyle();

    // @ts-ignore
    const showHero = hero ? <Image src={Hero} alt={"Close up of Iwo Jima sculpture"} className={''} placeholder={"blur"} width={1400} height={417}/> : null;
    const showLogo = whiteLogo ?
        <Image src={WhiteLogo} alt={"Robert A. Ellerd Detachment"} className={classes.logo} width={150} height={175}/> :
        <Image src={BlkLogo} alt={"Robert A. Ellerd Detachment"} className={classes.logo} width={150} height={175}/>

    return (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta name="description" content={metaDescription}/>
        </Head>
        <div className={classes.rootContainer}>
            <header>
                <nav role="navigation">
                <AppBar className={classes.appBar}>
                    <Toolbar id="back-to-top-anchor" className={classes.grid}>
                            <GridContainer className={classes.container} justifyContent={"flex-end"}>
                                <GridItem >
                                    <Link href={"/"} passHref>
                                        <Button
                                            className={classes.navLink}
                                        >
                                            <HomeOutlinedIcon />
                                            <Hidden xsDown>
                                                <Typography variant={"body1"} >Home</Typography>
                                            </Hidden>
                                        </Button>
                                    </Link>
                                </GridItem>
                                <GridItem>
                                    <Link href={"/memberships"} passHref>
                                        <Button
                                            className={classes.navLink}
                                        ><Typography variant={"body1"}>Membership</Typography>
                                        </Button>
                                    </Link>
                                </GridItem>
                            </GridContainer>

                    </Toolbar>
                </AppBar>
                </nav>
                <Button href={"/"} className={classes.logoButton}>
                    {showLogo}
                </Button>
            </header>
            <div className={classes.hero}>
            {showHero}
            </div>
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>
                <hr/>
                <Container>
                    <Button href={"https://www.facebook.com/RobertAEllerdDetachment"} className={classes.fbIcon}>
                        <Image src={FacebookIcon} alt={"Facebook Button"} aria-label={"Facebook Button"} className={classes.fbIcon} width={160} height={30}/>
                    </Button>
                </Container>
            </footer>
        </div>
        <ScrollTop {...props}>
            <Fab color="primary" size="large" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    </React.Fragment>
    );
}

export default Layout
