import {createTheme, responsiveFontSizes} from "@material-ui/core/styles";
import {blueGrey, red} from "@material-ui/core/colors";

// Brand Palette
export const primaryColor = "#B92D00";
export const secondaryColor = "#ffffff"
export const hoverGray = blueGrey.A400;
export const warningColor = "#ff9800";
export const dangerColor = "#f44336";
export const successColor = "#4caf50";
export const infoColor = "#00acc1";
export const roseColor = "#e91e63";
export const grayColor = "#999999";

// Create a theme instance.
const themeBase = createTheme({
    palette: {
        text: {
            primary: "#333"
        },
        primary: {
            main: primaryColor,
            light: "#f36031",
            dark: "#820000",
            contrastText: "#fff"
        },
        secondary: {
            main: secondaryColor,
            light: "#ffffff",
            dark: "#ffffff",
            contrastText: "#333"
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
    typography: {

        fontFamily: ["Lato", "Helvetica", "Arial", "Lucida", "sans-serif"].join(","),
        h1: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: 700,
            color: "#333"
        },
        h2: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: 700,
            color: "#333"
        },
        h3: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: 700,
            color: "#333"
        },
        h4: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: 700,
            color: "#333"
        },
        h5: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: 700,
            color: "#333"
        },
        h6: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: 700,
            color: "#333"
        },
    }
});

const theme = responsiveFontSizes(themeBase);
export default theme;
