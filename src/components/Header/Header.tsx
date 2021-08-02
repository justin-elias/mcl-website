import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, Hidden, Toolbar} from "@material-ui/core";
import {container} from "../../assets/globalStyle";
import Image from "next/image";
import WhiteLogo from "../../../public/images/mclLogoWt.png";
import BlkLogo from "../../../public/images/mclLogoBlK.png";
import NavMenuLg from "../NavMenu/NavMenuLg";
import NavMenuSm from "../NavMenu/NavMenuSm";

const useStyles = makeStyles((theme) => ({
    container,
    logoButton: {
        marginTop: "-6.85rem",
        zIndex: 10,
        [theme.breakpoints.down("sm")]: {
            position: "relative",
            marginRight: "0",
        }
    },
    appBar: {
        display: "block",
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
    grid: {
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
    logo: {
        [theme.breakpoints.down("sm")]: {
            width: "4.5rem",
        }
    },
}));

export default function Header(props: any) {
    const classes = useStyles();
    const {whiteLogo} = props
    const showLogo = whiteLogo ?
        <Image src={WhiteLogo} alt={"Robert A. Ellerd Detachment"} className={classes.logo} width={150} height={175}/> :
        <Image src={BlkLogo} alt={"Robert A. Ellerd Detachment"} className={classes.logo} width={150} height={175}/>

    return (
        <React.Fragment>
            <header>
                <nav role="navigation">
                    <AppBar className={classes.appBar}>
                        <Toolbar id="back-to-top-anchor" className={classes.grid}>
                            <Hidden xsDown>
                                <NavMenuLg/>
                            </Hidden>
                            <Hidden smUp>
                                <NavMenuSm/>
                            </Hidden>
                        </Toolbar>
                    </AppBar>
                </nav>
                <Button href={"/"} className={classes.logoButton}>
                    {showLogo}
                </Button>
            </header>
        </React.Fragment>
    );
}
