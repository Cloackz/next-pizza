import Link from 'next/link'
import classNames from 'classnames'

import Layout from '/components/Layout/Layout'
import GridBlock from '/components/ui/GridBlock/GridBlock'
import Button from '/components/ui/Button/Button'

import styles from '/styles/Cart.module.scss'

const cart = () => {
  return (
    <Layout>
      <GridBlock>
        <div className={styles.Cart}>
          <div className={styles.Header}>
            <div className={styles.Title}>
              <img src="/img/cart.svg" width="29" height="29"></img>
              <h1>Корзина</h1>
            </div>
            <div className={styles.Clean}>
              <img src="/img/trash.svg" width="20" height="20"></img>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className={styles.Body}>
            <ul className={styles.List}>
              <li className={styles.Item}>
                <div className={styles.ItemLeft}>
                  <img
                    className={styles.ItemImg}
                    src="/img/pizzaItem/burger.png"
                  ></img>
                  <div className={styles.ItemInfo}>
                    <h3 className={styles.ItemTitle}>Сырный цыпленок</h3>
                    <span className={styles.ItemOptions}>
                      тонкое тесто, 26 см.
                    </span>
                  </div>
                </div>
                <div className={styles.Count}>
                  <button
                    className={classNames(
                      styles.CountButton,
                      styles.CountButtonMinus
                    )}
                  ></button>
                  <span className={styles.CountText}>1</span>
                  <button
                    className={classNames(
                      styles.CountButton,
                      styles.CountButtonPlus
                    )}
                  ></button>
                </div>
                <div className={styles.Price}>770 ₽</div>
                <button className={styles.ButtonDelete}></button>
              </li>
              <li className={styles.Item}>
                <div className={styles.ItemLeft}>
                  <img
                    className={styles.ItemImg}
                    src="/img/pizzaItem/burger.png"
                  ></img>
                  <div className={styles.ItemInfo}>
                    <h3 className={styles.ItemTitle}>Сырный цыпленок</h3>
                    <span className={styles.ItemOptions}>
                      тонкое тесто, 26 см.
                    </span>
                  </div>
                </div>
                <div className={styles.Count}>
                  <button
                    className={classNames(
                      styles.CountButton,
                      styles.CountButtonMinus
                    )}
                  ></button>
                  <span className={styles.CountText}>1</span>
                  <button
                    className={classNames(
                      styles.CountButton,
                      styles.CountButtonPlus
                    )}
                  ></button>
                </div>
                <div className={styles.Price}>770 ₽</div>
                <button className={styles.ButtonDelete}></button>
              </li>
            </ul>
          </div>
          <div className={styles.Footer}>
            <div className={styles.FinalInformation}>
              <div>
                <span>Всего пицц:</span>
                <span className={styles.FinalInformationPizzas}>3 шт.</span>
              </div>
              <div>
                <span>Сумма заказа:</span>
                <span className={styles.FinalInformationPrice}>900 ₽</span>
              </div>
            </div>
            <div className={styles.Buttons}>
              <Link href="/">
                <Button className={styles.ButtonBack}>Вернуться назад</Button>
              </Link>
              <Button className={styles.ButtonPay}>Оплатить сейчас</Button>
            </div>
          </div>
        </div>
      </GridBlock>
    </Layout>
  )
}

export default cart
