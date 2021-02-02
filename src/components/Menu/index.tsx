import React from 'react'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    Divider,
    Drawer
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';

import { Link } from 'react-router-dom'

export interface MenuProps {
    open: boolean,


    setOpen: Function,

}



const Menu: React.SFC<MenuProps> = ({ open, setOpen }) => {

    const classes = useStyles();
    const theme = useTheme();





    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <div className={classes.form}>
                <h1>Filters</h1>

                <Link style={{ fontSize: 20, color: "#2b2b2bc", textDecoration: 'none' }} to="/">Characters</Link>
                <br />
                <Link style={{ fontSize: 20, color: "#2b2b2bc", textDecoration: 'none', marginLeft: 10 }} to="/Locations">Locations</Link>
                <br />
                <Link style={{ fontSize: 20, color: "#2b2b2bc", textDecoration: 'none', marginLeft: 20 }} to="/Episodes">Episodes</Link>
                <br />

            </div>

        </Drawer>


    );
}
export default Menu;