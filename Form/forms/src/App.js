import logo from './logo.svg';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from './component/form-E1/Form';
import ControllerComponent from './component/controlled/ControllerComponent'; 
function App() {
  
  return (
    <div className='container'>
      <Form/>
      <ControllerComponent/>
    </div>
  );
}

export default App;
