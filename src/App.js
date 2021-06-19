import Greeting from './components/Greeting';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="General-container">
      <NavBar/>
      <Greeting title={"Welcome to Carlotitas"} subtitle={"Bakery"}/>
      </div>
    </div>
  );
}

export default App;
