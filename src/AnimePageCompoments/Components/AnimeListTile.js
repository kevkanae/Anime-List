import { useBoxStyles } from "../Styles/TileStyles";
import { Box } from "@chakra-ui/react";

const Tiles = () => {
  const classes = useBoxStyles();
  return (
    <>
      <Box className={classes.mainBox}></Box>
    </>
  );
};

export default Tiles;
