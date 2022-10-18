import { Box, Text, Heading, Flex, Image, Button } from "@chakra-ui/react";
import comp from "../assets/comp.svg";

export const Content = () => {
  return (
    <Flex
      direction={{ base: "column-reverse", lg: "row" }}
      align="center"
      justify="start"
      gap="5%"
      minH="85vh"
    >
      <Box maxW="510px" w="80%">
        <Heading as="h1" mb="20px" fontWeight="bold" fontSize="30px">
          How to start your own business !<br />
          Are you ready ?
        </Heading>
        <Text mb="20px" fontSize="24px">
          WE help individuals or Organizations to start their business or
          start-up by giving them indepth theory and practical sessions.
        </Text>
        <Button variant="solid" size="sm" colorScheme="purple">
          Join Now!
        </Button>
      </Box>
      <Image src={comp} w={{ base: "80%", lg: "40%" }} maxW="500px"></Image>
    </Flex>
  );
};
