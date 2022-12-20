import React, { useState, useEffect } from 'react'

import GridBlock from '/components/ui/GridBlock/GridBlock'
import Layout from '/components/Layout/Layout'
import Categories from '/components/ui/Categories/Categories'
import Sort from '/components/ui/Sort/Sort'
import PizzaBlock from '/components/PizzaBlock/PizzaBlock'

import styles from '/styles/Main.module.scss'

const index = () => {
  const API_URL = 'https://63998b6316b0fdad7740477b.mockapi.io/items?'

  const [pizzasItems, setPizzasItems] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeSort, setActiveSort] = useState({
    name: 'популярности',
    sortProp: 'rating',
  })

  const category = activeCategory > 0 ? `category=${activeCategory}` : ''
  const sort = activeSort.sortProp.includes('-') ? 'desc' : 'asc'
  const sortBy = activeSort.sortProp.replace('-', '')

  useEffect(() => {
    setIsLoading(true)
    fetch(`${API_URL}${category}&sortBy=${sortBy}&order=${sort}`)
      .then((res) => {
        return res.json()
      })
      .then((pizzas) => {
        setPizzasItems(pizzas)
        setIsLoading(false)
      })
  }, [activeCategory, activeSort])

  return (
    <Layout type="sort">
      <GridBlock className={styles.ControlBar}>
        <Categories
          activeItem={activeCategory}
          setActiveItem={(index) => setActiveCategory(index)}
        />
        <Sort
          activeItem={activeSort}
          setActiveItem={(index) => setActiveSort(index)}
        />
      </GridBlock>
      <PizzaBlock items={pizzasItems} isLoading={isLoading} />
    </Layout>
  )
}

export default index
