import React from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './styles';
export interface Props {
    open: boolean
}

const Footer: React.FC<Props> = ({ open }) => {

    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.footer, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar className={classes.Toolbar} >
                <Box display="flex" flexDirection="row" width="100%" flexWrap="wrap">
                    <Typography variant="h6" className={classes.footerTitle} >
                        Tomás de Matos
                            </Typography>
                    <br />
                    <Typography variant="h6" className={classes.date}>
                        {`03 / 03 / 2021`}
                    </Typography>
                </Box>
            </Toolbar>

        </AppBar>

    );
}

export default Footer;