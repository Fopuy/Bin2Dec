import { useState } from 'react'
import './App.css'

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState(0);

  function handleSubmit(){
    let binaryNum = parseInt(binary);
    let binaryString = binaryNum.toString();
    let decimalValue = 0;
    for(let i = 0; i < binaryString.length; i++){
      if(binaryString[i] === '0'){
        continue;
      }else{
        decimalValue+=(Math.pow(2, binaryString.length - 1 - i));
      }
   
    }
    setDecimal(decimalValue);
  }

  return (
    <>
    <div className="container">
      <h1>Binary to Decimal Converter</h1>
      <input 
        type="text"
        value={binary}
        onChange={e=>{
          const value = e.target.value;
          if(!/^[01]*$/.test(value)){
            return;
          }else setBinary(value);
        }} />
      <button onClick={e=>{
        if(binary===''){
          alert("Input a binary number")}
          else {
            handleSubmit();
          }}}>Submit</button>
      <p>Decimal: {decimal}</p>
    </div>
    </>
  )
}

export default App
