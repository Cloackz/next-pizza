import classNames from 'classnames'
import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({ children, className, onClick, href = '' }) => {
  return href ? (
    <Link
      href={href}
      onClick={onClick}
      className={classNames(styles.Button, className)}
    >
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={classNames(styles.Button, className)}>
      {children}
    </button>
  )
}

export default Button
