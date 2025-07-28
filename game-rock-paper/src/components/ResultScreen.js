import './ResultScreen.css'
import Colors from './Colors.js'
import { use, useEffect,useState } from 'react'
import rules from './Rules.js'

function ResultScreen({playerChoice, playAgain,onResult }) {

 const [computerChoise,setComputerChoise] = useState(null)
 const [showResult, setShowResult]= useState(false)


 useEffect(()=>{
    const choise = Object.keys(Colors)
    const time = setTimeout(()=>{
        setComputerChoise(choise[Math.floor(Math.random()*choise.length)])
    },500)
    return()=> clearTimeout(time)
 },[])

 useEffect(()=>{
    if (computerChoise) {
        const timeout = setTimeout(()=>{
         setShowResult(true)
        },1000)
        return ()=> clearTimeout(timeout)
    }
 },[computerChoise])

    const result= computerChoise? rules(playerChoice,computerChoise) : null
    useEffect(()=>{
        if (showResult) {
            const result = rules(playerChoice,computerChoise)
            onResult(result)
        }
    },[showResult])

    return(
        <section className="result_screen">
            <div className='picked' id='pick_player'>
                <button className={result === "player_wins"? "win" : ""} style={{
                    backgroundImage: Colors[playerChoice].gradient,
                    boxShadow: Colors[playerChoice].boxShadow,
                    }}>
                <img src={`/images/rules/${playerChoice}`}/>
                </button>
                <p>You picked</p>
            </div>           
            <div className='picked' id='pick_house'>
            { 
            computerChoise? (
                <button className={result === "house_wins"? "win" : ""} style={{
                    backgroundImage: Colors[computerChoise].gradient,
                    boxShadow: Colors[computerChoise].boxShadow}}>
                    <img src={`/images/rules/${computerChoise}`}/>
                </button>
                )
            :
            (
                
                <div className='div_circle'>
                    <div className='circle'></div>
                </div>
            
            )
        }
            <p>the house picked</p>
                
            </div>
            <div className='result' style={{display: showResult ? 'flex':'none'}}>
                 { 
                 result &&(
                 <>
                 <p id='result_p'>{result === "draw" ? "Draw"
                 : result === "player_wins" ? "You Win"
                 : "You Lose"}</p>
                 <button id='play_again' onClick={playAgain}>play again</button>
                 </>
                 )} 
            </div>
        </section>
    )
}export default ResultScreen

