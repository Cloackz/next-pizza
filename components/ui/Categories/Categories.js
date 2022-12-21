import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '/redux/slices/filterSlice'

import classNames from 'classnames'

import styles from './Categories.module.scss'

const Categories = () => {
  const categories = [
    'все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  const dispatch = useDispatch()
  const activeCategory = useSelector((state) => state.filter.category)

  const changeCategory = (index) => {
    dispatch(setCategory(index))
  }

  return (
    <div className={styles.Categories}>
      <ul className={styles.List}>
        {categories.map((category, index) => (
          <li
            className={classNames(
              styles.Item,
              activeCategory === index ? styles.ItemActive : null
            )}
            key={index}
            onClick={() => changeCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
