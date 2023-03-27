import {useEffect} from 'react';

const ScoreBoardMenu = ({finalHour, finalMinute, finalSecond, setHasEnded, setSecond, setMinute, setHour}) => {
    useEffect(() => {
        const scoreboardMenu = document.querySelector('#scoreboard-menu');
        scoreboardMenu.addEventListener('click', (e) => {
            if (e.target.id === 'return-to-homepage') {
                const homePage = document.querySelector("#home-page");
                const scoreboardMenuContainer = document.querySelector('#scoreboard-menu-container');
                scoreboardMenuContainer.style.display = 'none';
                homePage.style.display = 'flex';
                setHasEnded(false);
                setSecond(0);
                setMinute(0);
                setHour(0);
            }
        });
    }, []);
    return(
        <div id="scoreboard-menu-container" style={{display: 'none'}}>
            <div id="scoreboard-menu">
                <p>Thank you for playing! Add your name to be added to the scoreboard</p>
                <label htmlFor="username-input"><input id="username-input" /></label>
                <p> You scored 1st place with a finishing time of {`${finalHour}:${finalMinute}:${finalSecond}`}</p>
                <div id="scoreboard-buttons-container">
                    <button type="submit" id="submit-name">Submit</button>
                    <button id="return-to-homepage">Return to HomePage</button>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoardMenu;