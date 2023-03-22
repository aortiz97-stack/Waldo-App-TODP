import waldo from '../images/waldo.png';
import odlaw from '../images/odlaw.png';
import wenda from '../images/wenda.png';
import wizard from '../images/wizard-white-beard.png';
import woof from '../images/woof.png';

const MainGame = () => {
    return (
        <div id="main-game" style={{display: 'none'}}>
            <div id="header">
                <div id="timer"><h1>00:00:00</h1></div>
                <div id="message-board"></div>
                <div id="counter-left"><h1>Characters Left: 5</h1></div>
            </div>
            <div id="game-body"></div>
        </div>
    );
};

export default MainGame;