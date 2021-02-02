import React from 'react'
import {
    Card,
    Divider,
    CardContent,
    Typography,
    Grid,
    Box,

} from '@material-ui/core';
import useStyles from './styles';

import EpisodesDetails from '../Details/EpisodesDetails';

export interface EpisodesCardProps {
    results: any;

}

const EpisodesCard: React.SFC<EpisodesCardProps> = ({ results }) => {

    const classes = useStyles();

    return results.map(({ id, name, episode, air_date, characters }: {
        id: string,
        name: string,
        episode: string,
        air_date: string,
        characters: [
            {
                id: string,
                name: string,
                image: string,
                type: string,
                species: string,
                gender: string
            }
        ]
    }) => (
        <div >
            <Grid item>
                <div key={id} >
                    <Box display="flex" flexDirection="column" justifyContent="center" style={{ marginRight: 10 }}>
                        <Card className={classes.card}>
                            <Box display="flex" flexDirection="column" justifyContent="flex-start" >
                                <CardContent >
                                    <div style={{ backgroundColor: "#4cac60", maxWidth: 250 }}>
                                        <Typography gutterBottom variant="h4" component="h2">
                                            Title:
                                </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {name}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Episode
                                </Typography>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        {episode}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                        <EpisodesDetails
                            details={{ id, name, episode, air_date, characters }}
                        />
                    </Box>
                </div >
            </Grid >
        </div >
    ));
}

export default EpisodesCard;