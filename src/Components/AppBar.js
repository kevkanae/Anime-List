import { useAppBarStyles } from "../Styles/AppBarStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";

const MyAppBar = () => {
  const classes = useAppBarStyles();
  const history = useHistory();
  const [state, setState] = useState({
    isChecked: false,
  });
  const handleChange = (event) => {
    event.target.checked ? history.push("/manga") : history.push("/");
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <div className={classes.grow}>
        <AppBar
          position={"sticky"}
          style={
            !state.isChecked
              ? { backgroundColor: "#f7d9d9" }
              : { backgroundColor: "#d3e0ea" }
          }
        >
          <Toolbar>
            <Link className={classes.title} to="/">
              <div className={classes.header}>
                <Typography
                  style={
                    !state.isChecked
                      ? { color: "#f25287" }
                      : { color: "#276678" }
                  }
                  className={classes.title}
                >
                  {!state.isChecked ? "A N I M E • アニメ" : "M A N G A • 漫画"}
                </Typography>
              </div>
            </Link>
            <div className={classes.grow} />
            <div className={classes.div}>
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
                style={
                  !state.isChecked ? { color: "#f25287" } : { color: "#276678" }
                }
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ height: "3vh", width: "100vh" }} />
    </>
  );
};
export default MyAppBar;
