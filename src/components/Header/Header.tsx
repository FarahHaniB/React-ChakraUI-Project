import { Flex, Image, Box } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { Navi } from "./Navi";

export default function Header() {
  return (
    <Box>
      <Flex h="15vh" w="100%" align="center" justify="space-between">
        <Image src={logo} boxSize="50px" alt="page-logo" />
        <Navi />
      </Flex>
    </Box>
  );
}
