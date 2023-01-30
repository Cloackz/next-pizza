import { useDispatch, useSelector } from 'react-redux'
import { addItem, minusItem, removeItem } from '/redux/slices/cartSlice'
import classNames from 'classnames'

import styles from './CartItem.module.scss'

const CartItem = ({ id, title, img, price, types, sizes, count }) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    )
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }

  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <li className={styles.Item}>
      <div className={styles.ItemLeft}>
        <img className={styles.ItemImg} src={img}></img>
        <div className={styles.ItemInfo}>
          <h3 className={styles.ItemTitle}>{title}</h3>
          <span className={styles.ItemOptions}>
            {types}, {sizes} см.
          </span>
        </div>
      </div>
      <div className={styles.ItemRight}>
        <div className={styles.Count}>
          <button
            disabled={count === 1}
            className={classNames(
              styles.CountButton,
              styles.CountButtonMinus,
              count === 1 && styles.CountButtonDisabled
            )}
            onClick={onClickMinus}
          ></button>
          <span className={styles.CountText}>{count}</span>
          <button
            className={classNames(styles.CountButton, styles.CountButtonPlus)}
            onClick={onClickPlus}
          ></button>
        </div>
        <div className={styles.Price}>{price * count} ₽</div>
        <button
          className={styles.ButtonDelete}
          onClick={onClickRemove}
        ></button>
      </div>
    </li>
  )
}

export default CartItem
