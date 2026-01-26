import styles from '../button/Button.module.css'

function Button ({ children, onClick, disabled }) {
  return (
    <button 
      className={styles.button} 
      onClick={onClick}
      disabled={disabled}
    >
      { children }
    </button>
  )
}

export default Button