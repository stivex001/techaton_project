import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  VStack,
  Circle,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import FooterImage from "../assets/images/logo.svg";
import Phone from "../assets/images/icon-phone.svg";
import Email from "../assets/images/icon-email.svg";

const Footer = () => {
  return (
    <Box
      marginTop="50px"
      maxWidth="1200px"
      margin="auto"
      padding="20px"
      display={"flex"}
      align={"center"}
      justifyContent={"space-around"}
      // flexDirection={["column", "column", "column", "row", "row"]}
      background="#07043b"
      color={"white"}
    >
      <VStack
        w={"full"}
        // minH={"200px"}
        align={"flex-start"}
        ml={50}
        mt={10}
        mb={3}
      >
        <Image src={FooterImage} color={"white"} size="20px" />

        <Flex justify={""} alignItems="center">
          <Image src={Phone} width="" />
          <Text
            width=""
            minHeight=""
            fontSize="16px"
            fontWeight={600}
            textAlign="left"
            lineHeight="35px"
            mb={2}
            color="white"
            marginLeft={"20px"}
          >
            Phone: +2348162174754
          </Text>
        </Flex>
        <Flex justify={""} alignItems="center">
          <Image src={Email} width="" />
          <Text
            width=""
            minHeight=""
            fontSize="16px"
            fontWeight={600}
            textAlign="left"
            lineHeight="35px"
            mb={2}
            color="white"
            marginLeft={"20px"}
          >
            stephenadeyemo@gmail.com
          </Text>
        </Flex>
      </VStack>
      <HStack
        maxWidth="1200px"
        // w={["100%", "100%", "100%", "100%", "30%"]}
        align="flex-start"
        // flexWrap={["wrap", "wrap", "wrap", "wrap", "nowrap"]}
        mt={10}
        mb={3}
        ml={5}
        mr={50}
        gap={5}
        pl={10}
        spacing={20}
      >
        <VStack
          w={["40%", "40%", "40%", "50%", "30%"]}
          // minH={"100%"}
          align="flex-start"
        >
          <Stack
            // minHeight="21px"
            fontSize="12px"
            fontWeight={400}
            textAlign="left"
            lineHeight="20px"
            color="white"
            fontStyle={"normal"}
            gap={2}
          >
            <Text cursor={"pointer"}>About Us</Text>
            <Text cursor={"pointer"}>Jobs</Text>
            <Text cursor={"pointer"}>Press</Text>
            <Text cursor={"pointer"}>Blog</Text>
          </Stack>

          {/* <Spacer /> */}
        </VStack>

        <VStack
          w={["40%", "40%", "40%", "50%", "30%"]}
          minH={"100%"}
          align="flex-start"
        >
          <Stack
            // minHeight="21px"
            fontSize="12px"
            fontWeight={400}
            textAlign="left"
            lineHeight="21px"
            color="white"
            fontStyle={"normal"}
            gap={3}
          >
            <Text cursor={"pointer"}>Contact Us</Text>
            <Text cursor={"pointer"}>Terms</Text>
            <Text cursor={"pointer"}>Privacy</Text>
          </Stack>

          <Spacer />
        </VStack>
        <HStack
          width={"100%"}
          gap={4}
          pt={6}
          // display={["none", "none", "none", "none", "flex"]}
        >
          <Circle
            zIndex={1000}
            p={2}
            cursor={"pointer"}
            background={"#fff"}
            border="0.3px solid #C1C0C0"
            color={"white"}
          >
            <RiFacebookFill color={"red "} size="20px " />
          </Circle>

          <Circle
            zIndex={1000}
            p={2}
            cursor={"pointer"}
            background={"#fff"}
            border="0.3px solid #C1C0C0"
          >
            <AiFillInstagram size="20px" color={"red"} />
          </Circle>

          <Circle
            zIndex={1000}
            p={2}
            cursor={"pointer"}
            background={"#fff"}
            border="0.3px solid #C1C0C0"
          >
            <FaTwitter size="20px" color={" rgba(62, 134, 245, 1)"} />
          </Circle>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
