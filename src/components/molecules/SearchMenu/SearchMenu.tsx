import { Flex } from "@mantine/core";
import CurrentCity from "../../atoms/CurrentCity/CurrentCity";
import SearchAutocomplete from "../../atoms/SearchAutocomplete/SearchAutocomplete";

const SearchMenu = () => {
  return (
    <Flex justify="space-between" align="center" w={'100%'}>
      <CurrentCity />
      <SearchAutocomplete />
    </Flex>
  );
};

export default SearchMenu;
