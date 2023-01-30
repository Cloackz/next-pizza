import { useDispatch, useSelector } from 'react-redux';
import { clearItems, selectCart } from '/redux/slices/cartSlice';
import Link from 'next/link';

import CartItem from '/components/ui/CartItem/CartItem';
import Layout from '/components/Layout/Layout';
import GridBlock from '/components/ui/GridBlock/GridBlock';
import Button from '/components/ui/Button/Button';

import styles from '/styles/Cart.module.scss';

const cart = () => {
  const dispatch = useDispatch();
  const obj = useSelector((state) => state.cart.items);
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClearCart = () => {
    dispatch(clearItems());
  };
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5H4.16667H17.5"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33337 9.16667V14.1667"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6666 9.16667V14.1667"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

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
  );
};

export default cart;
