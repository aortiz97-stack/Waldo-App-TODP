import {useEffect} from 'react';
const ScoreBoard = ({app, setSecond, setMinute, setHour, setFormattedSecond, setFormattedMinute, setFormattedHour, setHasEnded}) => {
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
    }, [])
    return(
        <div id="scoreboard-container" style={{display: 'none'}}>
            <div id="scoreboard-panel">
                <h1>ScoreBoard</h1>
                <div id="scores-displayed"></div>
                <button id="scores-to-home-button">Return to HomePage</button>
            </div>
        </div>
    );
};

export default ScoreBoard;