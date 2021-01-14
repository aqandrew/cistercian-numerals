import React, { useState } from 'react';
import ReactDom from 'react-dom';

const POINTS = [
  '0,0 0,3',
  '0,0 1,0',
  '0,1 1,1',
  '0,0 1,1',
  '0,1 1,0',
  '0,0 1,0 0,1',
  '1,0 1,1',
  '0,0 1,0 1,1',
  '1,0 1,1 0,1',
  '0,0 1,0 1,1 0,1',
];

const getDigits = (number) => number.toString().split('').reverse();

const App = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    const { value, min, max } = event.target;
    const num = Math.max(min, Math.min(max, value % (+max + 1)));
    setNumber(num);
  };

  return (
    <div className="App">
      <header>
        <h1>Cistercian Numerals</h1>
        <label>
          Enter a number:
          <input
            type="number"
            name="number"
            id="number"
            min="0"
            max="9999"
            value={number}
            onChange={handleChange}
          />
        </label>
      </header>

      <svg viewBox="-1 -1 2 5" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
          polyline {
            fill: none;
            stroke: black;
            stroke-width: 0.25;
            stroke-linecap: round;
            stroke-linejoin: round;
          }`}
        </style>

        <Digit value={0} />

        {getDigits(number).map((value, i) => (
          <Digit value={value} magnitude={i} key={i} />
        ))}
      </svg>
    </div>
  );
};

const Digit = ({ value = 0, magnitude }) => {
  const getTransform = () => {
    switch (magnitude) {
      case 1:
        return 'scale(-1, 1)';
      case 2:
        return 'translate(0, 3) scale(1, -1)';
      case 3:
        return 'translate(0, 3) scale(-1, -1)';
      default:
        return '';
    }
  };

  return (
    <polyline transform={getTransform()} points={POINTS[value]}></polyline>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
