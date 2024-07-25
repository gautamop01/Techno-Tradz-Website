import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/Myphoto.png";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.400"} // Background color matching Header
      color={"black"} // Text color set to black
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
           Experience the premier platform for tracking real-time cryptocurrency prices in India. Our app delivers up-to-the-minute updates, ensuring you stay informed and ahead in the crypto trading world.
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
