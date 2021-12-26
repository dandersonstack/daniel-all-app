import './App.css';
import { NavBar } from './components/NavBar'
import CountClicks from "./components/button"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <body className="App-body">
        <div class = "desing">
          fuck my brain!
        </div>
       <p>
         A simple react app by Daniel and Alla
       </p>
       <CountClicks/>
      </body>
    </div>
  );
}

export default App;
