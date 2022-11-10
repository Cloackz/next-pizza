import React from 'react'
import classNames from 'classnames'

import styles from './GridBlock.module.scss'

const GridBlock = ({
  children = null,
  className = '',
  Tag = 'div',
  id = null,
}) => (
  <Tag className={classNames(styles.Container, className)} id={id}>
    {children}
  </Tag>
)

export default GridBlock
