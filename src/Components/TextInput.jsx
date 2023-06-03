import React, { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";
import KeywordModal from "./KeywordModal";
const TextInput = () => {
  const [textvalue, setTextvalue] = useState("");
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [keywords, setkeywords] = useState('');
 
  const buttonHandle = () => {
    if (textvalue === "" || textvalue === " ") {
      toast({
        title: "Empty Box Error",
        description: "Enter Some text to Extract Keywords",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      extractKeywords();
    }
  };
   const extractKeywords = async () => {
     setisLoading(true);
     setisOpen(true);
     const options = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
       },
       body: JSON.stringify({
         model: `text-davinci-003`,
         prompt: `Extract keywords from this text . keywords first letter should be uppercase, keywords should be seprated by commas \n\n ${textvalue}
        `,
         temperature: 0.5,
         frequency_penalty: 0.8,
         max_tokens: 70,
       }),
     };
     const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
     console.warn("hello");
     const abc = await response.json();
     console.log(abc.choices[0].text);
     setkeywords(abc.choices[0].text)
     if(abc.choices[0].text){
      setisLoading(false)
     }
   };
   const closeModal =()=>{
    setisOpen(false)
   }
  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        height={150}
        marginTop={7}
        padding={4}
        onChange={(e) => {
          setTextvalue(e.target.value);
        }}
      />
      <Button
        bg="blue.500"
        marginTop={4}
        marginBottom={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={buttonHandle}
      >
        Extract Keywords
      </Button>
      <KeywordModal keywords={keywords} loading={isLoading} isOpen={isOpen} closeModal={closeModal}/>
    </>
  );
};

export default TextInput;

