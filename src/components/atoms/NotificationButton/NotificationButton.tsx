import { IconBellFilled } from "@tabler/icons-react";
import { Flex } from "@mantine/core";
const NotificationButton = () => {
  return (
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
      <IconBellFilled />
    </Flex>
  );
};

export default NotificationButton;
