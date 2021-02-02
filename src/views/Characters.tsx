import React, { useState } from 'react'

import { useQuery } from '@apollo/client';
import {
    Grid,
    Box,
    CircularProgress
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import useStyles from './styles'

import Header from '../components/Header'
import Cards from '../components/Cards'

import { CHARACTERS } from '../querys'

export interface CharactersProps {

}

const Characters: React.SFC<CharactersProps> = () => {

    const [page, setPage] = useState<number>(1);
    const [filterType, setFilterType] = useState<string>("name");
    const [filter, setFilter] = useState<string>("")

    const { loading, error, data } = useQuery(CHARACTERS(page, filterType, filter));

    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo(0, 0)
    };

    if (loading) {
        return (
            <div  >
                <Box className={classes.content} display="flex"  >

                    <Header
                        setFilter={setFilter}
                        filter={filter}
                        setFilterType={setFilterType}
                        setPage={setPage}
                    />
                    <Box className={classes.root} >


                        <h1 style={{ backgroundColor: "#b2ce33", textAlign: "center", alignSelf: "center", padding: 10 }}>
                            <CircularProgress />
                        </h1>

                    </Box>
                </Box >
            </div >
        );
    }

    if (!error) {
        return (
            <div >
                <Box className={classes.content} display="flex"  >

                    <Header
                        setFilter={setFilter}
                        filter={filter}
                        setFilterType={setFilterType}
                        setPage={setPage}
                    />
                    <Box className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="flex-end"
                        >
                            <Cards
                                data={data}
                            />
                        </Grid>
                        <Box display="flex" justifyContent="center">
                            <Pagination count={data.characters.info.pages}
                                color="primary"
                                className={classes.paginator}
                                page={page}
                                onChange={handleChange}
                                siblingCount={1}
                                boundaryCount={2}
                                showFirstButton
                                showLastButton />
                        </Box>
                    </Box>

                </Box >
            </div >
        );
    } else {
        return (
            <div  >
                <Box className={classes.content} display="flex"  >

                    <Header
                        setFilter={setFilter}
                        filter={filter}
                        setFilterType={setFilterType}
                        setPage={setPage}
                    />
                    <Box className={classes.root} >

                        <h1 style={{ backgroundColor: "#ce3333", textAlign: "center", alignSelf: "center" }}>
                            {error.message}
                        </h1>

                    </Box>
                </Box >
            </div >
        )
    }
}



export default Characters;