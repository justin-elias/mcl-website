import {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../components/Layout";
import {MinutesPageProps} from "../@types";
import {Typography} from "@material-ui/core";
import {request, gql} from "graphql-request"
import Link from "next/link"
import GridContainer from "../components/GridComponents/GridContainer";
import GridItem from "../components/GridComponents/GridItem";
import moment from "moment"

const useStyles = makeStyles((theme) => ({
    header1: {
        marginTop: "-5rem",
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(1)
        }
    },
    header2: {
        marginTop: "2rem"
    },
    gridBox: {
        display: "block",
        marginTop: "2rem"
    }
}));

const minutesQuery =   gql`{
    minutesOfMeetings(orderBy:meetingDate_DESC) {
        meetingDate
        pdfFile {
            url
        }
    }
}`

export function getStaticProps() {
    const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;
    return request(endPoint, minutesQuery).then((data) => {
        return {props: {minutesQueryResult: data}}
    }).catch(() => {
            return {props: {}}
        }
    )
}

const metaDescription = "A collection of minutes for previous meetings of the Robert A. Ellerd Detachment 1050 of the Marine Corps League"
export default function MinutesPage(props: MinutesPageProps) {
    const classes = useStyles();
    const {minutesQueryResult, ...rest} = props

    const formatDate = (dateString: string) => {
        return moment(new Date(dateString)).format("LL")

    }
    const showMinutesLinks = () => {
        const list = []
        if(minutesQueryResult){
        minutesQueryResult.minutesOfMeetings.map((pdfFile: any) => {
            list.push(
                <GridItem key={pdfFile.meetingDate}>
                    <Link href={pdfFile.pdfFile.url}>{formatDate(pdfFile.meetingDate)}</Link>
                </GridItem>
            )
        })
        }else {
            list.push(<Typography align="center" variant="body1">Files not Returned</Typography>)
        }
        return list
    }
    return (
        <Fragment>
            <Layout title={"Minutes | Gallatin Valley MCL"} {...rest} metaDescription={metaDescription}>
                <Typography component={"h1"} variant={"h3"} align={"center"} className={classes.header1}>
                    Minutes of Meetings
                </Typography>
                <Typography component={"h2"} variant={"h4"} className={classes.header2}>Link to Minutes PDFs</Typography>
                <GridContainer justifyContent={"flex-start"} alignContent={"center"} spacing={10} direction={"column"} className={classes.gridBox}>
                    {showMinutesLinks()}
                </GridContainer>
            </Layout>
        </Fragment>
    );
}
