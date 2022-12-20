import React from 'react'
import styles from './Categories.module.scss'
import classNames from 'classnames'

const Categories = ({ activeItem, setActiveItem }) => {
  const categories = [
    'все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className={styles.Categories}>
      <ul className={styles.List}>
        {categories.map((category, index) => (
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
    </div>
  )
}

export default Categories
