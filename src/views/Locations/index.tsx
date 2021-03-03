import React, { useState } from 'react'

import { useQuery } from '@apollo/client';
import {
    Grid,
    Box,
    CircularProgress
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'

import useStyles from '../styles'

import UiContainer from '../../components/UiContainer'
import Cards from '../../components/Cards'

import { LOCATIONS } from '../../querys'


export interface Props {

}

const Locations: React.SFC<Props> = () => {

    const [page, setPage] = useState<number>(1);
    const [filterType, setFilterType] = useState<string>("name")
    const [filter, setFilter] = useState<string>("")


    const { loading, error, data } = useQuery(LOCATIONS(page, filterType, filter));

    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo(0, 0)
    };

    if (loading) {
        return (
            <div  >
                <Box className={classes.content} display="flex"  >

                    <UiContainer
                        setFilter={setFilter}
                        filter={filter}
                        setFilterType={setFilterType}
                        setPage={setPage}
                    />
                    <Box className={classes.loadingContainer} >
                        <h1 className={classes.loading}>
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
                    <UiContainer
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
                            <Pagination count={data.locations.info.pages}
                                size="large"
                                color="primary"
                                className={classes.paginator}
                                page={page}
                                onChange={handleChange}
                                siblingCount={5}
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

                    <UiContainer
                        setFilter={setFilter}
                        filter={filter}
                        setFilterType={setFilterType}
                        setPage={setPage}
                    />
                    <Box className={classes.root} >


                        <h1 className={classes.error}>
                            {error.message}
                        </h1>

                    </Box>
                </Box >
            </div >
        )
    }
}



export default Locations;