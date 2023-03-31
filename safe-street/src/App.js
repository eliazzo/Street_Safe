import logo from "./logo.svg";
import "./App.css";
import response from "./data/response.json";
function App() {
  function getCrimes() {
    return response.map(function (item) {
      return item.location;
    });
  }

  // log to see results
  console.log(getCrimes());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
