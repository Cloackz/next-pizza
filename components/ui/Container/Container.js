import classNames from 'classnames'

import styles from './Container.module.scss'

const Container = ({ children = null, className = '' }) => {
  return (
    <div className={classNames(styles.Container, className)}>{children}</div>
  )
}

export default Container
