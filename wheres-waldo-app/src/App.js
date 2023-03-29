import HomePage from './components/HomePage';
import MainGame from './components/MainGame';
import ScoreBoardMenu from './components/ScoreBoardMenu';
import ScoreBoard from './components/ScoreBoard';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import {initializeApp} from 'firebase/app';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const [finalHour, setFinalHour] = useState('00');
  const [finalMinute, setFinalMinute] = useState('00');
  const [finalSecond, setFinalSecond] = useState('00');

  const [formattedHour, setFormattedHour] = useState('00');
  const [formattedMinute, setFormattedMinute] = useState('00');
  const [formattedSecond, setFormattedSecond] = useState('00');

  const app = useRef(undefined);

  useEffect(()=>{
    const firebaseConfig = {
      apiKey: "AIzaSyDlb_1uZk05Lip9qVd4pMLhAoace1wOekM",
      authDomain: "where-s-waldo-ab5ff.firebaseapp.com",
      projectId: "where-s-waldo-ab5ff",
      storageBucket: "where-s-waldo-ab5ff.appspot.com",
      messagingSenderId: "132957821806",
      appId: "1:132957821806:web:47eaf0d1a5b6fc4ab6bf7f",
      measurementId: "G-YQP00DXRB6"
    };
    app.current = initializeApp(firebaseConfig);
  }, []);



  return (
    <div id="app-container">
      <HomePage setHasStarted={(e) => setHasStarted(e)} />
      <MainGame hasStarted={hasStarted} setHasStarted={(e) => setHasStarted(e)} hasEnded={hasEnded} setHasEnded={(e) => setHasEnded(e)} setFinalHour={(e)=>setFinalHour(e)} setFinalMinute={(e)=>setFinalMinute(e)} setFinalSecond={(e)=>setFinalSecond(e)} hour={hour} setHour={(e)=>setHour(e)} minute={minute} setMinute={e=>setMinute(e)} second={second} setSecond={e=>setSecond(e)} setFormattedSecond={e=>setFormattedSecond(e)} setFormattedMinute={e=>setFormattedMinute(e)} setFormattedHour={e=>setFormattedHour(e)} formattedHour={formattedHour} formattedMinute={formattedMinute} formattedSecond={formattedSecond}/>
      <ScoreBoardMenu finalHour={finalHour} finalMinute={finalMinute} finalSecond={finalSecond} setHasEnded={(e)=>setHasEnded(e)} setHour={e=>setHour(e)} setMinute={e=>setMinute(e)} setSecond={e=>setSecond(e)} setFormattedHour={e=>setFormattedHour(e)} setFormattedMinute={e=>setFormattedMinute(e)} setFormattedSecond={e=>setFormattedSecond(e)} />
      <ScoreBoard app={app} setSecond={e=>setSecond(e)} setMinute={e=>setMinute(e)} setHour={e => setHour(e)} setFormattedSecond={e=>setFormattedHour(e)} setFormattedMinute={e=>setFormattedMinute(e)} setFormattedHour={e=>setFormattedHour(e)} setHasEnded={e=>setHasEnded(e)} />
    </div>
  );
}

export default App;
