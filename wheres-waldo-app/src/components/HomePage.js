import waldo from '../images/waldo.png';
import odlaw from '../images/odlaw.png';
import wenda from '../images/wenda.png';
import wizard from '../images/wizard-white-beard.png';
import woof from '../images/woof.png';
import {useEffect} from 'react';

const HomePage = () => {
    useEffect(() => {
        const startButton = document.querySelector('button#start');
        const homePage = document.querySelector('#home-page');
        const mainGame = document.querySelector('#main-game');

        startButton.addEventListener('click', () => {
            homePage.style.display = "none";
            mainGame.style.display = "flex";
        });
    },
    [])
    return (
      <div id="home-page" style={{display: 'flex'}}>
        <div id="home-text">
            <h1>Where's Waldo?</h1>
            <p>See if you can find all of the characters in time!</p>
        </div>
        <div id="profile-images">
            <div className="profile">
                <div className="profile-image-container"><img src={waldo} alt="Waldo"/></div>
       
            </div>
            <div className="profile">
                <div className="profile-image-container"><img src={odlaw} alt="Odlaw"/></div>
   
            </div>
            <div className="profile">
                <div className="profile-image-container"><img src={wenda} alt="Wenda"/></div>
       
            </div>
            <div className="profile">
                <div className="profile-image-container"><img src={wizard} alt="Wizard White Beard" /></div>
              
            </div>
            <div className="profile">
                <div className="profile-image-container"><img src={woof} alt="Woof the dog" /></div>
             
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