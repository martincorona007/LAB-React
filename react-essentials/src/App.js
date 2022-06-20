import logo from './logo.svg';
import './App.css';
import backgroundImage from './photo-1590846406792-0adc7f938f1d.jpg';
function HeaderComponent(props){
  return (<header>{props.title}</header>);
}
function MainComponent(props){
  return (
    <section>
      <p>{props.text}</p>
      <ul style={{textAlign: "left"}}>
        
        {props.dishes.map( (dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
        <img src={backgroundImage} height={500} alt="chipotle"></img>
        
      </ul>
    </section>
    
  );
}
function FooterComponent(props){
  return (<footer><p>Copyright {props.year}</p></footer>)
}
const dishes = [
  'Macaroni',
  'Salomon',
  'Tacobell',
  'Made by mom'
];
//dishes.map( it => console.log(it));
const dishObjects = dishes.map((dish,i) => ({id:i,title: dish}));
function App() {
  return (
    <div className="App">
      <HeaderComponent title="Chata Restaurant"/>
      <MainComponent  dishes={dishObjects}/>
      <FooterComponent year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
