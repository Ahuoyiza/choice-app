import React from 'react';
import{ 
    Heading,
    FormControl,
    FormLabel,
  
    FormHelperText,
    Input,

  } from '@chakra-ui/react';
  import Layout from '../components/Layout';
  import Option from '../components/Option';

const Home = ({question, OnChangeHandler, setOption, option}) => {
   
    
    return (
        <Layout>
            
            <FormControl>
                <FormLabel>Question</FormLabel>
                <Input
                    value={question}
                    onChange={OnChangeHandler}
                />
                <FormHelperText>
                    This is some helper text.
                </FormHelperText>
                {/* <FormErrorMessage>
                    This is a form error message.
                </FormErrorMessage> */}
            </FormControl>
            <Heading>{question}</Heading>
            <Option setOption={setOption} option={option} />
  
        </Layout>
    )
}

export default Home
