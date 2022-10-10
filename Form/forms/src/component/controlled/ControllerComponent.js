import React, { useState } from "react";
export default function ControllerComponent(){ 
  const [value,setValue] = useState('Hello React'); 
  const handleChange = event =>  setValue(event.target.value);
  return(
    <div>
      <h1>controllerComponent</h1>
      <label>
        My uncontrolled Input: <input type="text"/>
      </label>
      <label>
        My still uncontrolled Input: <input type="text" onChange={handleChange}/>
      </label>
      <label>
        My controlled Input: <input type="text" value={value} onChange={handleChange}/>
      </label>
      <p>Output: <strong>{value}</strong></p>
      
    </div>
  )
}