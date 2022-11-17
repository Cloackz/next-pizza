import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ onClick, children, className }) => {
  return (
    <button className={classNames(styles.Button, className)}>{children}</button>
  )
}

export default Button
