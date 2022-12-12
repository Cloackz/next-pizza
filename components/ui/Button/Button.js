import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={classNames(styles.Button, className)}>
      {children}
    </button>
  )
}

export default Button
