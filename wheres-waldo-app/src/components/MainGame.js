import gobblingGluttons from '../images/gobblinggluttons.jpeg';
import allCharacters from '../images/all-characters.png';
import {useEffect, useState, useRef} from 'react';

const MainGame = ({hasStarted, setHasStarted, hasEnded, setHasEnded, setFinalHour, setFinalMinute, setFinalSecond, hour, setHour, minute, setMinute, second, setSecond}) => {
    const [formattedHour, setFormattedHour] = useState('00');
    const [formattedMinute, setFormattedMinute] = useState('00');
    const [formattedSecond, setFormattedSecond] = useState('00');
    let alreadyClicked = useRef([]);

    const formatTime = () => {
        if ((second+1) % 60 < 10) {
          setFormattedSecond(`0${(second+1)%60}`);
        } else {
            setFormattedSecond(`${(second+1)%60}`);
        }

        if (second === 59) {
            if (((minute+1) % 60) < 10) {
                setFormattedMinute(`0${(minute+1)%60}`);
            } else {
                setFormattedMinute(`${(minute+1)%60}`);
            }
        }

        if (minute === 59) {
            if ((hour+1) % 60 < 10) {
                setFormattedHour(`0${(hour+1)}`);
            } else {
                setFormattedHour(`${(hour+1)}`);
            }  
        }
    };

    const incrementTime = () => {
        setSecond((second + 1)% 60);
        if (second === 59) {
            setMinute(((minute + 1)%60));
        }
        if (minute === 59) {
            setHour(hour + 1);
        }
        formatTime();
    };

    useEffect(() => {

        const handleSuccessfulChoiceClickHelper = (name) => {
            let foundMessage = 'Congratulations! You found character!';
            const timer = document.querySelector('#timer');
            alreadyClicked.current = (alreadyClicked.current.concat([name]));
            foundMessage = foundMessage.replace('character', name);
            const gameMessage = document.createElement('div');
            gameMessage.classList.add('fade-in-text');
            gameMessage.innerHTML = foundMessage;
            timer.appendChild(gameMessage);
            setTimeout(() => timer.removeChild(gameMessage), 5000);
        };
        const handleFailureChoiceClickHelper = () => {
            const message = 'Try again';
            const timer = document.querySelector('#timer');
            const gameMessage = document.createElement('div');
            gameMessage.classList.add('fade-in-text');
            gameMessage.classList.add('failure')
            gameMessage.innerHTML = message;
            timer.appendChild(gameMessage);
            setTimeout(() => timer.removeChild(gameMessage), 5000);
        };
    
        const handleChoiceClick = (e1, e2) => {
            if (e1.target.className === 'character-button') {
                if (e1.target.id === 'Odlaw-button' && e2.target.id === 'Odlaw-choice') {
                    handleSuccessfulChoiceClickHelper('Odlaw');
                } else if (e1.target.id === 'Waldo-button' && e2.target.id === 'Waldo-choice') {
                    handleSuccessfulChoiceClickHelper('Waldo');  
                } else if (e1.target.id === 'Wenda-button' && e2.target.id === 'Wenda-choice') {
                    handleSuccessfulChoiceClickHelper('Wenda');
                } else if (e1.target.id === 'Wizard-button' && e2.target.id === 'Wizard-choice') {
                    handleSuccessfulChoiceClickHelper('Wizard');
                } else if (e1.target.id === 'Woof-button' && e2.target.id === 'Woof-choice') {
                    handleSuccessfulChoiceClickHelper('Woof');
                } else  {
                    handleFailureChoiceClickHelper();
                }
            }
            else {
                handleFailureChoiceClickHelper(); 
            }
        };

        const mainGame = document.querySelector("#main-game");
        mainGame.addEventListener('click', (e) => {
          const potentialCharacterMenu = document.querySelector('#character-menu');
          if (e.target.id === 'waldo-game-img' || e.target.className === "character-button") {
            if (potentialCharacterMenu !== null) {
                potentialCharacterMenu.removeEventListener('click', (e2) => handleChoiceClick(e, e2));
                mainGame.removeChild(potentialCharacterMenu);
            }
            const characterMenu = document.createElement('div');
            characterMenu.id = 'character-menu';

            const names = ['Waldo', 'Woof', 'Wenda', 'Wizard', 'Odlaw'];
            for (let i = 0; i < names.length; i += 1) {
                if (!alreadyClicked.current.includes(names[i])) {
                    const a = document.createElement('a');
                    a.href = '#'
                    a.innerHTML = names[i];
                    a.id = `${names[i]}-choice`;
                    characterMenu.appendChild(a);
                }
            }
            characterMenu.style.left = `${e.clientX}px`;
            characterMenu.style.top = `${e.clientY}px`;
            if (alreadyClicked.current.length < 5) {
                mainGame.appendChild(characterMenu);
                characterMenu.addEventListener('click', (e2) => handleChoiceClick(e, e2));
            }
          } else if (potentialCharacterMenu !== null && e.target.id !== '') {
            potentialCharacterMenu.removeEventListener('click', (e2) => handleChoiceClick(e, e2));
            mainGame.removeChild(potentialCharacterMenu);
          }
        });
    }, []);

    useEffect(()=>{
        if (hasStarted && !hasEnded) {
            console.log(`tick`);
            if (alreadyClicked.current.length >= 5) {
                setHasStarted(false);
                setHasEnded(true);
                setFinalHour(formattedHour);
                setFinalMinute(formattedMinute);
                setFinalSecond(formattedSecond);     
            }
        }
    });

    useEffect(() => {
        if (hasStarted && !hasEnded) {
            setTimeout(incrementTime, 1000);
        }
    }, [hour, minute, second, hasStarted, hasEnded]);


    useEffect(() => {
        if (hasEnded && !hasStarted) {
            const mainGame = document.querySelector('#main-game');
            const scoreBoardMenuContainer = document.querySelector('#scoreboard-menu-container');
            mainGame.style.display = 'none';
            scoreBoardMenuContainer.style.display = 'flex';
            setHour(0);
            setMinute(0);
            setSecond(0);
            alreadyClicked.current = [];
        }
    }, [hasEnded]);

    return (
        <div id="main-game" style={{display: 'none'}}>
            <div id="header">
                <div id="header-profile-images">
                    <img src={allCharacters} alt="profile pictures of Waldo, Woof, Wenda, Wizard, and Odlaw in that order"/>
                </div>
                <div id="timer"><h1>{formattedHour}:{formattedMinute}:{formattedSecond}</h1></div>
                <div id="counter-left"><h2>Characters Left: {5-alreadyClicked.current.length}</h2></div>
            </div>
            <div id="game-body">
                <img src={gobblingGluttons} alt="where's waldo scene" id="waldo-game-img"/>
                <button id="Odlaw-button" className="character-button"></button>
                <button id="Waldo-button" className="character-button"></button>
                <button id="Wenda-button" className="character-button"></button>
                <button id="Wizard-button" className="character-button"></button>
                <button id="Woof-button" className="character-button"></button>
            </div>
        </div>
    );
};

export default MainGame;