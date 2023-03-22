import waldo from '../images/waldo-profile.png';
import odlaw from '../images/odlaw.png';
import wenda from '../images/wenda.png';
import wizard from '../images/wizard-white-beard.png';
import woof from '../images/woof.png';
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
        mainGame.addEventListener('click', () => {
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
                    <img src={allCharacters}/>
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