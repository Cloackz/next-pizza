import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '/redux/slices/filterSlice';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

const Search = ({ className }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const updateSeacrhValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 500),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSeacrhValue(e.target.value);
  };

  return (
    <div className={className}>
      <input
        value={value}
        onChange={(e) => onChangeInput(e)}
        className={styles.Search}
        placeholder="Поиск пиццы..."
      ></input>
    </div>
  );
};

export default Search;
