
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
            backgroundColor: '#48a51d',
        },

        button: {
            height: 350
        },

        card: {
            minWidth: 220,
            maxWidth: 220,
            height: 350,
            backgroundColor: '#63da7d',
            textAlign: "center",
        },
        container: {
            marginRight: 10,
            marginTop: 20
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        titleContainer: {
            backgroundColor: "#4cac60",
            height: 100
        },


    }),
);

export default useStyles;