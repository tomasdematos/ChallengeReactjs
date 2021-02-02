import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    Divider

} from '@material-ui/core';
import useStyles from './styles';

import LocationsDetails from '../Details/LocationsDetails';

export interface LocationsCardProps {
    results: any;

}

const LocationsCard: React.SFC<LocationsCardProps> = ({ results }) => {

    const classes = useStyles();

    return results.map(({ id, name, dimension, type, residents }: {
        id: string,
        name: string,
        dimension: string,
        type: string,
        residents: [
            {
                id: string;
                name: string;
                image: string;
                type: string;
                gender: string
            }
        ]
    }) => (
        <div >
            <Grid item>
                <div key={id} >
                    <Box display="flex" flexDirection="column" justifyContent="center" style={{ marginRight: 10 }} >
                        <Card className={classes.card}>
                            <Box display="flex" flexDirection="column" justifyContent="flex-start" >
                                <CardContent >
                                    <div style={{ backgroundColor: "#4cac60" }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Name
                                    </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            {name}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Dimension:
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        {dimension}
                                    </Typography>
                                </CardContent>

                            </Box>
                        </Card>
                        <LocationsDetails
                            details={{ name, type, dimension, residents }}
                        />
                    </Box>
                </div >

            </Grid >

        </div >
    ));
}

export default LocationsCard;