import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
function App() {
   useEffect(() => {
    alert("Hello world")
  }, []);
  return (
    <div className="App">
      hello wworld
    </div>
  );
}

export default App;
