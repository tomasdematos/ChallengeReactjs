import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        height: "100%",


    },
    content: {
        marginTop: 64,
        marginBottom: 74,
        height: "100%"
    },


    container: {
        paddingLeft: 50,
        width: '100%',
        height: "100%"
    },
    error: {
        backgroundColor: "#ce3333",
        textAlign: "center",
        alignSelf: "center"
    },

    paginator: {
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: "#48a51d"

    },

    loading: {
        backgroundColor: "#b2ce33",
        textAlign: 'center',
        paddingTop: 10
    },

    loadingContainer: {
        width: '100%',


    }


}));

export default useStyles;