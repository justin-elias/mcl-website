import {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../components/Layout";
import {MclAppProps} from "../@types";
import {Typography} from "@material-ui/core";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */

}));

const metaDescription = "A collection of minutes for previous meetings of the Robert A. Ellerd Detachment 1050 of the Marine Corps League"
export default function MinutesPage(props: MclAppProps) {
    const classes = useStyles();
    const {...rest} = props
    return (
        <Fragment>
            <Layout title={"Minutes | Gallatin Valley MCL"} {...rest} metaDescription={metaDescription}>
                <Typography component={"h1"} variant={"h1"} align={"center"}>
                    Minutes of Meetings
                </Typography>
            </Layout>
        </Fragment>
    );
}
