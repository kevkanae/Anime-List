import { useBoxStyles } from "../Styles/TileStyles";
import { Box } from "@chakra-ui/react";

const Tiles = ({ arrayData }) => {
  const classes = useBoxStyles();
  return (
    <>
      {arrayData.map((leData, index) => {
        return <Box className={classes.mainBox}>{leData["mal_id"]}</Box>;
      })}
    </>
  );
};

export default Tiles;
