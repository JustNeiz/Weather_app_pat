import { Flex } from "@mantine/core";
import {IconBrandGithub} from "@tabler/icons-react";

const UserMenu = () => {
  return (
    <Flex w={'100%'} justify={'flex-end'}>
  <Flex
    bg="#1E1E1E"
    w={40}
    h={40}
    c="white"
    justify="center"
    align="center"
    style={{
      borderRadius: "10px",
    }}
  >
    <IconBrandGithub/>
  </Flex>
    </Flex>
);
};


export default UserMenu;
