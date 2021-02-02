import React, { useState } from 'react'
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

import Residents from './Residents'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface DetailsInterface {
    id: string;
    name: string;
    episode: string;
    air_date: string;
    characters: [
        {
            id: string,
            name: string,
            image: string,
            species: string,
            gender: string
        }
    ]
}

export interface EpisodesDetailsProps {
    details: DetailsInterface
}

const EpisodesDetails: React.SFC<EpisodesDetailsProps> = ({ details }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);


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

                <Box display="flex" flexWrap="wrap" flexDirection="column" style={{ margin: 10 }}>
                    <List>
                        {details.episode ?
                            <>
                                <ListItem>
                                    <ListItemText primary="Episode:" secondary={details.episode} />
                                </ListItem>
                                <Divider />
                            </>
                            :
                            <>
                                <ListItem>
                                    <ListItemText primary="Episode:" secondary="Unknown" />
                                </ListItem>
                                <Divider />
                            </>
                        }

                        {details.air_date ?
                            <>
                                <ListItem>
                                    <ListItemText primary="Release Date:" secondary={details.air_date} />
                                </ListItem>
                                <Divider />
                            </>
                            :
                            <>
                                <ListItem>
                                    <ListItemText primary="Release Date:" secondary="Unknown" />
                                </ListItem>
                                <Divider />
                            </>
                        }
                    </List>
                    <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center"  >
                        <Residents
                            residents={details.characters}
                        />
                    </Box>
                </Box>
            </Dialog>

        </div >
    );
}

export default EpisodesDetails;