import HomePage from './components/HomePage';
import MainGame from './components/MainGame';
import ScoreBoardMenu from './components/ScoreBoardMenu';
import './App.css';
import {useState, useEffect} from 'react';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const [finalHour, setFinalHour] = useState(0);
  const [finalMinute, setFinalMinute] = useState(0);
  const [finalSecond, setFinalSecond] = useState(0);



  return (
    <div id="app-container">
      <HomePage setHasStarted={(e) => setHasStarted(e)} />
      <MainGame hasStarted={hasStarted} setHasStarted={(e) => setHasStarted(e)} hasEnded={hasEnded} setHasEnded={(e) => setHasEnded(e)} setFinalHour={(e)=>setFinalHour(e)} setFinalMinute={(e)=>setFinalMinute(e)} setFinalSecond={(e)=>setFinalSecond(e)} />
      <ScoreBoardMenu />
    </div>
  );
}

export default App;
