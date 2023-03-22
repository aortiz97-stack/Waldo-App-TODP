import waldo from '../images/waldo-profile.png';
import odlaw from '../images/odlaw.png';
import wenda from '../images/wenda.png';
import wizard from '../images/wizard-white-beard.png';
import woof from '../images/woof.png';
import wheresWaldo from '../images/wheres-waldo.jpeg';
import allCharacters from '../images/all-characters.png';


const MainGame = () => {
    return (
        <div id="main-game" style={{display: 'none'}}>
            <div id="header">
                <div id="header-profile-images">
                    <img src={allCharacters}/>
                </div>
                <div id="timer"><h1>00:00:00</h1></div>
                <div id="counter-left"><h2>Characters Left: 5</h2></div>
            </div>
            <div id="game-body">
                <img src={wheresWaldo} id="waldo-game-img"/>
            </div>
        </div>
    );
};

export default MainGame;