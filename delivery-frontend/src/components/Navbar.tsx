import * as React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import DriverIcon from "@material-ui/icons/DriveEta";

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <DriverIcon/>
                </IconButton>
                <Typography variant="h6">Real Time Delivery App</Typography>
            </Toolbar>
        </AppBar>
    );
};