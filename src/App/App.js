import React from "react";
import { makeStyles, CssBaseline } from "@material-ui/core";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

const useStyles = makeStyles({
        appMain: {
                paddingLeft: "320px",
                width: "100%"
        }
});

function App() {
        const classes = useStyles();
        return (
                <React.Fragment>
                        <SideMenu />
                        <Header />
                        <CssBaseline />
                </React.Fragment>
        );
}

export default App;
