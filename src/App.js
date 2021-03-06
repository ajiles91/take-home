import './App.css';
import React from 'react';

function App() {
  let [textInput, setTextInput] = React.useState('Here is some example text.');
  let [conversionMode, setConversionMode] = React.useState('lowercase');
  let [textOutput, setTextOutput] = React.useState('');

  const handleRadioChange = event => {
    setConversionMode(event.target.value);
  }

  const handleTextareaChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    let uppercaseText = textInput.toUpperCase()
    let lowercaseText = textInput.toLowerCase()
    if(conversionMode === 'uppercase'){
      setTextOutput(uppercaseText)
    }else{
      setTextOutput(lowercaseText)
    }
    event.preventDefault();
    // setTextOutput('Your formatted text will go here!')
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            id="text"
            onChange={handleTextareaChange}
            value={textInput}
          />
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-0"
            value="lowercase"
            checked={conversionMode === "lowercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-0">Convert text to lowercase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value="uppercase"
            checked={conversionMode === "uppercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to uppercase</label>
        </div>
        <button type="submit">Submit</button>
        <div className="form-control form-control__text u-mt-3">
          <label htmlFor="result">Converted text:</label>
          <output id="result" className="result">{textOutput}</output>
        </div>
      </form>
    </div>
  );
}

export default App;
