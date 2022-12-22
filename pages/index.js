import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import GridBlock from '/components/ui/GridBlock/GridBlock'
import Layout from '/components/Layout/Layout'
import Categories from '/components/ui/Categories/Categories'
import Sort from '/components/ui/Sort/Sort'
import PizzaBlock from '/components/PizzaBlock/PizzaBlock'
import Pagination from '/components/ui/Pagination/Pagination'

import styles from '/styles/Main.module.scss'

const index = () => {
  const { categoryId, sortId } = useSelector((state) => state.filter)
  const { searchValue } = useSelector((state) => state.search)

  const [pizzasItems, setPizzasItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [countPizzas] = useState(8)

  useEffect(() => {
    const API_URL = `https://63998b6316b0fdad7740477b.mockapi.io/items?`
    const categoryApi = categoryId > 0 ? `category=${categoryId}` : ''
    const sortApi = sortId.sortProp.includes('-') ? 'desc' : 'asc'
    const sortByApi = sortId.sortProp.replace('-', '')
    const searchApi = searchValue ? `&search=${searchValue}` : ''

    setIsLoading(true)
    axios
      .get(
        `${API_URL}&page=${currentPage}&${categoryApi}&sortBy=${sortByApi}&order=${sortApi}${searchApi}`
      )
      .then((res) => {
        setPizzasItems(res.data)
        setIsLoading(false)
      })
  }, [currentPage, categoryId, sortId.sortProp, searchValue])

  const lastPizzaIndex = currentPage * countPizzas
  const firstPizzaIndex = lastPizzaIndex - countPizzas
  const currentPizza = pizzasItems.slice(firstPizzaIndex, lastPizzaIndex)

  const onClickPaginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Layout page="main">
      <GridBlock className={styles.ControlBar}>
        <Categories />
        <Sort />
      </GridBlock>
      <PizzaBlock items={currentPizza} isLoading={isLoading} />
      <Pagination
        countPizzas={countPizzas}
        totalPizzas={pizzasItems.length}
        onClickPaginate={onClickPaginate}
      />
    </Layout>
  )
}

export default index
