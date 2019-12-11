import * as React from 'react';

const Form = () => {
  const [keyInput, setKeyInput] = React.useState('');
  const [valueInput, setValueInput] = React.useState('');

  const submitForm = React.useCallback(() => {
    // Submit form logic here
  }, []);

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
    </div>
  );
};

export default Form;