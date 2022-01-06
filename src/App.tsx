import React, { useState } from 'react';
import BoxLabel from './component/BoxLabel'
import * as Constant from './common/constant'
import './App.css';

export const multipleByTwo = (val: string) => {
  return val.split(',').map((x : string) => { return Number(x) * 2; });
}

const App = () => {

  const [output, setOutput] = useState<string>();
  const [input, setInput] = useState<string>();
  const onChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      const re = /^[0-9.,\b]+$/;  
      if (event.target.value === '' || re.test(event.target.value)) {
        
        setInput(event.target.value);
        const result  =  multipleByTwo(event.target.value)
        setOutput(result.toString());
      }

    };

  return (
    
  <div className="flex-container">
      <div className="flex-item h-2-5 flex flex-col justify-content-center align-items-center">
          <div className="text-center color-gray"> 
              <h1>{Constant.CodeChallenge}</h1> 
          </div>  

          <div className="text-center color-gray">
            <h3>{Constant.Pleasetry}</h3> 
          </div> 
      </div>

      <div className="flex-item h-3-5 flex justify-content-center ">
      <BoxLabel 
         title="Input" 
         label="Array" 
         textBox={
                  <input className='mt-20' 
                  type="text" 
                  data-test="input" 
                  value={input}  onChange={onChange}>
                   
                  </input>}></BoxLabel>

      <BoxLabel 
         title="Output" 
         label="Double" 
         textBox={
                  <input 
                  className='mt-20' 
                  type="text" 
                  data-test="output" 
                  value={output} ></input>}></BoxLabel>
      </div>
  
</div>

  );
} 

export default App;
