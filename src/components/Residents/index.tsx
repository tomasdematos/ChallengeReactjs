import React, { useState, ReactElement } from 'react'
import { Box, Card, CardMedia, CardContent, Typography, ButtonBase } from '@material-ui/core';
import Details from '../Details'

import { useStyles } from './styles'

export interface Props {
    residents: [
        {
            id: string,
            name: string,
            image: string,
            type: string,
            species: string,
            gender: string
        }
    ]

}

const Residents: React.FC<Props> = ({ residents }) => {
    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);
    const [openId, setOpenId] = useState<string>("");
    const handleOpen = () => {
        setOpen(true);

    };

    const characters = residents.slice(0, 5).map(({ id, name, image, type, gender, species }): ReactElement => (
        id ?
            <div>
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
                        </ButtonBase>
                        {openId === id ?
                            <Details
                                open={open}
                                setOpen={setOpen}
                                data={{ name, image, gender, type, species }}
                            />
                            : null}
                    </Box>

                </div>

            </div >
            : <h1>No Residents</h1>

    ))

    return (
        <>
            {characters}
        </>
    )


}

export default Residents;