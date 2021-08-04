import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, IconButton, Menu, MenuItem, MenuList} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    navLink: {
        fontWeight: 700,
        color: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
        }
    },
    menuIcon: {
        position: "absolute",
        right: "2rem"
    }

}));

export default function NavMenuSm(props: any) {
    const classes = useStyles();
    const {} = props
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton edge="start" color="inherit" aria-label="open main menu" onClick={handleClick} className={classes.menuIcon}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
            >
                <MenuList>
                    <MenuItem>
                        <Link href={"/"} passHref>
                            <Button
                                className={classes.navLink}
                            ><Typography variant={"body1"}>Home</Typography>
                            </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={"/memberships"} passHref>
                            <Button
                                className={classes.navLink}
                            ><Typography variant={"body1"}>Membership</Typography>
                            </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={"/minutes"} passHref>
                            <Button
                                className={classes.navLink}
                            ><Typography variant={"body1"}>Minutes</Typography>
                            </Button>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </React.Fragment>
    );
}
