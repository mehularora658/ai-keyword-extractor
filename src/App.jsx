import React ,{useState} from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./Components/Header"; 
import Footer from "./Components/Footer";
import TextInput from "./Components/TextInput";
const App = () => {
  
  const [text,setText] = useState('');
 

  return (
    <Box bg="blue.600" height="100vh" color="white">
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput   />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;