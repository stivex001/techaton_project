import { Box, Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import HeroImage from "../assets/images/illustration-2.svg";
import BackgroungImage from "../assets/images/bg-curve-desktop.svg";
import KyleImage from "../assets/images/avatar-testimonial.jpg";
import Arrow from "../assets/images/icon-arrow.svg";

const CTA = () => {
  return (
    <Box
      maxWidth="1200px"
      margin="auto"
      marginTop="70px"
      background="rgb(249,248,254)"
      BackgroungImage={BackgroungImage}
      objectFit="cover"
    >
      <Flex justify="space-between" alignItems="center" padding="20px">
        <Box maxWidth="100%" margin="auto">
          <Heading as="h3" size="lg" marginBottom="20px" color="black">
            Stay productive, wherever you are
          </Heading>
          <Text left="0" marginBottom="20px" width="70%">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your storage needs.
          </Text>
          <Text left="0" marginBottom="20px" width="70%">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </Text>
          <Flex alignItems={'center'}>
          <Link color="teal.500" textDecoration="underline">
            See how Fylo works
          </Link>
          <Image src={Arrow} />
          </Flex>

          <Box
            marginTop="50px"
            width="70%"
            padding="20px"
            borderRadius="10px"
            boxShadow="1px 1px 5px 1px grey"
            backgroundColor="white"
          >
            <Text>
              <b>"</b>
              <br />
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </Text>
            <Flex marginTop="20px" align="center">
              <Image
                maxWidth="100%"
                borderRadius="50%"
                alignItems="center"
                boxSize="60px"
                src={KyleImage}
              />
              <Box marginLeft="20px">
                <Text fontSize="md" fontWeight="bold">
                  Kyle Burton
                </Text>
                <Text fontSize="xs" alignItems="center">
                  Founder & CEO, Huddle
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box width="70%" >
          <Image
            maxWidth="100%"
            src={HeroImage}
            alt="hero image"
            margin="auto"
            height="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CTA;
