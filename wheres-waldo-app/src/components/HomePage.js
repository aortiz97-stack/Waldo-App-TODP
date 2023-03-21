import waldo from '../images/waldo.png';
import odlaw from '../images/odlaw.png';
import wenda from '../images/wenda.png';
import wizard from '../images/wizard-white-beard.png';
import woof from '../images/woof.png';

const HomePage = () => {
    return (
      <div id="home-page">
        <h1>Where's Waldo?</h1>
        <p>See if you can find all of the characters in time!</p>
        <div id="profile-images">
            <div className="profile-image">
                <img src={waldo} alt="Waldo"/>
                <p>Waldo</p>
            </div>
            <div className="profile-image">
                <img src={odlaw} alt="Odlaw"/>
                <p>Odlaw</p>
            </div>
            <div className="profile-image">
                <img src={wenda} alt="Wenda"/>
                <p>Wenda</p>
            </div>
            <div className="profile-image">
                <img src={wizard} alt="Wizard White Beard" />
                <p>Wizard White Beard</p>
            </div>
            <div className="profile-image" id="woof-profile-image-container">
                <img src={woof} alt="Woof the dog" id="woof" />
                <p>Woof</p>
            </div>
        </div>
        <button id="start">Start</button>
        <button id="scoreboard">ScoreBoard</button>
      </div>
    );
  }
  
  export default HomePage;