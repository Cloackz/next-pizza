import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '/redux/slices/cartSlice';

import styles from './PizzaItem.module.scss';
import Button from '/components/ui/Button/Button';

import classNames from 'classnames';

const typeName = ['тонкое', 'традиционное'];
const sizePizza = [26, 30, 40];

const PizzaItem = ({ id, title, img, price, types, sizes }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddItem = () => {
    const item = {
      id,
      title,
      price,
      img,
      types: typeName[activeType],
      sizes: sizePizza[activeSize],
    };

    dispatch(addItem(item));
  };

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
          <div className={styles.ButtonPlus}></div>
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
  );
};

export default PizzaItem;
