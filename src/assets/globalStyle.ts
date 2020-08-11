import theme from "./theme";

export const containerFluid = {
    paddingRight: "0.938em",
    paddingLeft: "0.938em",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
export const container = {
    ...containerFluid,
    [theme.breakpoints.down("sm")]: {
        maxWidth: "100vw"
    },
    [theme.breakpoints.only("md")]: {
        maxWidth: "100vw"
    },
    [theme.breakpoints.only("lg")]: {
        maxWidth: "100vw"
    },
    [theme.breakpoints.only("xl")]: {
        maxWidth: "87.5em"
    }
};

export const boxShadow = {
    boxShadow:
        "0 0.625em 1.875em -0.75em rgba(0, 0, 0, 0.42), 0 0.25em 1.563em 0em rgba(0, 0, 0, 0.12), 0 0.5em 0.625em -0.313em rgba(0, 0, 0, 0.2)"
};

export const card = {
    ...boxShadow,
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "1.563em 0",
    borderRadius: "0.188em",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
};
