import { React, useState } from 'react'
import Image from 'next/image'
import styles from './PizzaItem.module.scss'
import Button from '/components/ui/Button/Button'

import classNames from 'classnames'

const PizzaItem = ({ title, img, width, height }) => {
  const [activeOptionDough, setActiveOptionDough] = useState(0)
  const [activeOptionSize, setActiveOptionSize] = useState(0)
  return (
    <li className={styles.Item}>
      <Image
        className={styles.Image}
        src={img}
        alt={title}
        objectFit="cover"
        width={width}
        height={height}
      />
      <span className={styles.Title}>{title}</span>
      <div className={styles.Options}>
        <ul className={classNames(styles.OptionsList, styles.OptionsListDough)}>
          <li className={styles.OptionsItem}>тонкое</li>
          <li className={styles.OptionsItem}>традиционное</li>
        </ul>
        <ul className={classNames(styles.OptionsList, styles.OptionsListSize)}>
          <li className={styles.OptionsItem}>26 см.</li>
          <li className={styles.OptionsItem}>30 см.</li>
          <li className={styles.OptionsItem}>40 см.</li>
        </ul>
      </div>
      <div className={styles.Wrapper}>
        <span className={styles.Price}>от 350 р</span>
        <Button>Добавить</Button>
      </div>
    </li>
  )
}

export default PizzaItem
