import {useEffect} from 'react';
import {
    getFirestore,
    collection,
    query,
    orderBy,
    onSnapshot,
  } from 'firebase/firestore';
const ScoreBoard = ({app, setSecond, setMinute, setHour, setFormattedSecond, setFormattedMinute, setFormattedHour, setHasEnded}) => {

    useEffect(()=>{
        const createLiElement = (id, name, time) => {
            const li = document.createElement('li');
            li.key = id;
            li.id = id;
            li.innerHTML = `${name} ${time}`;
            return li;
        };
    
        const displayScore = (id, name, time) => {
            const li = document.getElementById(id) || createLiElement(id, name, time);
            const ol = document.querySelector('ol');
            ol.appendChild(li);
        };
        const loadScores = () => {
            const scoresQuery = query(collection(getFirestore(), 'scores'), orderBy('time', 'asc'));
            onSnapshot(scoresQuery, (snapshot) => {
              snapshot.docChanges().forEach((change) => {
                    const score = change.doc.data();
                    displayScore(change.doc.id, score.name, score.time);
              });
            });
        };
        loadScores();
    });
    
    
    

    useEffect(()=>{
      const homePage = document.querySelector('#home-page');
      const scoreBoardContainer = document.querySelector('#scoreboard-container');

      scoreBoardContainer.addEventListener('click', () => {
        homePage.style.display = 'flex';
        scoreBoardContainer.style.display = 'none';
        setHasEnded(false);
        setSecond(0);
        setMinute(0);
        setHour(0);
        setFormattedSecond('00');
        setFormattedMinute('00');
        setFormattedHour('00');
      });
    }, []);

    return(
        <div id="scoreboard-container" style={{display: 'none'}}>
            <div id="scoreboard-panel">
                <h1>ScoreBoard</h1>
                <div id="scores-displayed">
                    <ol id="scores-list"></ol>
                </div>
                <button id="scores-to-home-button">Return to HomePage</button>
            </div>
        </div>
    );
};

export default ScoreBoard;