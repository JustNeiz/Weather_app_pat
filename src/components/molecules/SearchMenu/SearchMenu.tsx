import { Flex } from "@mantine/core";
import CurrentCity from "../../atoms/CurrentCity/CurrentCity";
import SearchAutocomplete from "../../atoms/SearchAutocomplete/SearchAutocomplete";
import { useMediaQuery } from "@mantine/hooks";

const SearchMenu = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1280px)");
  return (
    <Flex justify={isLargeScreen ? "flex-end" : 'space-between'} mt={isLargeScreen ? 0 : 10} align="center" w={'100%'}>
      <CurrentCity />
      <SearchAutocomplete />
    </Flex>
  );
};



export default SearchMenu;
