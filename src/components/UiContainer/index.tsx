import React from 'react';
import clsx from 'clsx';
import {
    CssBaseline,
} from '@material-ui/core';

import useStyles from './styles';
import Menu from '../Menu'
import Header from '../Header';
import Footer from '../Footer'

export interface Props {
    setPage: Function;
    setFilterType: Function;
    setFilter: Function;
    filter: string
}



const UiContainer: React.FC<Props> = ({ setFilterType, setFilter, filter, setPage }) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);


    return (
        <div className={classes.root}>
            <CssBaseline />
            { /* Header */}
            <Header
                setPage={setPage}
                setFilter={setFilter}
                setFilterType={setFilterType}
                filter={filter}
                open={open}
                setOpen={setOpen}
            />
            {/*Footer */}
            <Footer
                open={open}
            />
            {/*Menu */}
            <Menu
                open={open}
                setOpen={setOpen}
            />

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>


        </div >
    );
}

export default UiContainer;