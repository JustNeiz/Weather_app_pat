import OpenMore from "../../atoms/OpenMore/OpenMore.tsx";
import NotificationButton from "../../atoms/NotificationButton/NotificationButton.tsx";
import { Flex } from "@mantine/core";

const NavMenu = () => {
  return (
    <Flex ml={10} mt={5}>
      <OpenMore />
      <NotificationButton />
    </Flex>
  );
};

export default NavMenu;
