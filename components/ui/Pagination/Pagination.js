import React from 'react'
import classNames from 'classnames'

import GridBlock from '/components/ui/GridBlock/GridBlock'

import styles from './Pagination.module.scss'

const Pagination = ({
  countPizzasPerPage,
  totalPizzas,
  onClickPaginate,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPizzas / countPizzasPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <GridBlock className={styles.Pagination}>
      <ul className={styles.PaginationList}>
        {pageNumbers.map((number) => (
          <li
            onClick={() => onClickPaginate(number)}
            key={number}
            className={classNames(
              styles.PaginationItem,
              currentPage === number ? styles.PaginationItemActive : null
            )}
          >
            {number}
          </li>
        ))}
      </ul>
    </GridBlock>
  )
}

export default Pagination
