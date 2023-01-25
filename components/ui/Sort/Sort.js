import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '/redux/slices/filterSlice'

import classNames from 'classnames'

import styles from './Sort.module.scss'

const Sort = () => {
  const dispatch = useDispatch()
  const sortActive = useSelector((state) => state.filter.sortId)

  const sortRef = useRef()
  const [openPopup, setOpenPopup] = useState(false)
  const [activeArrow, setActiveArrow] = useState(false)

  const sortList = [
    { name: 'популярности (воз)', sortProp: 'rating' },
    { name: 'популярности (уб)', sortProp: '-rating' },
    { name: 'цене (воз)', sortProp: 'price' },
    { name: 'цене (уб)', sortProp: '-price' },
    { name: 'алфавиту (воз)', sortProp: 'title' },
    { name: 'алфавиту (уб)', sortProp: '-title' },
  ]

  const onClickButton = () => {
    setOpenPopup(!openPopup)
    setActiveArrow(!activeArrow)
  }

  const onClickList = (objSort) => {
    dispatch(setSort(objSort))
    setOpenPopup(!openPopup)
  }

  // закрытие попапа по клику вне его видимости
  useEffect(() => {
    const HandleClickOutside = (e) => {
      const path = e.composedPath()

      if (!path.includes(sortRef.current)) {
        setOpenPopup(false)
      }
    }
    document.body.addEventListener('click', HandleClickOutside)

    return () => {
      document.body.removeEventListener('click', HandleClickOutside)
    }
  }, [])

  return (
    <div ref={sortRef} className={styles.Sort}>
      <div className={styles.SortLabel}>
        <svg
          className={classNames(
            styles.SortArrow,
            activeArrow && styles.SortArrowActive
          )}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b className={classNames(styles.SortText)}>Сортировка по:</b>
        <span
          onClick={() => onClickButton()}
          className={classNames(styles.SortText, styles.SortButton)}
        >
          {sortActive.name}
        </span>
      </div>
      {openPopup && (
        <div className={styles.SortPopup}>
          <ul className={styles.SortPopupList}>
            {sortList.map((objSort, index) => (
              <li
                className={classNames(
                  styles.SortPopupItem,
                  sortActive.sortProp === objSort.sortProp
                    ? styles.SortPopupItemActive
                    : null
                )}
                key={index}
                onClick={() => onClickList(objSort)}
              >
                {objSort.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort
