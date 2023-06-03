import React from "react";
import { Text, Image, Flex } from "@chakra-ui/react";
import openAilogo from "../assets/openai.png";
const Footer = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Image src={openAilogo} />
        <Text>Powered By Open AI API</Text>
      </Flex>
    </>
  );
};

export default Footer;
