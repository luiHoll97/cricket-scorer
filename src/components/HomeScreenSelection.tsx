import React from 'react';
import { Box, Button, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
const HomeScreenSelection = ({ imageSrc, heading, text }: any): JSX.Element => {
    return (
      <>
        <Box
        mt='5%'
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="base"
          h="60vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Image src={imageSrc} alt={heading} h="80%"  />
          <Box p="6">
            <Center>
              <Heading fontWeight="bold" fontSize="xl" mb="2">
                {heading}
              </Heading>
            </Center>
            <Text>{text}</Text>
            
          </Box>
        </Box>
      </>
    );
  };
  
  export default HomeScreenSelection;