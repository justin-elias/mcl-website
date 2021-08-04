import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridItem from "../GridComponents/GridItem";
import Link from "next/link";
import {Button, Hidden} from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Typography from "@material-ui/core/Typography";
import GridContainer from "../GridComponents/GridContainer";
import {container} from "../../assets/globalStyle";

const useStyles = makeStyles((theme) => ({
    navLink: {
        fontWeight: 700,
        color: "#fff",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        }
    },
    container,

}));

export default function NavMenuLg(props: any) {
    const classes = useStyles();
    const {} = props
    return (
        <React.Fragment>
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
                <GridItem>
                    <Link href={"/minutes"} passHref>
                        <Button
                            className={classes.navLink}
                        ><Typography variant={"body1"}>Minutes</Typography>
                        </Button>
                    </Link>
                </GridItem>
            </GridContainer>
        </React.Fragment>
    );
}
