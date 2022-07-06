import { Box, Flex, Link, Spacer, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <Box bg="rgb(255,255,255)" margin="auto" p={4} color="grey" maxWidth="1200px">
      <Flex justify="space-between" alignItems="center">
        <Image height='25px' width=''  src={Logo} alt="logo" />
        <Spacer />
        <ul>
          <Link margin="20px" fontWeight="bold">
            Features
          </Link>
          <Link margin="20px" fontWeight="bold">
            Team
          </Link>
          <Link margin="20px" fontWeight="bold">
            Sign In
          </Link>
        </ul>
      </Flex>
    </Box>
  );
};

export default Navbar;
