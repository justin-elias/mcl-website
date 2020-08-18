import React from 'react'
import Head from 'next/head'
import {AppBar, Button, Container, Fab, Theme, Toolbar, useScrollTrigger, Zoom} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// @ts-ignore
import FacebookIcon from "src/assets/images/FindUs-FB-RGB-BRC-Site-500.svg"
import {container} from "../assets/globalStyle";
// @ts-ignore
import Logo from "../assets/images/mclLogo.png";
// @ts-ignore
import Hero from "../assets/images/heroImg.jpg"
import {LayoutProps, MclAppProps} from "../index";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyle = makeStyles((theme: Theme) => ({
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
        margin: "auto"
    },
    logoButton: {
        position: "relative",
        marginTop: "-6.85rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "-7rem",
        }
    },
    logo: {
        width: "9.375rem",
        [theme.breakpoints.down("sm")]: {
            width: "4.5rem",
        }
    },

    hero: {
        width: "100%",
        marginTop: "-6.1rem"

    },
    scrollToTop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    container
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
    const { children, title, metaDescription, hero } = props
    const classes = useStyle();

    const showHero = hero ? <img src={Hero} className={classes.hero} alt={"Close up of Iwo Jima sculpture"}/> : null;
    return (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta name="description" content={metaDescription}/>
        </Head>
        <div className={classes.rootContainer}>
            <header>
                <AppBar className={classes.appBar}>
                    <Toolbar id="back-to-top-anchor">

                    </Toolbar>
                </AppBar>
                <Button href={"/"} className={classes.logoButton}>
                    <img src={Logo} alt={"Robert A. Ellerd Detachment"} className={classes.logo}/>
                </Button>
            </header>
            {showHero}
            {children}
            <footer>
                <hr/>
                <Container className={classes.footer}>
                    <Button href={"https://www.facebook.com/RobertAEllerdDetachment"} className={classes.fbIcon}>
                        <img src={FacebookIcon} alt={"Facebook Button"} aria-label={"Facebook Button"} className={classes.fbIcon}/>
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
