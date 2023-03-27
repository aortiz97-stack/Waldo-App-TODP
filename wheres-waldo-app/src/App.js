import HomePage from './components/HomePage';
import MainGame from './components/MainGame';
import ScoreBoardMenu from './components/ScoreBoardMenu';
import './App.css';
import {useState} from 'react';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);


  return (
    <div id="app-container">
      <HomePage setHasStarted={(e) => setHasStarted(e)} />
      <MainGame hasStarted={hasStarted} setHasStarted={(e) => setHasStarted(e)} hasEnded={hasEnded} setHasEnded={(e) => setHasEnded(e)} />
      <ScoreBoardMenu />
    </div>
  );
}

export default App;
