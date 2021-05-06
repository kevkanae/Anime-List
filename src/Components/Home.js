import { useSelector, useDispatch } from "react-redux";
import "../Styles/HomeStyles.css";
import { useState, useEffect } from "react";
import { animeList } from "../Constants/AnimeTabList";
import { mangaList } from "../Constants/MangaTabList";
import axios from "axios";
import { Box, Flex, Text, Button, Grid, Image } from "@chakra-ui/react";
import { Scrollbars } from "rc-scrollbars";
import { useMediaQuery } from "@chakra-ui/react";
import { setTextData } from "../Redux/SearchData";
import { AiTwotoneStar } from "react-icons/ai";
import React from "react";

const Home = () => {
  const isSwitched = useSelector((state) => state.switcher.value);
  const formText = useSelector((state) => state.searchData.value);
  const dispatch = useDispatch();
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [constantList, setConstantList] = useState(
    !isSwitched ? animeList : mangaList
  );
  const [apiData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentTab, setTab] = useState(!isSwitched ? "tv" : "manga");
  console.log(formText);
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
    if (formText === null) {
      axios
        .get(
          `https://api.jikan.moe/v3/top/${
            !isSwitched ? "anime" : "manga"
          }/1/${currentTab}`
        )
        .then((res) => {
          setData(res.data["top"]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      axios
        .get(
          `https://api.jikan.moe/v3/search/${
            !isSwitched ? "anime" : "manga"
          }?q=${formText}&page=1`
        )
        .then((res) => {
          setData(res.data["results"]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentTab, formText, isSwitched]);
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
              {formText === null ? (
                constantList.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Button
                        bg={!isSwitched ? "#f7d9d9" : "#d3e0ea"}
                        color={!isSwitched ? "#f25287" : "#3f3697"}
                        onClick={handleTabClick}
                        value={data["val"]}
                        className="tabs"
                        fontSize={isMobile ? "12px" : "md"}
                      >
                        {data["name"]}
                      </Button>
                    </React.Fragment>
                  );
                })
              ) : (
                <React.Fragment>
                  <Button className="tabs">
                    Search Results For: {formText}
                  </Button>
                  <Button
                    bg={!isSwitched ? "#f7d9d9" : "#d3e0ea"}
                    color={!isSwitched ? "#f25287" : "#3f3697"}
                    onClick={() =>
                      dispatch(setTextData({ animeMangaSearch: null }))
                    }
                    className="tabs"
                  >
                    Go Back
                  </Button>
                </React.Fragment>
              )}
            </Flex>
          </Box>
          <Scrollbars style={{ width: "100%", height: "76vh" }}>
            {!isLoading ? (
              <Grid
                className="list"
                templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
                gap={6}
              >
                {apiData.map((data, index) => {
                  return (
                    <a key={index} href={data["url"]}>
                      <Box className="tile" bg={!isSwitched ? "snow" : "azure"}>
                        <Box className="image">
                          <Image
                            h="100%"
                            w="100%"
                            src={data["image_url"]}
                            alt="Oops"
                          />
                        </Box>
                        <Box className="details">
                          <Box>
                            <Text fontSize="md" fontWeight="bold">
                              {data["title"]}
                            </Text>
                            <Text fontSize="sm">{data["type"]}</Text>
                            <Text fontSize="sm">
                              {data["start_date"]} - {data["end_date"]}
                            </Text>
                          </Box>

                          <Box w="100%">
                            <Text fontSize="sm">
                              <AiTwotoneStar color="gold" /> {data["score"]}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </a>
                  );
                })}
              </Grid>
            ) : (
              <center>Error</center>
            )}
          </Scrollbars>
        </Box>
      </Box>
    </>
  );
};

export default Home;
