import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
//ReactDOM.render(<App/>,document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
function AppTwo(){
  return <h1>App two</h1>;
}
root.render(
  // React.createElement("h1",{style: {color: "blue"}},"Hey dude"),//what we want to create
  // React.createElement("h2",{style: {color: "blue"}},"Chaning colors"),
  // <ul>
  //   <li>d1</li>
  //   <li>d2</li>
  //   <li>d3</li>
  // </ul>,
  <div>
    <AppTwo/>,
    <App/>,
  </div>
  //document.getElementById("root")//where to put it
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
// ReactDOM.render(
//   React.createElement("h1",{style: {color: "blue"}},"Hey que onda"),
//   React.createElement("h2",null,"rendeing h2"),
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
