import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Box,

} from '@material-ui/core';
import useStyles from './styles';

import CharactersDetails from '../Details/CharactersDetails';

export interface CharactersCardProps {
    results: any;

}




const CharactersCard: React.SFC<CharactersCardProps> = ({ results }) => {

    const classes = useStyles();

    return results.map(({ id, name, image, gender, type, species }: {
        id: string,
        name: string,
        image: string,
        gender: string,
        type: string,
        species: string
    }) => (
        <div >
            <Grid item>
                <div key={id} >
                    <Box display="flex" flexDirection="column" justifyContent="center" style={{ marginRight: 10 }}>
                        <Card className={classes.characterCard}>
                            <Box display="flex" flexDirection="column" justifyContent="flex-start" >
                                <CardMedia
                                    component="img"
                                    alt={`Character Image: ${name}`}
                                    image={image}
                                    title={name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" >
                                        {name}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                        <CharactersDetails
                            details={{ name, image, gender, type, species }}
                        />
                    </Box>

                </div >
            </Grid >

        </div >
    ));
}

export default CharactersCard;