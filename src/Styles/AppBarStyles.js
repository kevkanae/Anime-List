import {makeStyles} from "@material-ui/core/styles";

export const useAppBarStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "'Kosugi', sans-serif",
        textDecoration: "none",
        fontSize: '30px',
        '&:hover': {
            color: 'lavender'
        }
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    grow: {
        flexGrow: 1,
    },
    div: {
        flexGrow: 0.05,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    link: {
        textDecoration: "none",
    },
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: "#f7d9d9"
        }
    },
    switchBase: {
        color: '#f25287',
        '&$checked': {
            color: '#f25287',
        },
        '&$checked + $track': {
            backgroundColor: '#f25287',
        },
    },
}));