import {AppProps} from "next/app";
import * as Sentry from "@sentry/node";
import {ReactNode} from "react";

export interface MclAppProps extends AppProps {
    AppProps: AppProps;
    err: Sentry.Event;
    title: string;
    children?: ReactNode;
}

export interface HandleClickParams{
    event: MouseEvent<HTMLDivElement, MouseEvent>;
}
