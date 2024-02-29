import React, { useState } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    let calcResult;
    switch (operation) {
      case '+':
        calcResult = number1 + number2;
        break;
      case '-':
        calcResult = number1 - number2;
        break;
      case '*':
        calcResult = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          calcResult = "Cannot divide by zero";
        } else {
          calcResult = number1 / number2;
        }
        break;
      default:
        calcResult = 0;
    }
    setResult(calcResult);
  };

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(parseFloat(e.target.value) || 0)}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseFloat(e.target.value) || 0)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">Addition</option>
        <option value="-">Subtraction</option>
        <option value="*">Multiplication</option>
        <option value="/">Division</option>
      </select>
      <button onClick={calculateResult}>Add Them</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
