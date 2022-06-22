import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
function App({login}) {
  //1. the state value or state variable 
  //2. a function to update the state
  const [data,setData] = useState(null)
  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData);
  },[]);
  if(data){
    return <div>{JSON.stringify(data)}</div>
  }
  return <div>No user Available</div>
//}

  // return (
  //   <div className="App">
      
  //   </div>
  // );
}

export default App;
