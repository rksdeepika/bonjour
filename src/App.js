import logo from './logo.svg';
import './App.css';
import SomeComponent123 from "./Components/SomeComponent123";
import ComponentSample from "./Components/ComponentSample1";
import photo from "./images/hpimage3.jpg"
import photo1 from "./images/hpimage2.jpg"
import ShowInput from "./Components/Input"


function App() {
  
 
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div class="row align-items-center">
      <div className="container-fluid col">
        <img src={photo} className="img-fluid" alt="logo" />
        </div>
        <div className="container-fluid col">
        <img src={photo1} className="img-fluid" alt="logo" />
        </div>
        </div>
        {/* <ShowInput/> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ShowInput/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SomeComponent123/>
        <ComponentSample/>
        
      </header>
    </div>
  );
}

export default App;
