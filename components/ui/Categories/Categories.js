import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '/redux/slices/filterSlice';

import classNames from 'classnames';

import styles from './Categories.module.scss';

const Categories = React.memo(() => {
  const categories = [
    'все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.categoryId);

  const changeCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

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
  );
});

export default Categories;
