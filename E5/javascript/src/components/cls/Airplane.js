import React,{Component} from "react";

class Airplane extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <h2>Class component</h2>
        <p>Name: {this.props.name}</p>
        <p>Price: {this.props.price}</p>
        <p>Description: {this.props.description}</p>
      </div>
    )
  }
}
export default Airplane;