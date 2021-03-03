
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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
            justifyContent: 'flex-start',
        },
        flabel: {
            fontSize: 30,
            fontWeight: 'bold'
        },
        form: {
            paddingTop: 10,
            paddingLeft: 10,
        },
        link1: {
            fontSize: 20,
            color: "#2b2b2bc",
            textDecoration: 'none'
        },
        link2: {
            fontSize: 20,
            color: "#2b2b2bc",
            textDecoration: 'none',
            marginLeft: 10
        },
        link3: {
            fontSize: 20,
            color: "#2b2b2bc",
            textDecoration: 'none',
            marginLeft: 20
        }
    })
);

export default useStyles;