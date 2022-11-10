import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children }) => {
  return <button className={classNames(styles.Button)}>{children}</button>
}

export default Button
