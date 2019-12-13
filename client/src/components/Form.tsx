import * as React from 'react';

const Form = () => {
  const [keyInput, setKeyInput] = React.useState('');
  const [valueInput, setValueInput] = React.useState('');
  const [message, setMessage] = React.useState('');

  const newInput = (key: string, value: string) => {
    if(key === '' || value === '') {
      setMessage('Both fields are required')
    } else {
      const input = {
        key,
        value
      };

      fetch('http://localhost:3000/store-key-values',
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
  }
    
  const submitForm = React.useCallback(() => {
      newInput(keyInput, valueInput)
    }, 
    [keyInput, valueInput],
  );

  const getAllPairs = () => {
    fetch('http://localhost:3000/get-key-values')
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  const deleteAllPairs = () => {
    fetch('http://localhost:3000/delete-key-values')
      .then(response => response.json())
      .then(result => setMessage(result.message))
      .catch(err => console.log(err))
  }

  return (
    <div>
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
      {message}
      <button onClick={getAllPairs}>
        Show All
      </button>
        <button onClick={deleteAllPairs}>
          Delete All
      </button>
    </div>
  );
};

export default Form;