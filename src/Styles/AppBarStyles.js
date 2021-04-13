import {fade, makeStyles} from "@material-ui/core/styles";
import {red} from '@material-ui/core/colors';

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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '60%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
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
            backgroundColor: "black"
        }
    },
    switchBase: {
        color: red,
        '&$checked': {
            color: red,
        },
        '&$checked + $track': {
            backgroundColor: red,
        },
    },
}));