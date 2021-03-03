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

export interface Props {
    open: boolean,


    setOpen: Function,

}



const Menu: React.SFC<Props> = ({ open, setOpen }) => {

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

                <Link className={classes.link1} to="/">Characters</Link>
                <br />
                <Link className={classes.link2} to="/Locations">Locations</Link>
                <br />
                <Link className={classes.link3} to="/Episodes">Episodes</Link>
                <br />

            </div>
        </Drawer>
    );
}
export default Menu;