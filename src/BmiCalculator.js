import React, { useRef, useState } from 'react';
import './BmiCalculator.css';

const BmiText = ({ bmi }) => {
  if (bmi < 18.5)
    return <h1>Underweight</h1>;
  if (bmi > 30)
    return <h1>Overweight</h1>;
  return <h1>Normal</h1>;
}

export default function BmiCalculator() {
  const w_inputRef = useRef(null);
  const h_inputRef = useRef(null);
  const [Bmi, setBmi] = useState(0);

  const calculateBmi = () => {
    const w = w_inputRef.current.value;
    const h = h_inputRef.current.value / 100;
    setBmi(w / Math.pow(h, 2));
  }

  return (
    <div className="container">
      <h3>BMI Calculator</h3>
      <div className="input-container">
        <label>Weight:</label>
        <input type="text" ref={w_inputRef} /> kg.
      </div>
      <div className="input-container">
        <label>Height:</label>
        <input type="text" ref={h_inputRef} /> cm.
      </div>
      <button onClick={calculateBmi}>Calculate</button>
      <div className="bmi-result">
        Bmi value: {Bmi.toFixed(2)}
        <BmiText bmi={Bmi} />
      </div>
    </div>
  );
}
