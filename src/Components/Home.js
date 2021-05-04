import { useSelector } from "react-redux";
import "../Styles/HomeStyles.css";
import { useState, useEffect } from "react";
import { animeList } from "../Constants/AnimeTabList";
import { mangaList } from "../Constants/MangaTabList";
import axios from "axios";
import { Box, Flex, Text, Button, Grid, GridItem } from "@chakra-ui/react";
import { Scrollbars } from "rc-scrollbars";

const Home = () => {
  const isSwitched = useSelector((state) => state.switcher.value);
  const [constantList, setConstantList] = useState(
    !isSwitched ? animeList : mangaList
  );
  const [apiData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentTab, setTab] = useState(!isSwitched ? "tv" : "manga");

  //---------------------------------------------------------------------------//
  useEffect(() => {
    if (!isSwitched) {
      setConstantList(animeList);
      setTab("tv");
    } else {
      setConstantList(mangaList);
      setTab("manga");
    }
  }, [isSwitched]);

  useEffect(() => {
    const url = `https://api.jikan.moe/v3/top/${
      !isSwitched ? "anime" : "manga"
    }/1/${currentTab}`;
    //-------------------------------------------------//
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setData(res.data["top"]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentTab, isSwitched]);
  //---------------------------------------------------------------------------//
  const handleTabClick = (e) => {
    setTab(e.target.value);
  };
  //---------------------------------------------------------------------------//
  return (
    <>
      <Box className="main">
        <Box className="body">
          <Box className="appbar" bg={!isSwitched ? "#f7d9d9" : "#d3e0ea"}>
            <Flex direction="row" align="center" justify="space-evenly">
              {constantList.map((data, index) => {
                return (
                  <Button
                    bg={!isSwitched ? "#f7d9d9" : "#d3e0ea"}
                    color={!isSwitched ? "#f25287" : "#3f3697"}
                    key={index}
                    onClick={handleTabClick}
                    value={data["val"]}
                    className="tabs"
                  >
                    {data["name"]}
                  </Button>
                );
              })}
            </Flex>
          </Box>
          <Scrollbars style={{ width: "100%", height: "76vh" }}>
            <Grid className="list" templateColumns="repeat(2, 1fr)" gap={6}>
              {apiData.map((data, index) => {
                return (
                  <Box key={index} w="100%" h="10" bg="blue.500">
                    {data["title"]}
                  </Box>
                );
              })}
            </Grid>
          </Scrollbars>
        </Box>
      </Box>
    </>
  );
};

export default Home;
