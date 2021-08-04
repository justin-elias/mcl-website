import React from "react";
import {ThemeProvider} from "@material-ui/core"
import theme from "../assets/theme";
import Head from "next/head";
import * as Sentry from "@sentry/node";
import {MclAppProps} from "../@types";

// if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
//     const config = getConfig()
//     const distDir = `${config.serverRuntimeConfig.rootDir}/.next`
//     Sentry.init({
//         enabled: process.env.NODE_ENV === 'production',
//         integrations: [
//             new RewriteFrames({
//                 iteratee: (frame) => {
//                     frame.filename = frame.filename!.replace(distDir, 'app:///_next')
//                     return frame
//                 },
//             }),
//         ],
//         dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
//     })
// }

if (process.env.NODE_ENV === "production") {
    Sentry.init({dsn: process.env.NEXT_PUBLIC_SENTRY_DSN});
}

export default function App(props: MclAppProps){
    const { Component, pageProps, err } = props;

    return(
        <React.Fragment>
            <Head>
                <title>"Home | Gallatin Valley MCL"</title>
                <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} err={err} />
            </ThemeProvider>
        </React.Fragment>
    );
}

