import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import btcSrc from "../assets/btc.png";

const Home = () => {
  return (
    <Box
      bgColor={"white"} // Changed background color to white
      w={"full"}
      h={"85vh"}
      position={"relative"} // Set position relative for absolute children
      overflow={"hidden"} // Hide overflow for shadow balls
    >
      {/* Shadow Balls */}
      <Box
        position={"absolute"}
        top={"-20%"}
        left={"10%"}
        w={"20rem"}
        h={"20rem"}
        bg={"rgba(255, 255, 255, 0.3)"} // Semi-transparent white color
        borderRadius={"50%"}
        filter={"blur(100px)"}
        zIndex={0} // Behind other content
      />
      <Box
        position={"absolute"}
        bottom={"-10%"}
        right={"15%"}
        w={"15rem"}
        h={"15rem"}
        bg={"rgba(255, 255, 255, 0.3)"}
        borderRadius={"50%"}
        filter={"blur(100px)"}
        zIndex={0} // Behind other content
      />

      <motion.div
        style={{
          height: "80vh",
          zIndex: 1, // Above shadow balls
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          // filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"black"} // Changed text color to black
        mt={"-20"}
        zIndex={1} // Above shadow balls
        position={"relative"} // Position relative for zIndex to work
        fontFamily={"'Trade Winds', system-ui"} // Applying the chosen font
      >
        TECHNO TRADZ
      </Text>
    </Box>
  );
};

export default Home;
