import React, {useState} from 'react';
import{ 
    Button,
    FormControl,
    Input,
  } from '@chakra-ui/react';

const Option = () => {
    const [fields, setFields] = useState([{ value: '' }]);
    function handleAdd() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
      }
 
    
    return (
    <>
      {fields.map((field, idx) => {
          return (
            <FormControl key={idx}>
              <Input
                placeholder="Option"
                value={field.value}
                onChange={(e) => {
                  const values = [...fields];
                  values[idx].value = e.target.value;
                  setFields(values);
                }}
              />
              <h1>{field.value}</h1>
            </FormControl>
               );
            })}
       

<Button onClick={handleAdd}>Add more option</Button>
</>
    )
}

export default Option
