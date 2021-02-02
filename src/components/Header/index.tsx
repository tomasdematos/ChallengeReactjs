import React from 'react';
import clsx from 'clsx';
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
import Menu from '../Menu'


export interface HeaederProps {
    setPage: Function;
    setFilterType: Function;
    setFilter: Function;
    filter: string
}

const Heaeder: React.SFC<HeaederProps> = ({ setFilterType, setFilter, filter, setPage }) => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };


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
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Rick & Morty - The Poor Wiki
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
                            style={{ minWidth: 70 }}
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

                </Toolbar>

            </AppBar>

            {/*Footer */}
            <AppBar

                position="fixed"
                className={clsx(classes.footer, {
                    [classes.appBarShift]: open,
                })}
                style={{ marginTop: 10 }}
            >
                <Toolbar className={classes.Toolbar} >
                    <Box display="flex" flexDirection="row" width="100%" flexWrap="wrap">



                        <Typography variant="h6" className={classes.footerTitle} >
                            Tomás de Matos
                            </Typography>

                        <br />




                        <Typography variant="h6" style={{ alignSelf: "flex-end" }}>
                            {`${date} / ${month} / ${year}`}
                        </Typography>
                    </Box>
                </Toolbar>

            </AppBar>
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

export default Heaeder; 