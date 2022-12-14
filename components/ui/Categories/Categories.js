import { React, useState } from 'react'
import styles from './Categories.module.scss'
import data from '/data/categories'
import classNames from 'classnames'

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  return (
    <div className={styles.Categories}>
      <ul className={styles.List}>
        {data &&
          data.map((category, index) => (
            <li
              className={classNames(
                styles.Item,
                activeCategory === index ? styles.ItemActive : null
              )}
              key={index}
              onClick={() => setActiveCategory(index)}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Categories
