import React, { ReactNode } from "react";
import {
  Flex,
  Link,
  Box,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  VStack,
  HStack,
  StackDivider,
  Button,
} from "@chakra-ui/react";

const NavLink = ({ path, children }: { path: string; children: ReactNode }) => {
  return (
    <Link href={path} _hover={{ bg: "lightgrey" }}>
      {children}
    </Link>
  );
};

function MyDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Flex display={{ base: "flex", md: "none", lg: "none" }}>
      <Button
        variant="solid"
        size="sm"
        bg="lightblue"
        color="black"
        ref={btnRef}
        onClick={onOpen}
        _hover={{bg: 'blue.200'}}
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="white" p="30px">
          <DrawerCloseButton />
          <DrawerBody my="10%">
            <VStack divider={<StackDivider borderColor="grey" />}>
              <NavLink path="/">Home</NavLink>
              <NavLink path="/">About</NavLink>
              <NavLink path="/">Contact</NavLink>
              <NavLink path="/">Gallery</NavLink>
              <NavLink path="/">Services</NavLink>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={onClose} bg="lightblue" _hover={{bg: 'blue.200'}}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export const Navi = () => {
  return (
    <Box>
      <Flex display={{ base: "none", md: "flex" }}>
        <HStack columnGap="20px">
          <NavLink path="/">Home</NavLink>
          <NavLink path="/">About</NavLink>
          <NavLink path="/">Contact</NavLink>
          <NavLink path="/">Gallery</NavLink>
          <NavLink path="/">Services</NavLink>
        </HStack>
      </Flex>
      <MyDrawer />
    </Box>
  );
};
