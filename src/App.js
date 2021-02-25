import React, { useCallback, useState } from 'react'
import './App.css';

function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" value={props.text} onChange={(e) => props.handleChange(e.target.value)} />
    </div>
  );
}

function App(props) {
  const[initialText, setInitialText] = useState("");
  const[yearlyText, setYearlyText] = useState("");
  const[growthText, setGrowthText] = useState("");
  const[yearText, setYearText] = useState("");
  const[resultText, setResultText] = useState("");
  const calculate = useCallback(() => {
    let total = Number(initialText);
    for (let i = 0; i < Number(yearText); i++) {
      total += Number(yearlyText) + (total + Number(yearlyText)) * Number(growthText) / 100;
    }
    setResultText(total);
  });
  return (
    <div>
      {resultText !== "" ? 
      <h1>${resultText.toFixed(2)}</h1> 
      : null}
      <Input label="Initial Amount" text={initialText} handleChange={setInitialText}></Input>
      <Input label="Yearly Contribution" text={yearlyText} handleChange={setYearlyText}></Input>
      <Input label="Annual Growth Percentage" text={growthText} handleChange={setGrowthText}></Input>
      <Input label="Number of Years" text={yearText} handleChange={setYearText}></Input>
      <button onClick={() => calculate()}>Calculate Growth</button>
    </div>
  );
}

export default App;
