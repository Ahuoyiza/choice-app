import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme  from './theme';

import Layout from './components/Layout';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  )
}

export default App
