import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage, selectItems } from '/redux/slices/itemsSlice'
import classNames from 'classnames'

import GridBlock from '/components/ui/GridBlock/GridBlock'

import styles from './Pagination.module.scss'

const Pagination = () => {
  const dispatch = useDispatch()

  const { totalCount, currentPage, perPage } = useSelector(selectItems)

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <GridBlock className={styles.Pagination}>
      <ul className={styles.List}>
        {pageNumbers.map((page, index) => (
          <li className={classNames(styles.Item)} key={index}>
            <button
              className={classNames(
                styles.Button,
                currentPage === page ? styles.ButtonActive : null
              )}
              onClick={() => dispatch(setCurrentPage(page))}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </GridBlock>
  )
}

export default Pagination
