import Layout from '/components/Layout/Layout'
import GridBlock from '/components/ui/GridBlock/GridBlock'

import styles from '/styles/Cart.module.scss'

const cart = () => {
  return (
    <Layout>
      <GridBlock>
        <div className={styles.Cart}>
          <div className={styles.CartHeader}>
            <div className={styles.CartTitle}>
              <img src="/img/cart.svg" width="29" height="29"></img>
              <h1>Корзина</h1>
            </div>
            <div className={styles.CartClean}>
              <img src="/img/trash.svg" width="20" height="20"></img>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className={styles.CartBody}></div>
          <div className={styles.CartFooter}></div>
        </div>
      </GridBlock>
    </Layout>
  )
}

export default cart
