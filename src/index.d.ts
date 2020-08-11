import {AppProps} from "next/app";
import * as Sentry from "@sentry/node";

export interface MclAppProps extends AppProps {
    AppProps: AppProps;
    err: Sentry.Event;
    title: string;
}
