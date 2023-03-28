import {useEffect, useRef} from 'react';
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore';

const ScoreBoardMenu = ({finalHour, finalMinute, finalSecond, setHasEnded, setSecond, setMinute, setHour}) => {
    const app = useRef(undefined);
    const finalTime = useRef(`${finalHour}:${finalMinute}:${finalSecond}`);
    
    useEffect(()=>{
        finalTime.current = `${finalHour}:${finalMinute}:${finalSecond}`;
    }, [finalHour, finalMinute, finalSecond]);
    useEffect(() => {
        const initiateApp = () => {
            const firebaseConfig = {
                apiKey: "AIzaSyDlb_1uZk05Lip9qVd4pMLhAoace1wOekM",
                authDomain: "where-s-waldo-ab5ff.firebaseapp.com",
                projectId: "where-s-waldo-ab5ff",
                storageBucket: "where-s-waldo-ab5ff.appspot.com",
                messagingSenderId: "132957821806",
                appId: "1:132957821806:web:47eaf0d1a5b6fc4ab6bf7f",
                measurementId: "G-YQP00DXRB6"
            };
            app.current = initializeApp(firebaseConfig);
        };
    
        // Saves a new message to Cloud Firestore.
        const saveScore = async (userName) => {
            // Add a new message entry to the Firebase database.
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
            // Check that the user entered a message and is signed in.
            if (userNameInput.value) {
              saveScore(userNameInput.value).then(() => {
                // Clear message text field and re-enable the SEND button.
                userNameInput.value = "";
              });
            }
        };

        initiateApp();
        const scoreboardMenu = document.querySelector('#scoreboard-menu');
        scoreboardMenu.addEventListener('click', (e) => {
            if (e.target.id === 'return-to-homepage') {
                const homePage = document.querySelector("#home-page");
                const scoreboardMenuContainer = document.querySelector('#scoreboard-menu-container');
                scoreboardMenuContainer.style.display = 'none';
                homePage.style.display = 'flex';
                setHasEnded(false);
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
                <p> You scored 1st place with a finishing time of {`${finalHour}:${finalMinute}:${finalSecond}`}</p>
                <div id="scoreboard-buttons-container">
                    <button type="submit" id="submit-name">Submit</button>
                    <button id="return-to-homepage">Return to HomePage</button>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoardMenu;