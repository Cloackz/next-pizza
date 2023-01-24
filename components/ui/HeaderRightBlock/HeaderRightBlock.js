import { useSelector } from 'react-redux'

import Button from '/components/ui/Button/Button'
import Search from '/components/ui/Search/Search'

import styles from './Header.rightBlock.module.scss'

const HeaderRightBlock = () => {
  const { items, totalPrice } = useSelector((state) => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className={styles.RightBlock}>
      <Search className={styles.Search} />
      <Button className={styles.Button} href={'/cart'}>
        <span className={styles.ButtonPrice}>{totalPrice} ₽</span>
        <div className={styles.ButtonMount}>
          <img src="/img/cart-button.svg"></img>
          <span>{totalCount}</span>
        </div>
      </Button>
    </div>
  )
}

export default HeaderRightBlock
