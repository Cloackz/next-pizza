import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '/redux/slices/cartSlice'

import styles from './PizzaItem.module.scss'
import Button from '/components/ui/Button/Button'

import classNames from 'classnames'

const typeName = ['тонкое', 'традиционное']
const sizePizza = [26, 30, 40]

const PizzaItem = ({ id, title, img, price, types, sizes }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  )

  const [activeSize, setActiveSize] = useState(0)
  const [activeType, setActiveType] = useState(0)

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAddItem = () => {
    const item = {
      id,
      title,
      price,
      img,
      types: typeName[activeType],
      sizes: sizePizza[activeSize],
    }

    dispatch(addItem(item))
  }

  return (
    <li className={styles.Item}>
      <img
        className={styles.Image}
        src={img}
        alt={title}
        width={260}
        height={260}
      />
      <span className={styles.Title}>{title}</span>
      <div className={styles.Options}>
        <ul className={classNames(styles.OptionsList, styles.OptionsListDough)}>
          {types.map((type) => (
            <li
              className={classNames(
                styles.OptionsItem,
                activeType === type ? styles.OptionsItemActive : null
              )}
              key={type}
              onClick={() => setActiveType(type)}
            >
              {typeName[type]}
            </li>
          ))}
        </ul>
        <ul className={classNames(styles.OptionsList, styles.OptionsListSize)}>
          {sizes.map((size, index) => (
            <li
              className={classNames(
                styles.OptionsItem,
                activeSize === index ? styles.OptionsItemActive : null
              )}
              key={size}
              onClick={() => setActiveSize(index)}
            >
              {`${size} см.`}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.Wrapper}>
        <span className={styles.Price}>от {price} ₽</span>
        <Button className={styles.Button} onClick={onClickAddItem}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span className={styles.ButtonText}>Добавить</span>
          <div
            className={classNames(
              styles.ButtonCount,
              addedCount && styles.ButtonCountActive
            )}
          >
            {addedCount > 0 && addedCount}
          </div>
        </Button>
      </div>
    </li>
  )
}

export default PizzaItem
