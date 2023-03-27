const ScoreBoardMenu = ({finalHour, finalMinute, finalSecond}) => {
    return(
        <div id="scoreboard-menu-container" style={{display: 'none'}}>
            <div id="scoreboard-menu">
                <p>Thanks for playing! Add your name to be added to the scoreboard</p>
                <label htmlFor="username-input"><input id="username-input" /></label>
                <p> You scored 1st place with a finishing time of {`${finalHour}:${finalMinute}:${finalSecond}`}</p>
                <div id="scoreboard-buttons-container">
                    <button type="submit">Submit</button>
                    <button>Return to HomePage</button>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoardMenu;