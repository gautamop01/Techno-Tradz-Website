import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} bgColor={"blackAlpha.400"} justifyContent={"center"}>
      <Button
        variant={"solid"}
        color={"white"}
        borderRadius={"full"}
        bgColor={"blue.500"}
        _hover={{ bg: "blue.600" }}
        fontSize={"lg"} // Increase font size
        px={"8"} // Increase horizontal padding
        py={"6"} // Increase vertical padding
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant={"solid"}
        color={"white"}
        borderRadius={"full"}
        bgColor={"green.500"}
        _hover={{ bg: "green.600" }}
        fontSize={"lg"} // Increase font size
        px={"8"} // Increase horizontal padding
        py={"6"} // Increase vertical padding
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        variant={"solid"}
        color={"white"}
        borderRadius={"full"}
        bgColor={"red.500"}
        _hover={{ bg: "red.600" }}
        fontSize={"lg"} // Increase font size
        px={"8"} // Increase horizontal padding
        py={"6"} // Increase vertical padding
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
