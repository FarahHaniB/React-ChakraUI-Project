import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import { Content } from "./components/Body/Content";

export function App() {
  return (
    <Flex direction="column" p="3%">
      <Header />
      <Content />
    </Flex>
  );
}
