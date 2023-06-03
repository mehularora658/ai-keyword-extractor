import React from "react";
import { Heading, Image, Text } from "@chakra-ui/react";
import logo from '../assets/light-bulb.svg'

const Header = () => {
  return (
    <>
      <Image src={logo} width={100} />
      <Heading>AI Keyword Extractor</Heading>
      <Text fontSize={25} textAlign='center' marginTop='0.5rem'>
        Maximize SEO Potential: Uncover Top Keywords using Our AI-driven
         App
      </Text>
    </>
  );
};

export default Header;
