import * as React from 'react';
import { string } from 'prop-types';

const Form = () => {
  const [keyInput, setKeyInput] = React.useState('');
  const [valueInput, setValueInput] = React.useState('');
  const [message, setMessage] = React.useState('');

  const newInput = (key: string, value: string) => {
    //If key or value is empty, set message to both fields are required
    const input = {
      key, 
      value
    };

    fetch('http://localhost:3000/store',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      })
      .then(response => response.json())
      .then(result => setMessage(result.message))
      .catch(err => console.log(err))
  }
  
  const submitForm = React.useCallback(() => {
      // Submit form logic here
      newInput(keyInput, valueInput)
    }, 
    [keyInput, valueInput],
  );


  return (
    <div>
      {message}
      <label>Key:</label>
      <input
        placeholder="Key" 
        onChange={(e) => setKeyInput(e.target.value)} 
        value={keyInput}
      />
      <label>Value:</label>
      <input 
        placeholder="Value" 
        onChange={(e) => setValueInput(e.target.value)}
        value={valueInput}
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default Form;