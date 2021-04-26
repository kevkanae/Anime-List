import { useMainStyles } from "../Styles/MainStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import { tabList } from "../Constants/TabList";



export default function MainComponent() {
  const classes = useMainStyles();
  const [value, setValue] = useState(0);
  const [currentTab, setTab] = useState("tv");
  const [array, setAPIArray] = useState([]);

  useEffect(() => {
    const url = `https://api.jikan.moe/v3/top/anime/1/${currentTab}`;
    axios.get(url).then((res) => {
      setAPIArray(res.data["top"]);
    });
  }, [currentTab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    newValue === 0
      ? setTab("tv")
      : newValue === 1
      ? setTab("airing")
      : newValue === 2
      ? setTab("upcoming")
      : newValue === 3
      ? setTab("movie")
      : setTab("bypopularity");
  };

  return (
    <div className={classes.main}>
     
    </div>
  );
}
