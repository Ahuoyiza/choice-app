import React from 'react';
import{ 
    Flex,
    Box,

    Heading,
   
  } from '@chakra-ui/react';

const Layout = ({children}) => {
    return (
        <Flex
        direction="column"
        p={10}
        >
            <Heading>Choice maker</Heading>
            <Box>
                {children}
            </Box>
        </Flex>
    )
}

export default Layout
