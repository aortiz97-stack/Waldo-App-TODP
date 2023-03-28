import {useEffect} from 'react';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
  } from 'firebase/firestore';
const ScoreBoard = ({app, setSecond, setMinute, setHour, setFormattedSecond, setFormattedMinute, setFormattedHour, setHasEnded}) => {

    function loadScores() {
        const scoresQuery = query(collection(getFirestore(), 'scores'), orderBy('time', 'asc'));
        return scoresQuery;
        
        // Start listening to the query.
        /*onSnapshot(recentMessagesQuery, function(snapshot) {
          snapshot.docChanges().forEach(function(change) {
            if (change.type === 'removed') {
              deleteMessage(change.doc.id);
            } else {
              var message = change.doc.data();
              displayMessage(change.doc.id, message.timestamp, message.name,
                            message.text, message.profilePicUrl, message.imageUrl);
            }
          });
        });*/
      }

    useEffect(()=>{
      const homePage = document.querySelector('#home-page');
      const scoreBoardContainer = document.querySelector('#scoreboard-container');

      scoreBoardContainer.addEventListener('click', () => {
        homePage.style.display = 'flex';
        scoreBoardContainer.style.display = 'none';
        setHasEnded(false);
        setSecond(0);
        setMinute(0);
        setHour(0);
        setFormattedSecond('00');
        setFormattedMinute('00');
        setFormattedHour('00');

        console.log(JSON.stringify(loadScores()))
      });
    }, [])
    return(
        <div id="scoreboard-container" style={{display: 'none'}}>
            <div id="scoreboard-panel">
                <h1>ScoreBoard</h1>
                <div id="scores-displayed"></div>
                <button id="scores-to-home-button">Return to HomePage</button>
            </div>
        </div>
    );
};

export default ScoreBoard;