import waldo from '../images/waldo.png';
import odlaw from '../images/odlaw.png';
import wenda from '../images/wenda.png';
import wizard from '../images/wizard-white-beard.png';
import woof from '../images/woof.png';
import {useEffect} from 'react';

const HomePage = ({setHasStarted}) => {
    useEffect(() => {
        const img = document.querySelector('#waldo-game-img');
        const startButton = document.querySelector('button#start');
        const homePage = document.querySelector('#home-page');
        const mainGame = document.querySelector('#main-game');

        startButton.addEventListener('click', () => {
            homePage.style.display = "none";
            mainGame.style.display = "flex";
            setHasStarted('true');
        });
    },
    []);
    return (
      <div id="home-page" style={{display: 'flex'}}>
        <div id="home-text">
            <h1>Where's Waldo?</h1>
            <p>See if you can find all of the characters as quickly as possible!</p>
        </div>
        <div id="profile-images">
            <div className="profile">
                <div className="profile-image-container"><img src={waldo} alt="Waldo"/></div>
                <p>Waldo</p>
            </div>
            <div className="profile">
                <div className="profile-image-container"><img src={odlaw} alt="Odlaw"/></div>
                <p>Odlaw</p>
            </div>
            <div className="profile">
                <div className="profile-image-container"><img src={wenda} alt="Wenda"/></div>
                <p>Wenda</p>
            </div>
            <div className="profile">
                <div className="profile-image-container"><img src={wizard} alt="Wizard White Beard" /></div>
                <p>Wizard White Beard</p>
            </div>
            <div className="profile">
                <div className="profile-image-container"><img src={woof} alt="Woof the dog" /></div>
                <p>Woof (only his tail appears!)</p>
            </div>
        </div>
        <div id="home-button-container">
            <button id="start">Start</button>
            <button id="scoreboard">ScoreBoard</button>
        </div>
      </div>
    );
  }
  
  export default HomePage;