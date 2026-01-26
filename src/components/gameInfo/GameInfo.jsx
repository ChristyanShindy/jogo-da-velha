import styles from '../gameInfo/GameInfo.module.css'

import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({ currentPlayear, winner, onReset }) {

  const shoulEnableButton = () => {
    if(winner !== 0) return true
  }

  return (
    <div className={styles.gameInfo}>
      {
        winner === 0 &&
          <>
            <h4>
              Próximo a jogar:
            </h4>
            {
              currentPlayear === 1 && <Icon iconName="circle"/>
            }
            {
              currentPlayear === -1 && <Icon iconName="x"/>
            }
          </>
      }
      {
        winner !== 0 &&
          <>
            <h4> Fim de jogo! Campeão:</h4>
            {
              winner === 1 && <Icon iconName="circle"/>
            }
            {
              winner === -1 && <Icon iconName="x"/>
            }
          </>
      }
      <Button
        onClick={onReset}
        disabled={!shoulEnableButton()}
      >
        Reset
      </Button>
      </div>
    )
}

export default GameInfo
  
