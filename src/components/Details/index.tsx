import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import {
    Box,
    Dialog,
    ListItemText,
    ListItem,
    List,
    Divider,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide
} from '@material-ui/core'
import { useStyles } from './styles'
import Residents from '../Residents'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface Props {
    open: boolean;
    setOpen: Function;
    data: {
        name: string;
        image?: string;
        type?: string;
        gender?: string;
        species?: string;
        dimension?: string;
        residents?: [
            {
                id: string;
                name: string;
                image: string;
                species: string;
                type: string;
                gender: string;
            }
        ];
        episode?: string;
        air_date?: string;
        characters?: [
            {
                id: string,
                name: string,
                image: string,
                type: string,
                species: string,
                gender: string
            }
        ]
    };


}


const Details: React.FC<Props> = ({ open, setOpen, data }) => {
    const classes = useStyles();

    const { name, image, type, gender, species, residents, dimension, episode, air_date, characters } = data;

    return (
        <div>
            <Dialog fullWidth={true} open={open} onClose={() => { setOpen(false) }} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            {name}
                        </Typography>
                        <IconButton edge="start" color="inherit" onClick={() => { setOpen(false) }} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>


                <Box display="flex" flexWrap="wrap" flexDirection="column" >
                    {image ?
                        <Box display="flex" flexWrap="wrap" alignItems="center" flexDirection="row" >
                            {
                                image ?
                                    <img src={image} alt={`Character ${name}`} className={classes.image} />
                                    :
                                    <img src={"https://rickandmortyapi.com/api/character/avatar/19.jpeg"} alt="Dont Found" className={classes.image} />
                            }
                            <List>
                                {type ?
                                    <>
                                        <ListItem>
                                            <ListItemText primary="Type:" secondary={type} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                    :
                                    null
                                }

                                {gender ?
                                    <>
                                        <ListItem>
                                            <ListItemText primary="Gender:" secondary={gender} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                    :
                                    <>
                                        <ListItem>
                                            <ListItemText primary="Gender:" secondary="Unknown" />
                                        </ListItem>
                                        <Divider />
                                    </>
                                }
                                {species ?
                                    <ListItem>
                                        <ListItemText primary="Specie:" secondary={species} />
                                    </ListItem>
                                    :
                                    <ListItem>
                                        <ListItemText primary="Specie:" secondary="Unknown" />
                                    </ListItem>
                                }
                            </List>

                        </Box>

                        :
                        <>
                            <List>
                                {type ?
                                    <>
                                        <ListItem>
                                            <ListItemText primary="Type:" secondary={type} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                    :
                                    <>
                                        <ListItem>
                                            <ListItemText primary="Episode:" secondary={episode} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                }

                                {dimension ?
                                    <>
                                        <ListItem>
                                            <ListItemText primary="Dimension:" secondary={dimension} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                    :
                                    <>
                                        <ListItem>
                                            <ListItemText primary="Release Date::" secondary={air_date} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                }
                            </List>
                            <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center"  >
                                {residents ?
                                    <>
                                        {residents !== undefined &&
                                            <Residents
                                                residents={residents}
                                            />
                                        }
                                    </>
                                    :
                                    <>
                                        {characters !== undefined &&
                                            <Residents
                                                residents={characters}
                                            />
                                        }

                                    </>
                                }
                            </Box>
                        </>
                    }
                </Box>
            </Dialog>

        </div >
    );
}

export default Details;