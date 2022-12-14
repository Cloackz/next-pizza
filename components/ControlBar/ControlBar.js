import React from 'react'

import GridBlock from '/components/ui/GridBlock/GridBlock'
import Categories from '/components/ui/Categories/Categories'
import Sort from '/components/ui/Sort/Sort'

import styles from './ControlBar.module.scss'

const ControlBar = () => {
  return (
    <GridBlock className={styles.ControlBar}>
      <Categories />
      <Sort />
    </GridBlock>
  )
}

export default ControlBar
