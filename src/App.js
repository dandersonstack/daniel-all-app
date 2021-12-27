import './App.css';
import { NavBar } from './components/NavBar'
import { ClicksCounter } from './components/ClicksCounter'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <body className="App-body">
      <ClicksCounter/>
       <p>
         A simple react app by Daniel and Alla
       </p>
      </body>
    </div>
  );
}

export default App;
