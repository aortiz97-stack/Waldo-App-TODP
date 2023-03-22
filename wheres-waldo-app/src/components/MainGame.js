import wheresWaldo from '../images/wheres-waldo.jpeg';
import allCharacters from '../images/all-characters.png';
import {useEffect, useState} from 'react';


const MainGame = ({hasStarted}) => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [formattedHour, setFormattedHour] = useState('00');
    const [formattedMinute, setFormattedMinute] = useState('00');
    const [formattedSecond, setFormattedSecond] = useState('00');

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
        const mainGame = document.querySelector("#main-game");
        const gameBody = document.querySelector('#game-body');
        mainGame.addEventListener('click', (e) => {
          const potentialCharacterMenu = document.querySelector('#character-menu');
          if (e.target.id === 'waldo-game-img') {
            if (potentialCharacterMenu !== null) {
                mainGame.removeChild(potentialCharacterMenu);
            }
            const characterMenu = document.createElement('div');
            characterMenu.id = 'character-menu';
            characterMenu.innerHTML = "tHIS IS A MENU";
            characterMenu.style.left = `${e.clientX}px`;
            characterMenu.style.top = `${e.clientY}px`;
            mainGame.appendChild(characterMenu);
          } else if (potentialCharacterMenu !== null) {
            mainGame.removeChild(potentialCharacterMenu);
          }
        });
    },
    []);

    useEffect(() => {
        if (hasStarted) {
            setTimeout(incrementTime, 1000);
        }
    }, [hour, minute, second, hasStarted])

    return (
        <div id="main-game" style={{display: 'none'}}>
            <div id="header">
                <div id="header-profile-images">
                    <img src={allCharacters} alt="profile pictures of Waldo, Woof, Wenda, Wizard, and Odlaw in that order"/>
                </div>
                <div id="timer"><h1>{formattedHour}:{formattedMinute}:{formattedSecond}</h1></div>
                <div id="counter-left"><h2>Characters Left: 5</h2></div>
            </div>
            <div id="game-body">
                <img src={wheresWaldo} alt="where's waldo scene" id="waldo-game-img"/>
            </div>
        </div>
    );
};

export default MainGame;