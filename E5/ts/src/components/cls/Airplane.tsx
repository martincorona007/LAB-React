import React,{Component} from "react";
type AppProps = {
  name: string;
  price: number;
  description: string;
}
class Airplane extends Component<AppProps>{
  
  render(){
    return(
      <div>
        <h1>Airplane class component</h1>
        <p>Name {this.props.name}</p>
      <p>Price {this.props.price}</p>
      <p>Description {this.props.description}</p>
      </div>
    )
  }
}
export default Airplane;