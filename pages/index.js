import React, { useState, useEffect, createContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import GridBlock from '/components/ui/GridBlock/GridBlock'
import Layout from '/components/Layout/Layout'
import Categories from '/components/ui/Categories/Categories'
import Sort from '/components/ui/Sort/Sort'
import PizzaBlock from '/components/PizzaBlock/PizzaBlock'

import styles from '/styles/Main.module.scss'

export const SearchContext = createContext()

const index = () => {
  const dispatch = useDispatch()
  const { category, sort } = useSelector((state) => state.filter)

  const [searchValue, setSearchValue] = useState('')
  const [pizzasItems, setPizzasItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const categoryFetch = category > 0 ? `category=${category}` : ''
  const sortFectch = sort.sortProp.includes('-') ? 'desc' : 'asc'
  const sortBy = sort.sortProp.replace('-', '')
  const search = searchValue ? `&search=${searchValue}` : ''

  const API_URL = 'https://63998b6316b0fdad7740477b.mockapi.io/items?'

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `${API_URL}${categoryFetch}&sortBy=${sortBy}&order=${sortFectch}${search}`
    )
      .then((res) => {
        return res.json()
      })
      .then((pizzas) => {
        setPizzasItems(pizzas)
        setIsLoading(false)
      })
  }, [category, sort.sortProp, searchValue])

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Layout page="main">
        <GridBlock className={styles.ControlBar}>
          <Categories />
          <Sort />
        </GridBlock>
        <PizzaBlock items={pizzasItems} isLoading={isLoading} />
      </Layout>
    </SearchContext.Provider>
  )
}

export default index
