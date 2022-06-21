import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App(props) {
  //1. the state value or state variable 
  //2. a function to update the state
  //useState([]) takes anything
  const [emotion,emotionState] = useState("happy");

  

  return(
    <>
      <h1>Current emotion is {emotion}. </h1>
      <button onClick={()=> emotionState("ENGRY")}>
        Make engry
      </button>
      <button onClick={()=> emotionState("Entusiastic")}>
        Entusiastic
      </button>
    </>
  );
}

export default App;
