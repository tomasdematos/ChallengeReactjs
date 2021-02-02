import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Box } from '@material-ui/core'
import { useStyles } from './styles'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface CharactersDetailsProps {
    details: DetailsInterface
}

interface DetailsInterface {
    name: string;
    image: string;
    gender: string;
    type: string;
    species: string
}

const CharactersDetails: React.SFC<CharactersDetailsProps> = ({ details }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen} className={classes.button}>
                Open
            </Button>
            <Dialog fullWidth={true} open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} >
                    <Toolbar>

                        <Typography variant="h6" className={classes.title}>
                            {details.name}
                        </Typography>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Box display="flex" flexWrap="wrap" alignItems="center" flexDirection="row" >
                    {details.image ?
                        <img src={details.image} alt={`Character ${details.name}`} style={{ margin: 10 }} />
                        :
                        <img src={"https://rickandmortyapi.com/api/character/avatar/19.jpeg"} alt="Dont Found" style={{ margin: 10, width: "50%" }} />
                    }


                    <List>
                        {details.type ?
                            <>
                                <ListItem>
                                    <ListItemText primary="Type:" secondary={details.type} />
                                </ListItem>
                                <Divider />
                            </>
                            : null}

                        {details.gender ?
                            <>
                                <ListItem>
                                    <ListItemText primary="Gender:" secondary={details.gender} />
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
                        {details.species ?
                            <ListItem>
                                <ListItemText primary="Specie:" secondary={details.species} />
                            </ListItem>
                            :
                            <ListItem>
                                <ListItemText primary="Specie:" secondary="Unknown" />
                            </ListItem>
                        }


                    </List>
                </Box>
            </Dialog>

        </div >
    );
}

export default CharactersDetails;