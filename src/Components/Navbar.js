import { useSelector, useDispatch } from "react-redux";
import { switchOn, switchOff } from "../Redux/Switcher";
import { setTextData } from "../Redux/SearchData";
import "../Styles/NavbarStyles.css";
import { BsSearch } from "react-icons/bs";
import {
  Box,
  Flex,
  Text,
  Button,
  InputRightElement,
  Input,
  InputGroup,
  FormControl,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";

const MyNavbar = () => {
  const isSwitched = useSelector((state) => state.switcher.value);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState("");
  const handleSwitch = (event) => {
    isSwitched ? dispatch(switchOff()) : dispatch(switchOn());
  };
  const sendFormData = () => {
    dispatch(setTextData({ animeMangaSearch: formData }));
  };

  return (
    <>
      <div className="main">
        <Box className="Box" bg={!isSwitched ? "#f7d9d9" : "#d3e0ea"}>
          <Flex className="flex">
            <Box>
              <Text color={!isSwitched ? "#f25287" : "#3f3697"}>
                {!isSwitched ? "A N I M E • アニメ" : "M A N G A • 漫画"}
              </Text>
            </Box>
            <Box className="rightBox">
              <Box className="inputGroup">
                <InputGroup size="md">
                  <Input
                    onChange={(e) => setFormData(e.target.value)}
                    type="text"
                    color={!isSwitched ? "#f25287" : "#3f3697"}
                    placeholder={!isSwitched ? "Search Anime" : "Search Manga"}
                  />
                  <InputRightElement>
                    <Button onClick={sendFormData}>
                      <BsSearch color={!isSwitched ? "#f25287" : "#3f3697"} />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>

              <Box className="formControl">
                <FormControl display="flex" alignItems="center">
                  <Switch
                    size="lg"
                    colorScheme="messenger"
                    onChange={handleSwitch}
                    isChecked={isSwitched}
                    id="mangaSwitch"
                  />
                </FormControl>
              </Box>
            </Box>
          </Flex>
        </Box>
      </div>
    </>
  );
};
export default MyNavbar;
