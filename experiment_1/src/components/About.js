import {Link} from 'react-router-dom'
function About(){
  return(
    <div>
      <h1>About functional Component</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}
export default About;