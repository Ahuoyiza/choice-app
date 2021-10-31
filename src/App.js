import React , {useState} from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme  from './theme';

import Home from './pages/Home';

const App = () => {
  const [question, setQuestion] = useState('this is my question');
  const [option, setOption] = useState('this is my option');
  // const [options, setOptions] = useState([]);

  const OnChangeHandler = (e) => {
    setQuestion(e.target.value);
  };
  // const changeOptionHandler = ;

  
  
  return (
    <ChakraProvider theme={theme}>
     <Home question={question} OnChangeHandler={OnChangeHandler} option={option} setOption={setOption} />
    </ChakraProvider>
  )
}

export default App
