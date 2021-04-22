import { useMainStyles } from "./MainStyles";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { tabList } from "./Constants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainComponent() {
  const classes = useMainStyles();
  const [value, setValue] = useState(0);
  useEffect(() => {
    const url = "https://api.jikan.moe/v3/top/anime/1/tv";
    const token = "";
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios.all([]);
    axios.get(url, config);
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            {tabList.map((namae, index) => {
              return <Tab label={namae.name} {...a11yProps(index)} />;
            })}
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Three
        </TabPanel>
      </div>
    </div>
  );
}
