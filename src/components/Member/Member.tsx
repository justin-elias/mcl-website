import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Container, Typography, Link} from "@material-ui/core";
import {MclAppProps} from "../../index";
import {mainElement} from "../../assets/globalStyle";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    mainElement: {
        ...mainElement,
        width: "33%",
        margin: "auto",
        marginTop: "3%"
    }
}));

export default function Member(props: MclAppProps) {
    const classes = useStyles();
    const {user, logout} = props;

    const userInfo = () => {
        return (
            <React.Fragment>
                <Typography variant={"body1"}>
                    Username: {user?.email}
                </Typography>
                <Button variant={"contained"} onClick={() => logout}>
                    Logout
                </Button>
            </React.Fragment>
        )}

    const isUser = user ? userInfo() : <Button variant={"contained"} ><Link href={"/login"}>Login</Link></Button>
    return (
        <React.Fragment>
            <Container className={classes.mainElement}>
                <Typography variant={"body1"}>
                    Username: {user?.email}
                </Typography>
            </Container>
        </React.Fragment>
    );
}
