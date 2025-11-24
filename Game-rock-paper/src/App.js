import './App.css';
import RulesScreen from './components/RulesScreen';
import GameScreen from './components/GameScreen';
import { useEffect,useState } from 'react';
import ResultScreen from './components/ResultScreen';

function App() {

 const [showRules, setShowRules] = useState(true)
 const [screen, setScreen] = useState("game"); 
 const [playerChoice, setPlayerChoice] = useState(null);
 const [score, setScore] = useState(0)


function handlePlayerChoice(choice) {
  setPlayerChoice(choice);
  setScreen("result");
}
function playAgain() {
  setPlayerChoice(null);
  setScreen("game");
}
function handleResult(result) {
  if (result=== "player_wins") {
    setScore(prevScore => prevScore +1)
  }
  if (result ==="house_wins"){
    setScore(prevScore => (prevScore >0 ? prevScore -1 : 0))
  }
}


   return (
    <div className="App">
      <main>
       {showRules && <RulesScreen setShowRules={setShowRules}/>}
        <header>
          <img src='/images/rules/logo-bonus.svg'/>
          <div id='score'>
            <p className='score_tittle'>score</p>
            <p className='points'>{score}</p>
          </div>
        </header>
        {
          screen ==='game' &&(
            <GameScreen setPlayerChoice={handlePlayerChoice}/>
          )
          
        }
          {screen === "result" && (
            <ResultScreen 
              playerChoice={playerChoice} 
              playAgain={playAgain} 
              onResult={handleResult}
            />
          )}

        <div id='div_button_rules'>
          <button onClick={()=> setShowRules(true)} className='btn_rules'>Rules</button>
        </div>
    
      </main>
      <footer>Challenge by <a href="https://www.frontendmentor.io/profile/laisTalita" target='_blank'>Frontend Mentor</a>. Coded by <a href="https://portifolio-two-tawny-40.vercel.app/" target='_blank'>Lais Talita</a>. </footer>
    </div>
  );
}

export default App;
