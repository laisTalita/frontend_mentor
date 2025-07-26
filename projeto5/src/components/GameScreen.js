import './GameScreen.css'
import { useEffect, useState } from 'react'
import Colors from './Colors.js'
function GameScreen({setPlayerChoice}){
    return(
        <section id="game_screen">
            {
              Object.keys(Colors).map(choice =>(
                <button key={choice} 
                style={{
                  backgroundImage:Colors[choice].gradient,
                  boxShadow:Colors[choice].boxShadow
                }}
                 onClick={()=> setPlayerChoice(choice)                }>
                <img src={`/images/rules/${choice}`}/>
                </button>
              ))
            }
        </section>
    )
}export default GameScreen