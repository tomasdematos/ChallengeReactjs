import React, { ReactElement, useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Box,
    Divider,
    ButtonBase

} from '@material-ui/core';
import { useLocation } from 'react-router-dom'

import useStyles from './styles';

import Details from '../Details';

export interface Props {
    data: data;
}

interface data {
    characters?: {
        results: [{
            id: string;
            name: string;
            image: string;
            type: string;
            gender: string;
            species: string;
        }]
    };
    locations?: {
        results: [{
            id: string;
            name: string;
            dimension: string;
            type: string;
            residents: [
                charactersData
            ];
        }]
    };
    episodes?: {
        results: [{
            id: string;
            name: string;
            air_date: string;
            episode: string;
            characters: [
                charactersData
            ]
        }]
    }
}

interface charactersData {
    id: string;
    name: string;
    image: string;
    type: string;
    gender: string;
    species: string;
}

const Cards: React.FunctionComponent<Props> = ({ data }) => {
    const location = useLocation();
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    const [openId, setOpenId] = useState<string>("");
    let results: [{
        id: string;
        name: string;
        image?: string;
        type?: string;
        gender?: string;
        species?: string;
        air_date?: string;
        episode?: string;
        characters?: [
            charactersData
        ]
        dimension?: string;
        residents?: [
            charactersData
        ];
    }] = [{
        id: "",
        name: ""
    }]


    const handleOpen = () => {
        setOpen(true);
    };


    if (location.pathname === "/") {
        if (data.characters !== undefined) {
            results = data.characters.results
        }
    } else if (location.pathname === "/Locations") {
        if (data.locations !== undefined) {
            results = data.locations.results
        }
    } else {
        if (data.episodes !== undefined) {
            results = data.episodes.results
        }
    }

    if (results !== undefined) {
        const Results = results.map(({ id, name, image, type, dimension, episode, gender, species, residents, air_date, characters }): ReactElement => (
            <>
                <Grid item>
                    <div key={id} >
                        <Box display="flex" flexDirection="column" justifyContent="center" className={classes.container}>
                            <ButtonBase
                                className={classes.button}
                                onClick={() => {
                                    handleOpen()
                                    setOpenId(id)
                                }}
                            >
                                <Card className={classes.card}>
                                    <Box display="flex" flexDirection="column" justifyContent="flex-start" >
                                        {!!image &&
                                            <CardMedia
                                                component="img"
                                                alt={`Character Image: ${name}`}
                                                image={image}
                                                title={name}
                                            />
                                        }
                                        <CardContent >
                                            <div className={classes.titleContainer}>
                                                <Typography gutterBottom variant="h6" component="h2"  >
                                                    {name.substr(0, 30)} {name.length > 30 ? "..." : null}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                        {!image &&
                                            <Divider />
                                        }
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {dimension ?
                                                    "Dimension"
                                                    : "Episode"}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="h2">

                                                {!!dimension &&
                                                    dimension.substr(0, 30)
                                                }
                                                {!!dimension &&
                                                    dimension!.length > 30 && "..."
                                                }

                                                {!!episode &&
                                                    episode
                                                }
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </ButtonBase>

                            {openId === id ?
                                <Details
                                    open={open}
                                    setOpen={setOpen}
                                    data={{ name, image, gender, type, species, dimension, residents, episode, air_date, characters }}
                                />
                                : null}
                        </Box>

                    </div >

                </Grid >

            </>
        ));

        return (
            <>
                {Results}
            </>
        )
    } else return <h1>Data not Found</h1>
}

export default Cards;

