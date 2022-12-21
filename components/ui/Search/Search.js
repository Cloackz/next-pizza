import React, { useContext } from 'react'
import { SearchContext } from '/pages/index'

import styles from './Search.module.scss'

const Search = ({ className }) => {
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <div className={className}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.Search}
        placeholder="Поиск пиццы..."
      ></input>
    </div>
  )
}

export default Search
