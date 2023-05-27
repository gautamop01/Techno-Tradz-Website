import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

// const avatarSrc = "";
import avatarSrc from "../assets/Myphoto.png";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Our Website</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Experience the ultimate crypto trading app in India. Our guidance is second to none, and our prices are remarkably affordable.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>GAUTAM OP</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
