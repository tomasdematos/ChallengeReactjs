import { Box, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import React from 'react'

import { useStyles } from './styles'

import CharactersDetails from './CharactersDetails'
export interface ResidentsProps {
    residents: any;

}

const Residents: React.SFC<ResidentsProps> = ({ residents }) => {
    const classes = useStyles();

    return residents.slice(0, 5).map(({ id, name, image, type, gender, species }: {
        id: string,
        name: string,
        image: string,
        type: string,
        gender: string,
        species: string
    }) => (
        id ?
            <div>
                <div key={id} >
                    <Box display="flex" flexDirection="column" justifyContent="center" style={{ marginRight: 10 }}>
                        <Card className={classes.card}>
                            <Box display="flex" flexDirection="column" justifyContent="flex-start" >
                                <CardMedia
                                    component="img"
                                    alt={`Character Image: ${name}`}
                                    image={image}
                                    title={name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" >
                                        {name}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                        <CharactersDetails
                            details={{ name, image, type, gender, species }}
                        />

                    </Box>

                </div>

            </div >
            : <h1>Ro Residents</h1>

    ))


}

export default Residents;