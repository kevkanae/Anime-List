import {useAppBarStyles} from '../Styles/AppBarStyles'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link, useHistory} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Menu, MenuItem} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const MyAppBar = () => {
    const classes = useAppBarStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [state, setState] = useState({
        isChecked: false,
    });
    const screenWidth = useMediaQuery('(min-width:600px)');
    const onClickHandler = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = (event) => {
        event.target.checked ? history.push("/manga") : history.push("/")
        setState({...state, [event.target.name]: event.target.checked});
    };
    return (
        <>
            <div className={classes.grow}>
                <AppBar position={'sticky'}
                        style={!state.isChecked ? {backgroundColor: "#f7d9d9"} : {backgroundColor: "#d3e0ea"}}>
                    <Toolbar>
                        <Link className={classes.title} to="/">
                            <div className={classes.header}>
                                <Typography style={!state.isChecked ? {color: "#f25287"} : {color: '#276678'}}
                                            className={classes.title}>{!state.isChecked ? 'A N I M E' : 'M A N G A'}
                                </Typography>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon/>
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{'aria-label': 'search'}}
                                    />
                                </div>
                            </div>
                        </Link>
                        <div className={classes.grow}/>
                        {screenWidth ? <div className={classes.div}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        disableRipple
                                        classes={{
                                            switchBase: classes.switchBase,
                                        }}
                                        checked={state.isChecked}
                                        onChange={handleChange}
                                        name="isChecked"
                                    />
                                }
                                label="Manga"
                                style={{color:'#f25287'}}
                            />
                        </div> : <IconButton aria-label={'Menu'} onClick={onClickHandler}>
                            <MenuIcon style={{color: '#f25287'}}/>
                        </IconButton>}
                    </Toolbar>
                </AppBar>
            </div>
            <Toolbar/>
            <Menu
                className={classes.menu}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>A</MenuItem>
                <MenuItem>A</MenuItem>
            </Menu>
        </>
    );
};
export default MyAppBar