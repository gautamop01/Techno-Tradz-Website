import React from "react";
import { VStack, Image, Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Function to generate a random background color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CoinCard = ({ id, name, img, price, symbol, currencySymbol }) => {
  const bgColor = getRandomColor();

  return (
    <Link to={`/coin/${id}`} style={{ textDecoration: 'none' }}>
      <Box
        w={"52"}
        h={"52"}
        bg={bgColor}
        shadow={"lg"}
        p={"6"}
        borderRadius={"full"} // Circular design
        transition={"all 0.3s"}
        m={"4"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={{
          "&:hover": {
            transform: "scale(1.05)",
            zIndex: 1, // Ensure card is on top during hover
          },
        }}
      >
        <Image
          src={img}
          w={"16"} // Adjusted size for better fit
          h={"16"}
          objectFit={"contain"}
          alt={`${name} logo`}
          mb={3} // Margin below image
        />
        <Heading size={"md"} noOfLines={1} mb={2}>
          {currencySymbol}
          {price.toFixed(2)}
        </Heading>
        <Text noOfLines={1} fontSize={"sm"} textAlign="center">
          {name} ({symbol.toUpperCase()})
        </Text>
      </Box>
    </Link>
  );
};

export default CoinCard;
