import { Flex } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

const UserMenu = () => {
  return (
    <Flex
      bg="#1E1E1E"
      w={40}
      h={40}
      mr={20}
      mt={5}
      c="white"
      justify="center"
      align="center"
      style={{
        borderRadius: "10px",
      }}
    >
      <IconUser />
    </Flex>
  );
};

export default UserMenu;
