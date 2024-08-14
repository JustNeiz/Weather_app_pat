import NavMenu from "../../molecules/NavMenu/NavMenu.tsx";
import SearchMenu from "../../molecules/SearchMenu/SearchMenu.tsx";
import UserMenu from "../../molecules/UserMenu/UserMenu.tsx";
import ThemeSwitcher from "../../molecules/ThemeSwitcher/ThemeSwitcher.tsx";
import { Flex } from "@mantine/core";

const Header = () => {
  return (
    <Flex justify="space-between" align="center">
      <NavMenu />
      <SearchMenu />
      <ThemeSwitcher />
      <UserMenu />
    </Flex>
  );
};

export default Header;
