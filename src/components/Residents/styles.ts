import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            height: 255,
        },
        card: {
            minWidth: 170,
            maxWidth: 170,
            height: 255,
            backgroundColor: '#63da7d',
            textAlign: "center",
        },
        image: {
            margin: 10
        },
        container: {
            marginRight: 10,
            marginTop: 20
        },

    }),
);