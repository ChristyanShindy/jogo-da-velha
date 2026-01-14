import { useState } from 'react'
import styles from './Game.module.css'
import GameOption from '../gameOption/GameOption'
import Icon from '../icon/Icon'
function Game () {

  const [currentPlayear, setCurrentPlayer] = useState(1)
  const [gameState, setGameState] = useState(Array(9).fill(0))

  const hadleClick = (pos) => {
    if(gameState[pos] === 0){
      let newGameState = [...gameState]
      newGameState[pos] = currentPlayear
      setCurrentPlayer(currentPlayear * -1)
      setGameState(newGameState)
    }
  }

  return (
    <div className={styles.gameContent}>
      <div className={styles.game}>
    {
      gameState.map((value, pos) => 
        <GameOption 
          key={`game-option-pos-${pos}`}
          status={value}
          onClick={()=> hadleClick(pos)}
        />)
    }
      </div> 
      <div className={styles.gameInfo}>
        <h4>
          Próximo a jogar:
        </h4>
        {
          currentPlayear === 1 && <Icon iconName="circle"/>
        }
        {
          currentPlayear === -1 && <Icon iconName="x"/>
        }
      </div>
    </div>
  )
}

export default Game