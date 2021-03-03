import React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom'
import {
    Button,
    Select,
    InputBase,
    Box,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ReplayIcon from '@material-ui/icons/Replay';

import useStyles from './styles';




export interface Props {
    setPage: Function;
    setFilterType: Function;
    setFilter: Function;
    filter: string;
    open: boolean;
    setOpen: Function
}

const Heaeder: React.FC<Props> = ({ setFilterType, setFilter, filter, setPage, open, setOpen }) => {
    const location = useLocation();

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.Toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box display="flex" flexGrow={1} justifyContent="flex-start">
                        <Box display="flex" flexGrow={1} justifyContent="center">
                            <Typography variant="h6" className={classes.title}>
                                Rick & Morty - The Poor Wiki
                        </Typography>

                        </Box>

                        <Typography variant="h6" className={classes.actual}>
                            {location.pathname === "/" && "Characters"}
                            {location.pathname === "/Locations" && "Locations"}
                            {location.pathname === "/Episodes" && "Episodes"}
                        </Typography>

                        <Box display="flex" flexGrow={1} justifyContent="flex-end">

                            <div className={classes.search}>

                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>

                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={filter}
                                    onChange={(e) => {
                                        setFilter(e.target.value);
                                        setPage(1)
                                    }}
                                />
                            </div>
                            <Select
                                className={classes.select}
                                native
                                id="filter"
                                onChange={(e) => {
                                    setFilterType(e.target.value);
                                }}
                            >
                                <option value={"name"}>Name</option>
                                <option value={"type"}>Type</option>
                            </Select>
                            {filter.length > 0 ?
                                <Button
                                    className={classes.delete}
                                    onClick={() => setFilter("")}
                                ><ReplayIcon /></Button>
                                : null}
                        </Box>
                    </Box>
                </Toolbar>

            </AppBar>

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

export default Heaeder;