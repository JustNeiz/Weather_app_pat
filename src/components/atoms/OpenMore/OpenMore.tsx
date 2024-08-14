import { Flex } from "@mantine/core";
import { IconAppsFilled } from "@tabler/icons-react";

const OpenMore = () => {
  return (
    <Flex
      bg="#1E1E1E"
      w={40}
      h={40}
      m={10}
      c="white"
      justify="center"
      align="center"
      style={{
        borderRadius: "10px"
      }}
    >
      <IconAppsFilled />
    </Flex>
  );
};

export default OpenMore;
