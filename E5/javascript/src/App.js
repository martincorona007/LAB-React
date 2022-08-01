import logo from './logo.svg';
import './App.css';
import Car from './components/function/Car';
import Airplane from './components/cls/Airplane';

function App() {
  return (
    <div>
    {/* function */}
    {/* <Car name="Lamborghini" price={60000} description="very expensive to mantain" isApplePay="yes"/>
    <br/>
    <Car name="Mercedez" price={50000} description="cheap to mantain" isApplePay="no"/>
    <br/> */}
    

    {/* clas */}
    <Airplane name="Lamborghini" price={60000} description="very expensive to mantain"/>
    <br/>
    <Airplane name="Lamborghini veneno" price={170000} description="very high expensive to mantain"/>
    </div>
  );
}

export default App;
