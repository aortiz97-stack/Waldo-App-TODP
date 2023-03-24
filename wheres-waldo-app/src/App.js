import HomePage from './components/HomePage';
import MainGame from './components/MainGame';
import './App.css';
import {useState} from 'react';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);


  return (
    <div id="app-container">
      <HomePage setHasStarted={(e) => setHasStarted(e)} />
      <MainGame hasStarted={hasStarted} />
    </div>
  );
}

export default App;
