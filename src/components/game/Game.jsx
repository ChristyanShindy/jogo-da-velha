import { useState, useEffect } from 'react'
import styles from './Game.module.css'
import GameOption from '../gameOption/GameOption'
import Icon from '../icon/Icon'
function Game () {

  const winnerTable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [3, 4, 6]
  ]
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayear, setCurrentPlayer] = useState(1)
  const [winner, setWinner]= useState(0)

  const hadleClick = (pos) => {
    if(gameState[pos] === 0 && winner === 0){
      let newGameState = [...gameState]
      newGameState[pos] = currentPlayear
      
      setGameState(newGameState)
    }
  }

  const verifyGame = () =>{
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos])
      const sum = values.reduce((sum, value) => sum + value)
      if(sum === 3 || sum === -3) setWinner(sum /3)   
    })
  }
  useEffect(() => {
    setCurrentPlayer(currentPlayear * -1)
    verifyGame()
  }, [gameState])

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