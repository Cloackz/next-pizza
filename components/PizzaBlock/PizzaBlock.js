import React, { useState, useEffect } from 'react'

import GridBlock from '/components/ui/GridBlock/GridBlock'
import PizzaItem from '/components/PizzaItem/PizzaItem'
import Skeleton from '/components/ui/PizzaSkeleton/PizzaSkeleton'

import styles from './PizzaBlock.module.scss'

const PizzaBlock = () => {
  const API_URL = 'https://63998b6316b0fdad7740477b.mockapi.io/items'

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json()
      })
      .then((pizzas) => {
        setItems(pizzas)
        setIsLoading(false)
      })
  }, [])

  return (
    <GridBlock>
      <h1 className={styles.Title}>Все пиццы</h1>
      <ul className={styles.List}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => (
              <PizzaItem
                title={item.title}
                img={`/img/pizzaItem/${item.src}.png`}
                width={260}
                height={260}
                price={item.price}
                types={item.types}
                sizes={item.sizes}
                key={item.id}
              />
            ))}
      </ul>
    </GridBlock>
  )
}

export default PizzaBlock
