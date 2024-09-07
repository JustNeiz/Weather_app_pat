import NavMenu from "../../molecules/NavMenu/NavMenu.tsx";
import SearchMenu from "../../molecules/SearchMenu/SearchMenu.tsx";
import UserMenu from "../../molecules/UserMenu/UserMenu.tsx";
import { Flex } from "@mantine/core";

const Header = () => {
  return (
    <Flex justify="space-between" align="center" h={'7vh'} >
      <NavMenu />
      <SearchMenu />
      <UserMenu />
    </Flex>
  );
};

export default Header;
