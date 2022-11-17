import { React, useState } from 'react'
import GridBlock from '/components/ui/GridBlock/GridBlock'
import styles from './Categories.module.scss'
import data from '/data/categories'
import classNames from 'classnames'

const Categories = () => {
  const [activeItem, setActiveItem] = useState(0)
  return (
    <GridBlock className={styles.Categories}>
      <ul className={styles.List}>
        {data &&
          data.map((category, index) => (
            <li
              className={classNames(
                styles.Item,
                activeItem === index ? styles.ItemActive : null
              )}
              key={index}
              onClick={() => setActiveItem(index)}
            >
              {category}
            </li>
          ))}
      </ul>
    </GridBlock>
  )
}

export default Categories
