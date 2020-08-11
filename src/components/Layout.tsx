import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {AppBar, Button, Container, Hidden, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// @ts-ignore
import FacebookIcon from "src/assets/images/FindUs-FB-RGB-BRC-Site-500.svg"
import {container} from "../assets/globalStyle";
// @ts-ignore
import Logo from "../assets/images/mclLogo.svg";

type Props = {
    children?: ReactNode
    title?: string
}

const useStyle = makeStyles(() => ({
    appBar: {
        display: "flex",
        border: "0",
        borderRadius: "3px",
        padding: "0 0",
        marginBottom: "20px",
        color: "#555",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: "unset",
        height: "4rem"
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
    logo: {
        width: "10rem",
        margin: "auto"
    },
    smallLogo: {
        width: "5rem",
        margin: "auto"
    },
    container
}))

const Layout = ({ children, title }: Props) => {
    const classes = useStyle();

    return (
    <React.Fragment>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Toolbar>
            </AppBar>
        </header>
        <Container className={classes.container}>
            <Hidden smDown>
                <img src={Logo} alt={"Robert A. Ellerd Detachment"} className={classes.logo}/>
            </Hidden>
            <Hidden mdUp>
                <img src={Logo} alt={"Robert A. Ellerd Detachment"} className={classes.smallLogo}/>
            </Hidden>
        </Container>
            {children}
        <footer>
            <hr/>
            <Container className={classes.footer}>
                <Button href={"https://www.facebook.com/RobertAEllerdDetachment"} className={classes.fbIcon}>
                    <img src={FacebookIcon} alt={"Facebook Button"} aria-label={"Facebook Button"} className={classes.fbIcon}/>
                </Button>
            </Container>
        </footer>
    </React.Fragment>
    );
}

export default Layout
