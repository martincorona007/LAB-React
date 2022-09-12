import React, { useEffect, useMemo, useState } from "react";

function A(){
  const [number,setNumber] = useState(0);
  const [dark,setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor : dark ? 'black' : 'white',
    color: dark ? 'white': 'black'
  }
  // const doubleNumber = useMemo(()=>{
  //   return slowFunction(number);
  // },[number])
  
  // const themeStyles = useMemo(()=> {
  //   return {
  //     backgroundColor : dark ? 'black' : 'white',
  //     color: dark ? 'white': 'black'
  //   }
  // },[dark])

  // useEffect(()=>{
  //   console.log("Theme changed");

  // },[themeStyles])
  return(
    <> 
    <h1>useMemo</h1>
    <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
    <button onClick={()=> setDark(prevDark => !prevDark)}>Change theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
  
} 
function slowFunction(num){
  console.log('calling slow functions')
  for(let i = 0; i< 10000; i++){
  }
  return num * 2;
}
export default A;