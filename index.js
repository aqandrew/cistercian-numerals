import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

const App = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    const { value, min, max } = event.target;
    const num = Math.max(+min, Math.min(+max, +value));
    setNumber(num);
  };

  return (
    <>
      <h1>Cistercian Numerals</h1>
      <input
        type="number"
        name="number"
        id="number"
        min="0"
        max="9999"
        value={number}
        onChange={handleChange}
      />
      <pre>
        <ul>
          {/* Left pad number string with 0s */}
          {('0000' + number)
            .slice(-4)
            .split('')
            .map((digit, i) => (
              <li key={i}>{digit}</li>
            ))}
        </ul>
      </pre>
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
