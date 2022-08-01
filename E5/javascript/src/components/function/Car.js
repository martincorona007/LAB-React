import React, { useState } from "react"
function Car (props){
  const [applePay,setApplePay] = useState("");
  // setApplePay(props.isApplePay);
  // console.log("==> ",applePay);

  return(

    <div>

      <h1>Car function component</h1>
      <p>Name {props.name}</p>
      <p>Price {props.price}</p>
      <p>description {props.description}</p>
      <button onClick={()=> setApplePay(props.isApplePay)}></button>
      <p>ApplePay ? {applePay}</p>
    </div>
  )
}
export default Car;
