import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './components/function/Car';
import Airplane from './components/cls/Airplane';

function App() {
  return (
    <div>
      {/* <Car name="lamborghini" price={5000} description="expensive to maintain"/>
      <br/>
      <Car name="McLaren" price={15000} description="cheap to maintain"/>
     */}
     <Airplane name="lamborghini" price={5000} description="expensive to maintain"/>
     <br/>
     <Airplane name="McLaren" price={15000} description="cheap to maintain"/>

    </div>


  );
}

export default App;
