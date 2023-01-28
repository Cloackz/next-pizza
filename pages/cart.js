import { useDispatch, useSelector } from 'react-redux'
import { clearItems, selectCart } from '/redux/slices/cartSlice'
import Link from 'next/link'

import CartItem from '/components/ui/CartItem/CartItem'
import Layout from '/components/Layout/Layout'
import GridBlock from '/components/ui/GridBlock/GridBlock'
import Button from '/components/ui/Button/Button'

import styles from '/styles/Cart.module.scss'

const cart = () => {
  const dispatch = useDispatch()
  const obj = useSelector((state) => state.cart.items)
  const { items, totalPrice } = useSelector(selectCart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const onClickClearCart = () => {
    dispatch(clearItems())
  }
  return (
    <Layout>
      <GridBlock>
        {items.length > 0 ? (
          <div className={styles.Cart}>
            <div className={styles.Header}>
              <div className={styles.Title}>
                <img src="/img/cart.svg" width="29" height="29"></img>
                <h1>Корзина</h1>
              </div>
              <div className={styles.Clean} onClick={onClickClearCart}>
                <img src="/img/trash.svg" width="20" height="20"></img>
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className={styles.Body}>
              <ul className={styles.List}>
                {obj.map((item) => (
                  <CartItem {...item} key={item.id} />
                ))}
              </ul>
            </div>
            <div className={styles.Footer}>
              <div className={styles.FinalInformation}>
                <div>
                  <span>Всего пицц: </span>
                  <span className={styles.FinalInformationPizzas}>
                    {totalCount} шт.
                  </span>
                </div>
                <div>
                  <span>Сумма заказа: </span>
                  <span className={styles.FinalInformationPrice}>
                    {totalPrice} ₽
                  </span>
                </div>
              </div>
              <div className={styles.Buttons}>
                <Link href="/">
                  <Button className={styles.ButtonBack}>Вернуться назад</Button>
                </Link>
                <Link href="/order">
                  <Button className={styles.ButtonPay}>Оплатить сейчас</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.CartEmpty}>
            <img src="/img/empty-cart.png" width="300" height="254" />
            <h1>Корзина пустая</h1>
            <p className={styles.CartText}>
              Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
              заказать пиццу, перейди на главную страницу.
            </p>
            <Link href="/">
              <Button className={styles.ButtonBackEmpty}>
                Вернуться назад
              </Button>
            </Link>
          </div>
        )}
      </GridBlock>
    </Layout>
  )
}

export default cart
