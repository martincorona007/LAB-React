import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';

function App(){
  return ( 
    <div> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}
// function App({login}) {
//   //1. the state value or state variable 
//   //2. a function to update the state
//   const [data,setData] = useState(null)
//   useEffect(()=>{
//     fetch(`https://api.github.com/users/${login}`)
//     .then((response) => response.json())
//     .then(setData);
//   },[]);
//   if(data){
//     return <div>{JSON.stringify(data)}</div>
//   }
//   return <div>No user Available</div>
// }

export default App;
