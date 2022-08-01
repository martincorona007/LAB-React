import React from "react"
type AppProps = {// the properties needs to be as in the parent component
  //<Car name="lamborghini" price={5000} description="expensive to maintain"/>
  name: string;
  price: number;
  description: string;
}
function Car (props: AppProps){
  return(
    <div>
      <h1>Car function component</h1>
      <p>Name {props.name}</p>
      <p>Price {props.price}</p>
      <p>Description {props.description}</p>
    </div>
  )
}
export default Car;