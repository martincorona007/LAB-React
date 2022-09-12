
import React, { useEffect, useState } from 'react';
function App() {
  const [change,setChange] = useState(0);
  function hanlderChanger(){
    setChange(1)
  }
  function handlerChangerFalse(){
    setChange(0)
  }
  let count = 0;
  const setCount = ()=> {
    count++;
    console.log(count);
  }
  useEffect(()=>{
    console.log("Use effect activated");
  },[change])
  return (
    <div>
      <label>{count}</label>
      <button onClick={setCount}>{count}</button>
      <button onClick={hanlderChanger}>Adding</button>
      <button onClick={handlerChangerFalse}>Removing</button>
      {
        change ? <h1>Hello G</h1> : <h1>Hello D</h1>
      }
    </div>
  );
  
}

export default App;
