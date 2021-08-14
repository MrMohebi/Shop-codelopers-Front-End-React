import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
    let [result, setResult] = useState(0);

    let [amount, setAmount] = useState(0);
    let [from, setFrom] = useState({target:{value:units[0].factor}});
    let [to, setTo] = useState({target:{value:units[0].factor}});

    let handleConvert = () =>{
        if(from.hasOwnProperty("target") && to.hasOwnProperty("target")){
            if(amount.hasOwnProperty("target")){
                if(amount.target.value > 0){
                    setResult((amount.target.value * from.target.value)/to.target.value)
                }else {
                    setResult(0)
                }
            }else{
                setResult(0)
            }
        }else {
            setResult(0);
        }
    }


  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
          <Input label={"Amount"} onChange={setAmount} />
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
            <Select label={"From"} onChange={setFrom} items={units}/>
            <Select label={"To"} onChange={setTo} items={units}/>
          <button onClick={handleConvert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
