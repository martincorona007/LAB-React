import logo from './logo.svg';
import './App.css';
function RegularComponent(){
  return <h1>RegularComponent</h1>
}
function SecretComponent(){
  return <h1>SecretComponent</h1>
}
function App(props) {
  return(
    <>
    {props.available ? <RegularComponent/> : <SecretComponent/>}
    </>
  );
  // if(props.available){
  //   return <RegularComponent/>;
  // }else{
  //   return <SecretComponent/>;
  // }
}

export default App;
