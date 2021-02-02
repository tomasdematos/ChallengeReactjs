import styled from 'styled-components'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,

        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#4fb320',

        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        flabel: {
            fontSize: 30,
            fontWeight: 'bold'
        },
        form: {
            paddingTop: 10,
            paddingLeft: 10,
        },
    })
);

export default useStyles;