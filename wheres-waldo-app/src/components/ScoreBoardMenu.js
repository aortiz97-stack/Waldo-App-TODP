import {useEffect, useRef} from 'react';
import {getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore';

const ScoreBoardMenu = ({finalHour, finalMinute, finalSecond, setHasEnded, setSecond, setMinute, setHour, setFormattedHour, setFormattedMinute, setFormattedSecond}) => {
    const finalTime = useRef(`${finalHour}:${finalMinute}:${finalSecond}`);
    
    useEffect(()=>{
        finalTime.current = `${finalHour}:${finalMinute}:${finalSecond}`;
    }, [finalHour, finalMinute, finalSecond]);
    useEffect(() => {    
        const saveScore = async (userName) => {
            try {
            await addDoc(collection(getFirestore(), 'scores'), {
                name: userName,
                time: finalTime.current,
                timestamp: serverTimestamp()
            });
            }
            catch(error) {
            console.error('Error writing new user to Firebase Database', error);
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const userNameInput = document.querySelector('#username-input');
            if (userNameInput.value) {
              saveScore(userNameInput.value).then(() => {
                userNameInput.value = "";
              });
            }

            const scoreBoardMenuContainer = document.querySelector('#scoreboard-menu-container');
            const scoreBoard = document.querySelector('#scoreboard-container');
            console.log(`scoreboaaaard ${scoreBoard}`)

            scoreBoard.style.display = 'flex';
            scoreBoardMenuContainer.style.display = 'none';

        };

        const scoreboardMenu = document.querySelector('#scoreboard-menu');
        scoreboardMenu.addEventListener('click', (e) => {
            if (e.target.id === 'return-to-homepage') {
                const homePage = document.querySelector("#home-page");
                const scoreboardMenuContainer = document.querySelector('#scoreboard-menu-container');
                scoreboardMenuContainer.style.display = 'none';
                homePage.style.display = 'flex';
                setHasEnded(false);
                setFormattedSecond('00');
                setFormattedMinute('00');
                setFormattedHour('00');
                setSecond(0);
                setMinute(0);
                setHour(0);
            } if (e.target.id ==='submit-name') {
                console.log(`final seconds ${finalSecond}`);
                handleSubmit(e);
            }
        });
    }, []);

    return(
        <div id="scoreboard-menu-container" style={{display: 'none'}}>
            <div id="scoreboard-menu">
                <p>Thank you for playing! Add your name to be added to the scoreboard</p>
                <label htmlFor="username-input"><input id="username-input" /></label>
                <p> You had a finishing time of {`${finalHour}:${finalMinute}:${finalSecond}`}</p>
                <div id="scoreboard-buttons-container">
                    <button type="submit" id="submit-name">Submit</button>
                    <button id="return-to-homepage">Return to HomePage</button>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoardMenu;