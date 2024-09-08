import { Flex } from "@mantine/core";
import {IconBrandGithub} from "@tabler/icons-react";

const GitButton = () => {
  const handleClick = () => window.location.href = 'https://github.com/JustNeiz/Weather_app_pat'
  return (
    <Flex w={'100%'} justify={'flex-end'} onClick={handleClick} style={{cursor: 'pointer'}}>
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


export default GitButton;
