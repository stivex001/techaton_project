import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import HeroImage from "../assets/images/illustration-1.svg";

const Hero = () => {
  return (
    <Box marginTop="50px" maxWidth="1200px" margin="auto">
      <Flex justify="space-between" alignItems="center" padding="20px">
        <Box maxWidth="100%" margin='auto'>
          <Heading
            as="h3"
            size="lg"
            marginBottom="20px"
            color="black"
            width='90%'
          >
            All your files in one secure<br></br> location, accesible anywhere.
          </Heading>
          <Text left="0" marginBottom="20px" width='90%'>
            Fylo stores your most important files in one secure loaction. Access
            them wherever you need,share and collaborate with friends,
            family,and co-workers
          </Text>
          <Flex justify="space-between" align="center" width='80%'>
            <Input width="55%" placeholder="Enter your email"  />
            <Button width="40%" colorScheme="blue">
              Get Started
            </Button>
          </Flex>
        </Box>
        <Box>
          <Image maxWidth="100%" src={HeroImage} alt="hero image" margin='auto' />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
