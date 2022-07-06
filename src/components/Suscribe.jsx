import React from "react";
import { Box, Flex, Text, Input, Button, Heading } from "@chakra-ui/react";

const Suscribe = () => {
  return (
    <Box backgroundColor="rgb(87,89,137)" marginTop="50px" maxWidth="1200px" margin="auto" padding='20px'>
      <Flex justify="space-between" alignItems="center" marginTop="50px">
        <Box>
          <Heading as = "h3" size="lg" color="white" marginBottom="20px">
            Get early access today
          </Heading>
          <Text width="70%" color="white">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </Text>
        </Box>

        <Box marginRight="30px">
          <Input
            marginBottom="20px"
            width=""
            placeholder="email@example.com"
            type="email"
            background="white"
            w="100%"
          />
          <Button width="" colorScheme="blue">
            Get Started For Free
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Suscribe;
