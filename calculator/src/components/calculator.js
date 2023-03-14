import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;

    switch (value) {
      case '=':
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'C':
        setInput('');
        setResult('');
        break;
      case 'CE':
        setInput(input.slice(0, -1));
        break;
      default:
        setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="keypad">
        <button className="button" onClick={handleClick} value="C">C</button>
        <button className="button" onClick={handleClick} value="CE">CE</button>
        <button className="button" onClick={handleClick} value="/">÷</button>
        <button className="button" onClick={handleClick} value="*">x                                                 </button>
        <button className="button" onClick={handleClick} value="7">7</button>
        <button className="button" onClick={handleClick} value="8">8</button>
        <button className="button" onClick={handleClick} value="9">9</button>
        <button className="button" onClick={handleClick} value="-">-</button>
        <button className="button" onClick={handleClick} value="4">4</button>
        <button className="button" onClick={handleClick} value="5">5</button>
        <button className="button" onClick={handleClick} value="6">6</button>
        <button className="button" onClick={handleClick} value="+">+</button>
        <button className="button" onClick={handleClick} value="1">1</button>
        <button className="button" onClick={handleClick} value="2">2</button>
        <button className="button" onClick={handleClick} value="3">3</button>
        <button className="button-equal" onClick={handleClick} value="=">=</button>
        <button className="button" onClick={handleClick} value="0">0</button>
        <button className="button" onClick={handleClick} value=".">.</button>
      </div>
    </div>
  );
}

export default Calculator;
