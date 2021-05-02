import { useMainStyles } from "../Styles/Anime1Styles";
import { useMobileStyles } from "../Styles/Anime1MobileStyles";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Progress from "@material-ui/core/LinearProgress";
import axios from "axios";
import { tabList } from "../Constants/AnimeTabList";
import { Scrollbars } from "react-custom-scrollbars";
import { GiBarbedStar } from "react-icons/gi";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function AnimeComponent1() {
  const classes = useMainStyles();
  const mobile = useMobileStyles();
  const [isLoading, setLoading] = useState(true);
  const [currentTab, setTab] = useState("tv");
  const [array, setAPIArray] = useState([]);
  const screenWidth = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const url = `https://api.jikan.moe/v3/top/anime/1/${currentTab}`;
    axios
      .get(url)
      .then((res) => {
        setAPIArray(res.data["top"]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentTab]);

  const handleChange = (event) => {
    setTab(event.currentTarget.value);
  };

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <header className={classes.appbar}>
          {tabList.map((data, index) => {
            return (
              <Button
                onClick={handleChange}
                value={data.val}
                className={classes.myButton}
                key={index}
              >
                {data.name}
              </Button>
            );
          })}
        </header>
        <div className={classes.body}>
          {isLoading ? (
            <Progress />
          ) : (
            <Scrollbars>
              {array.map((data, index) => {
                return (
                  <a key={index} href={data["url"]}>
                    {screenWidth ? (
                      <div className={classes.tile}>
                        <div className={classes.imageDiv}>
                          <img
                            className={classes.imageTag}
                            src={data["image_url"]}
                            alt={`${index}`}
                          />
                        </div>
                        <div className={classes.details}>
                          <h1 className={classes.title}>{data["title"]}</h1>
                          <p>
                            {data["type"]}({data["episodes"]} eps)
                          </p>
                          <p>
                            {data["start_date"]} - {data["end_date"]}
                          </p>
                        </div>
                        <div className={classes.score}>
                          <span className={classes.star}>
                            <GiBarbedStar />
                          </span>{" "}
                          <p className={classes.scoreP}>
                            Score: {data["score"]}
                          </p>
                        </div>
                      </div>
                    ) : (
                      // MOBILE - VIEW
                      <div className={mobile.tile}>
                        <div className={mobile.imageDiv}>
                          <img
                            className={mobile.imageTag}
                            src={data["image_url"]}
                            alt={`${index}`}
                          />
                        </div>
                        <h1 className={mobile.title}>{data["title"]}</h1>
                      </div>
                    )}
                  </a>
                );
              })}
            </Scrollbars>
          )}
        </div>
      </div>
    </div>
  );
}
