import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Home extends Component{
  render(){
    return (
      <div>
        class Home Component
         <input></input>
      <Link to="about">
      <button>Go to about</button>
      </Link>
      
      </div>
     
    );
  }
}
export default Home;