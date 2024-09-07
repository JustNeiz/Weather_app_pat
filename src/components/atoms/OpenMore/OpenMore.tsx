import { Flex } from "@mantine/core";
import { IconAppsFilled } from "@tabler/icons-react";

const OpenMore = () => {
  console.log("hi from buttn");
  return (
    <Flex
      bg="#1E1E1E"
      w={40}
      mr={20}
      h={40}
      c="white"
      justify="center"
      align="center"
      style={{
        borderRadius: "10px",
      }}
    >
      <IconAppsFilled />
    </Flex>
  );
};

export default OpenMore;
