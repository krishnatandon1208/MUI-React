import React from "react";
import { makeStyles , withStyles } from "@material-ui/core";
//withuseStyles & makeuseStyles

const useStyles = makeStyles({
    sideMenu: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "320px",
        height: "100%",
        background: "#253053"
    }
});

export default function SideMenu() {

    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>

        </div>
    )
}
